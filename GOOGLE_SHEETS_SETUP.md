# Google Sheets Newsletter Integration Setup

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Blog Newsletter Subscribers"
4. Set up columns in row 1:
   - Column A: "Email"
   - Column B: "Timestamp" 
   - Column C: "Source"

## Step 2: Create Google Apps Script

1. In your Google Sheet, go to **Extensions** → **Apps Script**
2. Delete the default code and paste this script:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Parse the request data
    const data = JSON.parse(e.postData.contents);
    
    // Add the data to the sheet
    sheet.appendRow([
      data.email,
      data.timestamp,
      data.source || 'blog-newsletter'
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Handle GET requests (for testing)
  return ContentService
    .createTextOutput("Newsletter signup endpoint is working!")
    .setMimeType(ContentService.MimeType.TEXT);
}
```

## Step 3: Deploy the Script

1. Click the **Deploy** button in the Apps Script editor
2. Choose **New deployment**
3. Set type to **Web app**
4. Set these options:
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Click **Deploy**
6. **Copy the Web app URL** - this is your endpoint!

## Step 4: Update Your Blog Code

Replace the placeholder URL in your blog code with your actual deployment URL:

```typescript
const response = await fetch('YOUR_ACTUAL_APPS_SCRIPT_URL_HERE', {
```

## Step 5: Test It

1. Try submitting an email on your blog
2. Check your Google Sheet - you should see the email appear!

## Optional: Set Up Email Notifications

Add this to your Apps Script to get notified of new signups:

```javascript
function sendNotification(email) {
  const subject = 'New Blog Newsletter Signup';
  const body = `New subscriber: ${email}`;
  
  // Send to your email
  GmailApp.sendEmail('Nicolás.carranza.work@gmail.com', subject, body);
}
```

Then call `sendNotification(data.email);` in your doPost function.

## Security Notes

- The script runs with your Google account permissions
- Only you can see the spreadsheet data
- The endpoint is public but only accepts POST requests with JSON data
- Consider adding basic validation if needed

## Troubleshooting

- Make sure your Google Sheet is the active sheet when creating the script
- Check the Apps Script execution log for errors
- Test the endpoint URL directly in your browser (should show "Newsletter signup endpoint is working!")
- Ensure CORS is handled (no-cors mode in fetch)