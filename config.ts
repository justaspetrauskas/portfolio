export const emailJS = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLICKEY!,
};

export const recaptcha = {
  siteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
  secretKey: process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY!,
};
