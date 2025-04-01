import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, address, message } = body;
    
    if (!name || !email || !phone || !address) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    
    const result = await resend.emails.send({
      from: 'Bella Wind Mitigation <contact@bellacasainspections.com>', // Use a verified domain in production
      to: ['alspitale172@gmail.com'],
      bcc: ['nick@theatomicburger.com'],
      subject: 'New Wind Mitigation Inspection Request',
      replyTo: 'alspitale172@gmail.com',
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Address: ${address}
        
        Message: ${message}
      `,
    });

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error('Email sending failed:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
