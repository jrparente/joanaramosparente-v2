import Button from "../ui/Button";
import { Mail, Linkedin } from "lucide-react";

function ContactSection() {
  return (
    <section
      className="min-h-[80vh] px-5 xs:px-10 sm:px-12 md:px-24 py-24"
      id="contact"
    >
      <h2 className="text-2xl sm:text-4xl text-gray-900 font-extrabold pb-1.5 sm:pb-3">
        Let's Connect
      </h2>
      <div className="flex flex-col justify-center items-start lg:flex-row lg:items-center gap-8">
        <article className="w-full">
          <p className="text-sm sm:text-base text-gray-600 font-medium pb-4 sm:pb-10">
            I'm open to new opportunities, whether it's a full-time position or
            freelance projects. Feel free to reach out; I aim to respond as
            quickly as I can.
          </p>

          <div className="flex gap-2">
            <a href="mailto:jrparente@gmail.com">
              <Button>
                <div className="flex gap-2 items-center">
                  <Mail className="w-4 h-4" /> Send an Email
                </div>
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/joanaparente/" target="_blank">
              <Button variant="secondary">
                <div className="flex gap-2 items-center">
                  <Linkedin className="w-4 h-4" fill="currentColor" /> Find me
                  on LinkedIn
                </div>
              </Button>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default ContactSection;
