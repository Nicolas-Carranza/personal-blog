import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

// Email validation function
function isValidEmail(email: string): boolean {
  // Basic format check with the regex you provided (improved)
  const emailRegex = /^[\w\.-]+@([\w-]+\.)+[\w-]{2,4}$/
  
  if (!emailRegex.test(email)) {
    return false
  }
  
  // Additional checks
  const [localPart, domain] = email.split('@')
  
  // Check local part length (before @)
  if (localPart.length > 64) {
    return false
  }
  
  // Check domain length (after @)
  if (domain.length > 253) {
    return false
  }
  
  // Check for consecutive dots
  if (email.includes('..')) {
    return false
  }
  
  // Check for common invalid patterns
  const invalidPatterns = [
    /^\./, // starts with dot
    /\.$/, // ends with dot
    /@\./, // @ followed by dot
    /\.@/  // dot followed by @
  ]
  
  for (const pattern of invalidPatterns) {
    if (pattern.test(email)) {
      return false
    }
  }
  
  return true
}

// Check if domain has MX record (basic domain existence check)
async function isDomainValid(domain: string): Promise<boolean> {
  try {
    // For browser/edge environments, we'll skip DNS checks
    // In a Node.js environment, you could use 'dns' module for MX record checks
    
    // Basic domain format check
    const domainRegex = /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9](?:\.[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])*$/
    
    if (!domainRegex.test(domain)) {
      return false
    }
    
    // Check for valid TLD (at least 2 characters)
    const tldMatch = domain.match(/\.([a-zA-Z]{2,})$/)
    if (!tldMatch) {
      return false
    }
    
    // Block obviously fake domains
    const suspiciousDomains = [
      'test.com',
      'example.com', 
      'temp.com',
      'fake.com',
      'invalid.com',
      'nowhere.com',
      '123.com'
    ]
    
    if (suspiciousDomains.includes(domain.toLowerCase())) {
      return false
    }
    
    return true
  } catch (error) {
    // If we can't validate, allow it (fail open for availability)
    return true
  }
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Normalize email (trim and lowercase)
    const normalizedEmail = email.trim().toLowerCase()

    // Validate email format
    if (!isValidEmail(normalizedEmail)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    // Extract domain for additional validation
    const domain = normalizedEmail.split('@')[1]
    
    // Check domain validity
    if (!(await isDomainValid(domain))) {
      return NextResponse.json(
        { error: 'Please enter a valid email address with a real domain' },
        { status: 400 }
      )
    }

    // Create data directory if it doesn't exist
    const dataDir = path.join(process.cwd(), 'data')
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }

    const csvFilePath = path.join(dataDir, 'newsletter-subscribers.csv')
    const timestamp = new Date().toISOString()
    const source = 'blog-newsletter'

    // Check if file exists, if not create with headers
    if (!fs.existsSync(csvFilePath)) {
      const headers = 'Email,Timestamp,Source\n'
      fs.writeFileSync(csvFilePath, headers)
    }

    // Check if email already exists (case insensitive)
    const existingData = fs.readFileSync(csvFilePath, 'utf-8')
    if (existingData.toLowerCase().includes(normalizedEmail)) {
      return NextResponse.json(
        { error: 'Email already subscribed' },
        { status: 409 }
      )
    }

    // Append new subscriber
    const newLine = `${normalizedEmail},${timestamp},${source}\n`
    fs.appendFileSync(csvFilePath, newLine)

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Newsletter signup error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}