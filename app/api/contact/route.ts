import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    // Validate inputs
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Missing EMAIL_USER or EMAIL_PASS environment variables");
      return NextResponse.json(
        { error: 'Server configuration error: Missing email credentials. Please check your .env file and restart the server.' },
        { status: 500 }
      );
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can change this to your preferred service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const formattedMessage = message.replace(/\n/g, '<br/>');

    // Email to Admin (You)
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      html: `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>New Contact Form Submission</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f6f9;font-family:Arial,sans-serif;">

    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f9;padding:30px 0;">
        <tr>
            <td align="center">

                <table width="650" cellpadding="0" cellspacing="0"
                    style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 15px rgba(0,0,0,0.1);">

                    <!-- Header -->
                    <tr>
                        <td align="center"
                            style="background:linear-gradient(90deg,#4f46e5,#a855f7);padding:25px;">
                            <h1 style="color:white;margin:0;font-size:28px;">
                                New Contact Form Submission
                            </h1>
                        </td>
                    </tr>

                    <!-- Intro -->
                    <tr>
                        <td style="padding:30px;">
                            <p style="font-size:16px;color:#444;margin-top:0;">
                                You have received a new inquiry from your website.
                            </p>

                            <!-- Details Table -->
                            <table width="100%" cellpadding="10" cellspacing="0"
                                style="border-collapse:collapse;">

                                <tr>
                                    <td width="30%"
                                        style="background:#f8f9fc;font-weight:bold;border:1px solid #e5e7eb;">
                                        Name
                                    </td>
                                    <td style="border:1px solid #e5e7eb;">
                                        ${name}
                                    </td>
                                </tr>

                                <tr>
                                    <td
                                        style="background:#f8f9fc;font-weight:bold;border:1px solid #e5e7eb;">
                                        Email
                                    </td>
                                    <td style="border:1px solid #e5e7eb;">
                                        ${email}
                                    </td>
                                </tr>

                                <tr>
                                    <td
                                        style="background:#f8f9fc;font-weight:bold;border:1px solid #e5e7eb;">
                                        Phone
                                    </td>
                                    <td style="border:1px solid #e5e7eb;">
                                        ${phone}
                                    </td>
                                </tr>

                                <tr>
                                    <td
                                        style="background:#f8f9fc;font-weight:bold;border:1px solid #e5e7eb;">
                                        Message
                                    </td>
                                    <td style="border:1px solid #e5e7eb;line-height:1.6;">
                                        ${formattedMessage}
                                    </td>
                                </tr>

                            </table>

                            <br>

                            <p style="font-size:14px;color:#666;">
                                Please respond to the customer as soon as possible.
                            </p>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td align="center"
                            style="background:#f8f9fc;padding:20px;color:#666;font-size:13px;">
                            © 2026 Your Company. All Rights Reserved.
                        </td>
                    </tr>

                </table>

            </td>
        </tr>
    </table>

</body>
</html>`,
    };

    // Email to User (Acknowledgement)
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting RentFlow',
      html: `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Thank You</title>
</head>

<body style="margin:0;padding:0;background:#f4f7fc;font-family:'Segoe UI',Arial,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0">
<tr>
<td align="center">

<table width="650" cellpadding="0" cellspacing="0"
style="max-width:650px;background:#ffffff;border-radius:24px;
overflow:hidden;margin:30px auto;
box-shadow:0 15px 40px rgba(0,0,0,0.08);">

<!-- HERO -->

<tr>
<td align="center"
style="padding:60px 30px;
background:linear-gradient(135deg,#4f46e5,#7c3aed,#c026d3);">

<div style="
width:90px;
height:90px;
background:rgba(255,255,255,.15);
border-radius:50%;
line-height:90px;
font-size:40px;
color:white;
margin:auto;">
✓
</div>

<h1 style="
margin:25px 0 10px;
font-size:38px;
color:white;">
Thank You!
</h1>

<p style="
margin:0;
font-size:18px;
color:#f3f4f6;">
Your inquiry has been received successfully.
</p>

</td>
</tr>

<!-- CONTENT -->

<tr>
<td style="padding:50px 40px;">

<h2 style="margin-top:0;color:#111827;">
Hello ${name},
</h2>

<p style="
font-size:16px;
line-height:30px;
color:#4b5563;">
Thank you for contacting us.
Our team has successfully received your request and will review it shortly.
You can expect a response within the next 24 hours.
</p>

<!-- CARD -->

<div style="
margin-top:30px;
background:#f8fafc;
border-radius:18px;
border:1px solid #e5e7eb;
overflow:hidden;">

<div style="
padding:18px 25px;
background:#eef2ff;
font-size:18px;
font-weight:600;
color:#4338ca;">
📩 Your Submission Details
</div>

<div style="padding:25px;">

<p style="margin:0 0 18px;">
<strong>Name:</strong><br>
${name}
</p>

<p style="margin:0 0 18px;">
<strong>Email:</strong><br>
${email}
</p>

<p style="margin:0 0 18px;">
<strong>Phone:</strong><br>
${phone}
</p>

<p style="margin:0;">
<strong>Message:</strong><br>
${formattedMessage}
</p>

</div>

</div>

<!-- CTA -->

<div style="text-align:center;margin-top:40px;">

<a href="https://yourwebsite.com"
style="
display:inline-block;
padding:18px 40px;
border-radius:999px;
background:linear-gradient(135deg,#4f46e5,#a855f7);
color:white;
text-decoration:none;
font-size:16px;
font-weight:600;">
Visit Website →
</a>

</div>

<!-- EXTRA -->

<div style="
margin-top:40px;
padding:25px;
background:#fafafa;
border-radius:15px;
text-align:center;">

<h3 style="margin-top:0;color:#111827;">
What happens next?
</h3>

<p style="margin:0;color:#6b7280;">
✔ Our team reviews your request<br>
✔ We prepare the best solution<br>
✔ We contact you within 24 hours
</p>

</div>

</td>
</tr>

<!-- FOOTER -->

<tr>
<td style="
padding:35px;
background:#111827;
text-align:center;">

<h3 style="
margin-top:0;
color:white;">
Your Company
</h3>

<p style="
margin:10px 0;
color:#d1d5db;">
support@yourcompany.com
</p>

<p style="
margin:0;
font-size:13px;
color:#9ca3af;">
© 2026 Your Company. All rights reserved.
</p>

</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>`,
    };

    // Send emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json(
      { success: true, message: 'Emails sent successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to send email' },
      { status: 500 }
    );
  }
}
