import { ArrowRight, MoveUpRight } from "lucide-react";
import SkillBar from "../../components/SkillBar";
import Button from "../../components/ui/Button";
import WorkWithMeForm from "./_components/WorkWithMeForm";

function WorkWithMe() {
  return (
    <>
      <section className="section min-h-[85vh] flex flex-col mt-10">
        <div className="max-w-screen-xl mx-auto flex-1 flex flex-col justify-center md:flex-row md:items-center gap-8 px-5 xs:px-10 sm:px-12 md:px-24 py-24">
          <article className="w-full">
            <h1 className="text-4xl sm:text-5xl  font-extrabold pb-1.5 md:pb-3">
              Elevate your brand with a stunning website
            </h1>
            <p>
              I build fast, responsive websites that are designed to convert
              visitors into customers. I specialize in building websites for
              small businesses and entrepreneurs.
            </p>
            <a href="#contact">
              <Button size={"large"}>
                Get Started
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </a>
          </article>
          <figure className="w-full flex justify-center relative">
            <img
              src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="A computer on a desk, with a beautifully designed website on the screen."
              className="rounded-lg object-cover"
            />
            {/* <div className="hidden absolute max-w-[50%] bg-white dark:bg-[#131313] rounded-br-lg pb-3 pr-3 top-0 left-0 md:flex items-center justify-center">
            <div className="bg-gray-200 text-[#131313] rounded-lg p-3 flex flex-col items-start justify-center">
              <span className="text-6xl font-extrabold">3+</span>
              <span>Projects I have done to help businesses grow online</span>
            </div>
          </div>
          <div className="hidden absolute max-w-[50%] bg-white dark:bg-[#131313] rounded-tl-lg pt-3 pl-3 bottom-0 right-0 md:flex items-center justify-center">
            <div className="bg-gray-200 text-[#131313] rounded-lg p-3 flex flex-col items-start justify-center">
              <span className="text-6xl font-extrabold">2+</span>
              <span>
                Clients I have worked with to help them grow their business
              </span>
            </div>
          </div> */}
          </figure>
        </div>
        <SkillBar />

        <div className="bg-neutral-200 dark:bg-neutral-800 text-center">
          <div className="max-w-screen-xl mx-auto flex-1 flex flex-col gap-8 px-5 xs:px-10 sm:px-12 md:px-24 py-24">
            <div className="flex flex-col gap-4">
              <span>
                I'm your partner in crafting amazing digital experiences that
                not only grab attention but also turn visitors into loyal
                customers. I specialize in creating websites that drive results
                for small businesses and entrepreneurs.
              </span>
              <span>
                If your business solves a problem for people, then having a
                website that speaks their language and builds connections is a
                must. It's all about giving them the best online experience
                possible.
              </span>
              <span>
                Let's team up and take your brand to new heights! Together,
                we'll make sure your online presence shines bright and your
                business grows like never before.
              </span>
            </div>
            <a href="#contact">
              <Button size={"large"} variant={"secondary"}>
                Let's Talk
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </a>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto flex-1 flex flex-col gap-8 px-5 xs:px-10 sm:px-12 md:px-24 py-24">
          <h1 className="text-4xl sm:text-5xl  font-extrabold pb-1.5 md:pb-3">
            What I build
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="">
              <div className="bg-white dark:bg-[#131313]">
                <h2 className="text-3xl font-extrabold pb-3">
                  Marketing Websites
                </h2>
                <p>
                  I craft high-performance, responsive websites tailored to
                  drive conversions. Specializing in solutions for small
                  businesses and entrepreneurs, my sites are optimized to engage
                  visitors and turn them into loyal customers.
                </p>
              </div>
            </div>

            <div className="">
              <div className="bg-white dark:bg-[#131313]">
                <h2 className="text-3xl font-extrabold pb-3">Landing Pages</h2>
                <p>
                  Engage and captivate your audience with compelling landing
                  pages designed to convert. Leveraging responsive design
                  principles, I create dynamic pages that drive action and
                  deliver results for your business.
                </p>
              </div>
            </div>

            <div className="">
              <div className="bg-white dark:bg-[#131313]">
                <h2 className="text-3xl font-extrabold pb-3">E-commerce</h2>
                <p>
                  Elevate your online presence with powerful e-commerce
                  solutions. From seamless user experiences to secure payment
                  gateways, I build robust platforms that empower small
                  businesses and entrepreneurs to thrive in the digital
                  marketplace.
                </p>
              </div>
            </div>

            <div className="">
              <div className="bg-white dark:bg-[#131313]">
                <h2 className="text-3xl font-extrabold pb-3">
                  Web Applications
                </h2>
                <p>
                  A web application is a website that provides a set of features
                  to its users. Unlike marketing websites that are often
                  accessible publicly, web applications usually restrict access
                  to their features via a login, and provide a dashboard for
                  their users to manage their profile, preferences or billing
                  information.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-screen-xl w-full mx-auto flex-1 flex flex-col gap-8 px-5 xs:px-10 sm:px-12 md:px-24 py-24">
          <h1 className="text-4xl sm:text-5xl  font-extrabold pb-1.5 md:pb-3">
            Clients
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="https://www.faroldiscover.pt/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center text-4xl font-bold text-black dark:text-white transition-colors duration-300 border border-[#131313] dark:border-white p-4 rounded-lg tracking-widest uppercase"
            >
              <span>Farol</span> <span>Discover</span>
            </a>

            <a
              href="https://www.cabanasdaviscondessa.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center border border-[#131313] dark:border-white p-4 rounded-lg"
            >
              <picture>
                <source
                  srcSet="/clients/cabanas-viscondessa-dark.png"
                  media="(prefers-color-scheme: light)"
                />
                <source
                  srcSet="/clients/cabanas-viscondessa-white.png"
                  media="(prefers-color-scheme: dark)"
                />
                <img
                  src="/clients/cabanas-viscondessa-dark.png"
                  alt="Cabanas da Viscondessa"
                />
              </picture>
            </a>
          </div>
        </div>

        {/* Section "Witness our success stories" */}
        <div className="max-w-screen-xl mx-auto flex-1 flex flex-col gap-8 px-5 xs:px-10 sm:px-12 md:px-24 py-24">
          <div className="flex flex-col md:flex-row gap-4 md:gap-56 justify-between">
            <h1 className="text-4xl sm:text-5xl  font-extrabold pb-1.5 md:pb-3">
              Witness my success stories
            </h1>
            <p>
              Dive into a showcase of my work that reflects the commitment I out
              into each project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <a
                href="https://www.faroldiscover.pt/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block rounded-lg overflow-hidden h-full"
              >
                <img
                  src="farol-discover-hero.png"
                  alt="Farol Discover"
                  className="rounded-lg object-cover h-full"
                />
                {/* Content to display on hover */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-neutral-900/50 z-10"></div>
                  <div className="bg-neutral-900/50 p-2 rounded-full z-50">
                    <MoveUpRight className="h-6 w-6" />
                  </div>
                  <span className="text-white text-2xl font-bold z-50">
                    Farol Discover
                  </span>
                </div>
              </a>
            </div>
            <div className="relative">
              <a
                href="https://www.cabanasdaviscondessa.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block rounded-lg overflow-hidden h-full"
              >
                <img
                  src="cabanas-viscondessa-clipped.png"
                  alt="Cabanas da Viscondessa"
                  className="rounded-lg object-cover h-full"
                />
                {/* Content to display on hover */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ">
                  <div className="absolute inset-0 bg-neutral-900/50 z-10"></div>
                  <div className="bg-neutral-900/50 p-2 rounded-full z-50">
                    <MoveUpRight className="h-6 w-6" />
                  </div>
                  <span className="text-white text-2xl font-bold z-50">
                    Cabanas da Viscondessa
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Section "Let's create together" */}
        <div className="bg-neutral-900 text-white" id="contact">
          <div className="max-w-screen-xl mx-auto flex-1 flex flex-col md:flex-row gap-8 px-5 xs:px-10 sm:px-12 md:px-24 py-24">
            <div className="w-full flex flex-col gap-4">
              <h1 className="text-4xl text-white sm:text-5xl font-extrabold pb-1.5 md:pb-3">
                Let's create together
              </h1>
              <p>
                Ready to get started? We like to start with a chat about you and
                your business. So fill in the form and we'll set up a call.
              </p>
            </div>
            <div className="w-full flex justify-center">
              <WorkWithMeForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WorkWithMe;
