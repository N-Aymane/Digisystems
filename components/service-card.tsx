"use client"

import { useState } from "react"
import { Lightbulb, BarChart, ClipboardList, Code, GraduationCap, Shield, type LucideIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getIcon = (): LucideIcon => {
    switch (icon) {
      case "Lightbulb":
        return Lightbulb
      case "BarChart":
        return BarChart
      case "ClipboardList":
        return ClipboardList
      case "Code":
        return Code
      case "GraduationCap":
        return GraduationCap
      case "Shield":
        return Shield
      default:
        return Lightbulb
    }
  }

  const IconComponent = getIcon()

  return (
    <Card
      className={`transition-all duration-300 border-0 ${
        isHovered ? "shadow-xl transform -translate-y-1" : "shadow-md"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="pb-2">
        <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-4">
          <IconComponent className="h-7 w-7 text-gray-900" />
        </div>
        <CardTitle className="text-xl text-gray-900">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}
