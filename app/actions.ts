'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(prevState: unknown, formData: FormData) {
  const name = formData.get('name') as string
  const title = formData.get('title') as string
  const description = formData.get('description') as string

  // Validate fields
  if (!name || !title || !description) {
    return { message: 'Please fill in all fields', success: false }
  }

  try {
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: process.env.EMAIL_USER as string,
      subject: `Portfolio Contact: ${title}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Title:</strong> ${title}</p>
        <p><strong>Message:</strong></p>
        <p>${description}</p>
      `,
    })
    
    return { message: 'Message sent successfully!', success: true }
  } catch (error) {
    console.error('Email error:', error)
    return { message: 'Failed to send message. Please try again.', success: false }
  }
}
