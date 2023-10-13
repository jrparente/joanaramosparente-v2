import profileImage from "../../assets/images/joana-parente-small.jpg";
import Button from "../ui/Button";

function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center lg:flex-row lg:items-center gap-8 mt-20 md:mt-24 lg:mt-0 px-5 xs:px-10 sm:px-12 md:px-24">
      <article className="w-full">
        <p className="text-primary-500 font-mono pb-1.5 sm:pb-3">
          Hi, my name is
        </p>
        <h1 className="text-4xl sm:text-5xl text-gray-900 font-extrabold pb-1.5 sm:pb-3">
          Joana Parente
        </h1>
        <p className="text-2xl sm:text-4xl text-gray-600 font-extrabold pb-2.5 sm:pb-5">
          I build things for the web.
        </p>
        <p className="text-sm sm:text-base text-gray-600 font-medium pb-4 sm:pb-10">
          I'm a Portugal-based Full-Stack Developer, transitioning from a career
          in account management and digital marketing. With a deep understanding
          of business needs and client relations, I bring a unique and valuable
          perspective to the world of code.
        </p>
        <Button>Contact Me</Button>
      </article>
      <figure className="w-full md:w-4/5 md:self-center flex justify-center">
        <img
          src={profileImage}
          alt="Joana Parente, a Full-Stack Developer based in Portugal"
          className="rounded-lg object-cover"
        />
      </figure>
    </section>
  );
}

export default HeroSection;
