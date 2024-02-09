import sgMail from "@sendgrid/mail";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function POST(req: { json: () => Promise<any> }) {
  try {
    const formData = await req.json();
    const apiKey = import.meta.env.VITE_SENDGRID_API_KEY;

    if (!apiKey) {
      console.error("SendGrid API Key not found");
      return new Response("Server error", { status: 500 });
    }

    sgMail.setApiKey(apiKey);

    const emailContent = `
        <strong>First Name:</strong> ${formData.firstName}<br>
        <strong>Last Name:</strong> ${formData.lastName}<br>
        <strong>Email:</strong> ${formData.email}<br>
        <strong>Website:</strong> ${formData.website}<br>
        <strong>Story:</strong> ${formData.story}<br>
        <strong>Services Required:</strong> ${formData.services}<br>
        <strong>Budget:</strong> ${formData.budget}<br>
        <strong>Timeline:</strong> ${formData.timeline}<br>
        <strong>Project:</strong> ${formData.project}
    `;

    const msg = {
      to: "jrparente@gmail.com",
      from: formData.email,
      subject: "New Contact Form Submission",
      html: emailContent,
    };

    sgMail.send(msg);
    return new Response("Form submitted successfully!", { status: 200 });
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return new Response("Error in parsing the request", { status: 400 });
  }
}
