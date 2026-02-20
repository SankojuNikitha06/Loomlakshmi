"use client"

import type React from "react"

interface CulturalImageProps {
  src: string
  alt: string
  className?: string
  showFrame?: boolean
  enableParallax?: boolean
}

export function CulturalImage({
  src,
  alt,
  className = "",
  showFrame = true,
  enableParallax = true,
}: CulturalImageProps) {
  return (
    <div
      className={`
      ${enableParallax ? "parallax-hover" : ""} 
      ${showFrame ? "image-frame-cultural" : ""} 
      ${className}
    `}
    >
      <img src={src || "/placeholder.svg"} alt={alt} className="w-full h-full object-cover" loading="lazy" />
    </div>
  )
}

export function WeavingSceneCard({
  title,
  description,
  imageSrc,
  children,
}: {
  title: string
  description: string
  imageSrc: string
  children?: React.ReactNode
}) {
  return (
    <div className="card-3d bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden mandala-pattern glow-effect hover-lift">
      <div className="relative h-48 overflow-hidden">
        <CulturalImage src={imageSrc} alt={title} className="w-full h-full" enableParallax={true} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-bold font-kadwa">{title}</h3>
          <p className="text-sm opacity-90 font-tiro">{description}</p>
        </div>
      </div>
      {children && <div className="p-6 fabric-texture">{children}</div>}
    </div>
  )
}
