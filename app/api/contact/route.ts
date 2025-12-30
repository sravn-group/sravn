import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, enquiryType, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Send email to SRAVN
    await resend.emails.send({
      from: "SRAVN Website <onboarding@resend.dev>",
      to: "sravninfo@gmail.com",
      subject: `New Inquiry from ${firstName} ${lastName} - ${enquiryType || "General"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4a5d4a; border-bottom: 2px solid #4a5d4a; padding-bottom: 10px;">
            New Inquiry from SRAVN Website
          </h2>
          
          <div style="background: #f9f8f4; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Contact Details</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Enquiry Type:</strong> ${enquiryType || "Not specified"}</p>
          </div>
          
          <div style="background: #fff; padding: 20px; border: 1px solid #e5e5e5; border-radius: 8px;">
            <h3 style="margin-top: 0; color: #333;">Message</h3>
            <p style="white-space: pre-wrap;">${message || "No message provided"}</p>
          </div>
          
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This inquiry was submitted through the SRAVN website contact form.
          </p>
        </div>
      `,
    })

    // Send confirmation email to the user
    await resend.emails.send({
      from: "SRAVN <onboarding@resend.dev>",
      to: email,
      subject: "Thank you for contacting SRAVN",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4a5d4a;">Thank You for Reaching Out</h2>
          
          <p>Dear ${firstName},</p>
          
          <p>Thank you for your interest in SRAVN. We have received your inquiry and our team will get back to you within 24-48 hours.</p>
          
          <p>If you have any urgent questions, please feel free to contact us directly at <a href="mailto:sravninfo@gmail.com">sravninfo@gmail.com</a>.</p>
          
          <div style="background: #f9f8f4; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #4a5d4a; font-style: italic;">
              "Enabling Safe and Dignified Pilgrimages for Elders"
            </p>
          </div>
          
          <p>Warm regards,<br>The SRAVN Team</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
