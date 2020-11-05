import nodemailer from 'nodemailer';
import { BadRequestError } from '@thticket/common';
export class Email {
  to: String;
  firstName: String;
  url: String;
  from: String;
  constructor(user: any, url: String) {
    this.to = user.email;
    this.firstName = user.name.split(' ')[0];
    this.url = url;
    this.from = `${process.env.EMAIL_FROM}`;
  }

  newTransport() {
    if (process.env.NODE_ENV === 'development') {
      // Sendgrid
      return nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USERNAME,
          pass: process.env.GMAIL_PASSWORD,
        },
      });
    }
  }

  // Send the actual email
  async send(title: String, subject: any) {
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject: title,
      text: subject,
    };

    // 3) Create a transport and send email
    const result = await this.newTransport().sendMail(mailOptions);
    console.log(result);
    // 2) Define email options
  }

  async sendWelcome() {
    await this.send('Welcome', 'Welcome to the Travel Family!');
  }

  async sendPasswordReset() {
    await this.send(
      'Reset your password',
      'Your password reset token (valid for only 10 minutes)'
    );
  }
  async sendAuthencatedEmail() {
    const subject = `${this.url}`;
    await this.send('Authencation', subject);
  }
}
