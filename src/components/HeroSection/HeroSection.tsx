import profileImage from "../../assets/images/joana-parente-small.jpg";
import SkillBar from "../SkillBar";
import Button from "../ui/Button";

function HeroSection() {
  return (
    <section className="section min-h-screen flex flex-col gap-16 mt-10 pt-10">
      <div className="max-w-screen-xl mx-auto flex-1 flex flex-col justify-center md:flex-row md:items-center gap-8  px-5 xs:px-10 sm:px-12 md:px-24 ">
        <article className="w-full">
          <p className="text-primary-500 font-mono">Hi, my name is</p>
          <h1 className="text-4xl sm:text-5xl text-gray-900 font-extrabold pb-1.5 md:pb-3">
            Joana Parente
          </h1>
          <span className="text-2xl sm:text-4xl text-gray-600 font-extrabold pb-2.5 sm:pb-3">
            I build things for the web.
          </span>
          <p>
            Portugal-based Full-Stack Developer, transitioning from a career in
            account management and digital marketing. With a deep understanding
            of business needs and client relations, I bring a unique perspective
            to the world of code.
          </p>
          <a href="#contact">
            <Button>Contact Me</Button>
          </a>
        </article>
        <figure className="w-full sm:w-3/5 sm:self-center flex justify-center">
          <img
            src={profileImage}
            alt="Joana Parente, a Full-Stack Developer based in Portugal"
            className="rounded-lg object-cover"
          />
        </figure>
      </div>
      <SkillBar />
    </section>
  );
}

export default HeroSection;
