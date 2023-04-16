import type { NextApiRequest, NextApiResponse } from 'next';
import * as nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOSTNAME,
    port: process.env.SMTP_PORT_NUMBER,
    secure: process.env.SMTP_SECURE,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD
    }
  });

  const { fname, lname, email, phone, message } = req.body;

  if (!fname || !email || !phone || !message) {
    return res
      .status(400)
      .json({ message: 'Please fill out the necessary fields' });
  }

  const mailData = {
    from: 'Sayan Dey <sayan@bloggingmetrics.com>',
    to: 'Mail TM <uyizznyysmouh@bugfoo.com>',
    replyTo: email,
    subject: `Message from ${fname}`,
    text: `Name: ${fname} ${lname} | Email: ${email} | Phone: ${phone} | Message: ${message}`,
    html: `<!DOCTYPE html><html lang="en"><head> <title></title> <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <style type="text/css"> * { margin: 0; padding: 0; overflow-x: hidden; } body { font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-size: 14px; line-height: 20px; font-weight: 400; color: #303030; height: 100%; margin: 50px auto; background: #f6f6f6; } a { font-size: 14px; font-weight: 400; color: #38bdf8; } h1 { font-size: 22px; line-height: 30px; margin-bottom: 15px; text-align: center; } h3 { font-size: 16px; font-weight: 600; margin-bottom: 5px; } .c-content-section { background: #fff; max-width: 300px; margin: 0 auto; padding: 35px; border: 1px solid #cbcbcb; border-style: dashed; border-radius: 5px; } @media (max-width: 424.98px) { .c-content-section { margin: 0 15px; } } </style></head><body> <h1>Message from ${fname}</h1> <div class="c-content-section"> <div style="display: grid;"> <div style="margin-bottom: 25px;"> <h3>Name:</h3> <p>${fname} ${lname}</p> </div> <div style="margin-bottom: 25px;"> <h3>Email:</h3> <a href="mailto:${email}" target="_blank">${email}</a> </div> <div style="margin-bottom: 25px;"> <h3>Phone:</h3> <p>${phone}</p> </div> <div style="margin-bottom: 0px;"> <h3>Message:</h3> <p>${message}</p> </div> </div> </div></body></html>`
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, (err: Error | null, info) => {
      if (err) {
        reject(err);
        return res
          .status(500)
          .json({ error: err.message || 'Something went wrong' });
      } else {
        resolve(info.accepted);
        res.status(200).json({ message: 'Message sent!' });
      }
    });
  });

  return;
}
