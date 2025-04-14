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

// "use server"

// import nodemailer from "nodemailer"

// interface EmailData {
//   name: string
//   email: string
//   company: string
//   message: string
// }

// export async function sendEmail(data: EmailData) {
//   // Validate the data
//   if (!data.name || !data.email || !data.message) {
//     throw new Error("Missing required fields")
//   }

//   // Email validation regex
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//   if (!emailRegex.test(data.email)) {
//     throw new Error("Invalid email format")
//   }

//   try {
//     // Get environment variables
//     const smtpHost = process.env.SMTP_HOST
//     const smtpPort = Number.parseInt(process.env.SMTP_PORT || "587")
//     const smtpUser = process.env.SMTP_USER
//     const smtpPass = process.env.SMTP_PASS
//     const recipientEmail = process.env.RECIPIENT_EMAIL

//     // Check if all required environment variables are set
//     if (!smtpHost || !smtpUser || !smtpPass || !recipientEmail) {
//       console.error("Missing email configuration. Please set all required environment variables.")
//       throw new Error("Email configuration error")
//     }

//     // Create a transporter
//     const transporter = nodemailer.createTransport({
//       host: smtpHost,
//       port: smtpPort,
//       secure: smtpPort === 465, // true for 465, false for other ports
//       auth: {
//         user: smtpUser,
//         pass: smtpPass,
//       },
//     })

//     // Email content
//     const mailOptions = {
//       from: `"Site Web Digisystems" <${smtpUser}>`,
//       to: recipientEmail,
//       replyTo: data.email,
//       subject: `Nouveau message de contact de ${data.name}`,
//       text: `
// Nom: ${data.name}
// Email: ${data.email}
// Entreprise: ${data.company || "Non spécifiée"}

// Message:
// ${data.message}
//       `,
//       html: `
// <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
//   <h2 style="color: #333;">Nouveau message de contact</h2>
//   <p><strong>Nom:</strong> ${data.name}</p>
//   <p><strong>Email:</strong> ${data.email}</p>
//   <p><strong>Entreprise:</strong> ${data.company || "Non spécifiée"}</p>
//   <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-left: 4px solid #333;">
//     <h3 style="margin-top: 0;">Message:</h3>
//     <p style="white-space: pre-line;">${data.message}</p>
//   </div>
//   <p style="color: #777; font-size: 12px; margin-top: 30px;">
//     Ce message a été envoyé depuis le formulaire de contact du site web Digisystems.
//   </p>
// </div>
//       `,
//     }

//     // Send the email
//     await transporter.sendMail(mailOptions)

//     return { success: true }
//   } catch (error) {
//     console.error("Error sending email:", error)
//     throw new Error("Failed to send email")
//   }
// }
