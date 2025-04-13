"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface EngagementModelProps {
  title: string
  description: string
}

export default function EngagementModel({ title, description }: EngagementModelProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className={`transition-all duration-300 border-0 ${
        isHovered ? "shadow-xl transform -translate-y-1" : "shadow-md"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-gray-900">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}
