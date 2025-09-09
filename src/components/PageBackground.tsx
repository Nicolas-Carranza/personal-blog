'use client'

import { 
  DotGridBackground, 
  GeometricMeshBackground, 
  OrganicBlobBackground, 
  GridGlowBackground, 
  ParticlesFieldBackground,
  NeuralNetworkBackground 
} from './backgrounds/BackgroundVariants'

interface PageBackgroundProps {
  variant?: 'dotgrid' | 'geometric' | 'organic' | 'gridglow' | 'particles' | 'neural'
  children: React.ReactNode
  className?: string
}

export const PageBackground = ({ 
  variant = 'dotgrid', 
  children, 
  className = "min-h-screen" 
}: PageBackgroundProps) => {
  const backgroundComponents = {
    dotgrid: DotGridBackground,
    geometric: GeometricMeshBackground,
    organic: OrganicBlobBackground,
    gridglow: GridGlowBackground,
    particles: ParticlesFieldBackground,
    neural: NeuralNetworkBackground
  }
  
  const BackgroundComponent = backgroundComponents[variant]

  return (
    <div className={`${className} relative overflow-hidden`}>
      {/* Dynamic Background */}
      <BackgroundComponent />
      
      {/* Page Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

export default PageBackground
