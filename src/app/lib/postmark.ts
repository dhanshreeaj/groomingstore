import postmark from "postmark";

const client = new postmark.ServerClient(process.env.POSTMARK_API_TOKEN!);

export async function sendVerificationEmail(email: string, code: string) {
  await client.sendEmail({
    From: "founder@techtapestry.dev",
    To: email,
    Subject: "Verify Your Email",
    TextBody: `Your OTP code is ${code}. It expires in 15 minutes.`,
  });
}
