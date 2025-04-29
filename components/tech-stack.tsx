"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function TechStack() {
  const technologies = [
    { name: "Laravel", color: "#FF2D20" },
    { name: "Node.js", color: "#339933" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "NestJS", color: "#E0234E" },
    { name: "Symfony", color: "#000000" },
    { name: "React", color: "#61DAFB" },
    { name: "Vue.js", color: "#4FC08D" },
    { name: "Java", color: "#007396" },
    { name: "Spring", color: "#6DB33F" },
    { name: "Docker", color: "#2496ED" },
    { name: "AWS", color: "#FF9900" },
  ]

  // Use null as initial state to avoid hydration mismatch
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [animateOnScroll, setAnimateOnScroll] = useState(false)
  // Add a mounted state to prevent hydration mismatch
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // Set mounted to true after component mounts
    setIsMounted(true)

    const handleScroll = () => {
      const techSection = document.getElementById("technologies")
      if (techSection) {
        const rect = techSection.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0
        if (isVisible) {
          setAnimateOnScroll(true)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on initial load

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 24 } },
  }

  // Only render the animated content after component has mounted on the client
  if (!isMounted) {
    return (
      <div className="flex flex-wrap justify-center gap-4">
        {technologies.map((tech, index) => (
          <div key={index} className="px-5 py-3 rounded-md text-sm font-medium bg-gray-100 text-gray-800 shadow-sm">
            {tech.name}
          </div>
        ))}
      </div>
    )
  }

  return (
    <motion.div
      className="flex flex-wrap justify-center gap-4"
      variants={container}
      initial="hidden"
      animate={animateOnScroll ? "show" : "hidden"}
    >
      {technologies.map((tech, index) => (
        <motion.div
          key={index}
          className="relative"
          variants={item}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div
            className="px-5 py-3 rounded-md text-sm font-medium transition-all duration-300 shadow-sm cursor-pointer"
            style={{
              backgroundColor: hoveredIndex === index ? tech.color : "#f3f4f6",
              color: hoveredIndex === index ? "#ffffff" : "#1f2937",
            }}
          >
            {tech.name}
          </div>
          {hoveredIndex === index && (
            <motion.div
              className="absolute -inset-1 rounded-lg bg-gradient-to-r -z-10"
              style={{ backgroundImage: `linear-gradient(45deg, ${tech.color}33, ${tech.color}66)` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              layoutId="techHighlight"
            />
          )}
        </motion.div>
      ))}
    </motion.div>
  )
}
