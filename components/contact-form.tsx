"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { sendEmail } from "@/app/actions"
import { Loader2 } from "lucide-react"
import { toast } from "@/hooks/use-toast"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await sendEmail(formData)

      toast({
        title: "Message envoyé",
        description: "Nous vous contacterons rapidement.",
        variant: "default",
      })

      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      })
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      })
      console.error("Error sending email:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="border-0 shadow-lg">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-700">
                Nom
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Votre nom"
                required
                className="border-gray-300 focus:border-gray-500 focus:ring-gray-500"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="votre@email.com"
                required
                className="border-gray-300 focus:border-gray-500 focus:ring-gray-500"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="company" className="text-sm font-medium text-gray-700">
              Entreprise
            </label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Nom de votre entreprise"
              className="border-gray-300 focus:border-gray-500 focus:ring-gray-500"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-700">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Décrivez votre projet..."
              rows={4}
              required
              className="border-gray-300 focus:border-gray-500 focus:ring-gray-500"
            />
          </div>
          <Button type="submit" className="w-full bg-gray-900 hover:bg-gray-800 text-white" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Envoi en cours...
              </>
            ) : (
              "Envoyer"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
