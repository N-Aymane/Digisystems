"use server"

interface EmailData {
  name: string
  email: string
  company: string
  message: string
}

export async function sendEmail(data: EmailData) {
  // Validate the data
  if (!data.name || !data.email || !data.message) {
    throw new Error("Missing required fields")
  }

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(data.email)) {
    throw new Error("Invalid email format")
  }

  try {
    // In a real implementation, you would use a service like Nodemailer, SendGrid, etc.
    // For demonstration purposes, we'll simulate a successful email send

    // Log the email data (for demonstration)
    console.log("Email data:", {
      to: "contact@digisystems.ma", // Replace with your actual email
      from: data.email,
      subject: `Contact form submission from ${data.name}`,
      text: `
        Name: ${data.name}
        Email: ${data.email}
        Company: ${data.company || "Not provided"}
        
        Message:
        ${data.message}
      `,
    })

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    throw new Error("Failed to send email")
  }
}
