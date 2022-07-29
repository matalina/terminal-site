import { Handler } from '@netlify/functions';
import sgMail from '@sendgrid/mail';

const API_KEY = process.env.SENDGRID_API as string;

const handler: Handler = async (event, context) => {
  try {
    const body = JSON.parse(event.body as any as string);
    const data = body.payload.data;

    sgMail.setApiKey(API_KEY);

    const message = {
      to: 'alicia@akddev.net',
      from: 'alicia@akddev.net',
      replyTo: data.email,
      subject: `[via contact form] ${data.subject}`,
      text: data.message,
      html: `<pre>${data.message}</pre>`,
    };

    await sgMail.send(message);

    return {
      statusCode: 200,
      body: '', // json string
    }
  } catch (e) {
    console.log(e);
    return {
      statusCode: 500,
      body: e.message,
    }
  }
}

export { handler };