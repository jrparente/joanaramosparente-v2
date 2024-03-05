import { Linkedin, MailPlus, Github } from "lucide-react";

function ContactSection() {
  return (
    <section className="min-h-[63vh] md:min-h-[76vh]" id="contact">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center px-5 xs:px-10 sm:px-12 md:px-24">
        <h2 className="text-2xl sm:text-4xl font-extrabold pb-1.5 sm:pb-3">
          Let's Connect
        </h2>
        <div className="flex flex-col justify-center items-start lg:flex-row lg:items-center gap-8">
          <article className="w-full">
            <p>
              I'm always available at{" "}
              <a
                href="mailto:jrparente@gmail.com"
                className="link inline-flex items-center gap-1"
                area-label="Email Me"
              >
                jrparente@gmail.com
                <MailPlus className="w-4 h-4" />
              </a>
              .
            </p>
            <p>
              Other than that, you can find me on:{" "}
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/joanaparente/"
                    target="_blank"
                    className="link inline-flex items-center gap-1"
                    area-label="Reach out to me on LinkedIn"
                  >
                    LinkedIn
                    <Linkedin className="w-4 h-4" fill="currentColor" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/jrparente/"
                    target="_blank"
                    className="link inline-flex items-center gap-1"
                    area-label="Check out my GitHub profile"
                  >
                    GitHub
                    <Github className="w-4 h-4" fill="currentColor" />
                  </a>
                </li>
              </ul>
            </p>

            <p>I'm looking forward to hearing from you!</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
