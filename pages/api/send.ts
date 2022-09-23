import sgMail from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";
import { ContactFormFields } from "../../types/types.contact";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

  const { email, message, fullName } = req.body as ContactFormFields;
  console.log("calling fromm the api", email);

  const content = {
    to: "justbeready@gmail.com",
    from: "petrauskas.justas@gmail.com", // verified email
    subject: `Contact form - ${email}`,
    text: message,
    html: `
      <p>Name: ${fullName}</p>
      <p>Email: ${email}</p><br/>
      <p>Message: ${message}</p>`,
  };

  try {
    await sgMail.send(content);
    res.status(200).send("Message sent!");
  } catch (error) {
    console.log("ERROR", error);
    res.status(400).send("Message not sent.");
  }
}
