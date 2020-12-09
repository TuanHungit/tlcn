import nodemailer from 'nodemailer';
import ejs from 'ejs';
import path from 'path';
import { BadRequestError } from '@thticket/common';
export class Email {
  to: String = '';
  firstName: String = '';
  from: String = '';
  url: String = '';
  constructor(user?: any) {
    if (user) {
      this.to = user.email;
      this.firstName = user.name.split(' ')[0];
      this.from = `${process.env.EMAIL_FROM}`;
    }
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
    const mailOptions: any = {
      from: this.from,
      to: this.to,
      subject: title,
      text: subject,
    };

    // 3) Create a transport and send email
    const result = await this.newTransport()!.sendMail(mailOptions);
    console.log(result);
    // 2) Define email options
  }

  async sendMail(mail: any) {
    return new Promise((resolve, reject) => {
      this.newTransport()!.sendMail(mail, function (error, response) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log('Message sent: ' + JSON.stringify(response));
          resolve(response);
        }
      });
    });
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
    const subject = ``;
    await this.send('Authencation', subject);
  }

  sendPromotions = async (data: any) => {
    const emailArr = ['hung1444199@gmail.com', 'tuanhungit14@gmail.com'];
    let emailPromiseArray = [];
    const renderFile = await ejs.renderFile(
      path.join(__dirname, './template/promotion.hbs'),
      {
        link: data.url,
        src: data.src,
        title: data.title,
        discount: data.discount,
      }
    );
    for (let i = 0; i < emailArr.length; i++) {
      emailPromiseArray.push(
        this.sendMail({
          from: this.from,
          to: emailArr[i],
          subject: "Sachin's Test on new Node.js project",
          text: 'Hello',
          html: renderFile,
        })
      );
    }

    //run the promise
    Promise.all(emailPromiseArray)
      .then((result) => {
        console.log('all mail completed');
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
