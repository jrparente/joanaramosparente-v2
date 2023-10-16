// import profileImage from "../../assets/images/joana-parente-small.jpg";

const technicalSkills: string[] = [
  "HTML & CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "NextJS",
  "SQL",
  "MongoDB",
];
const marketingSkills: string[] = [
  "SEO Best Practices",
  "Content Creation",
  "Social Media Strategy",
];

function AboutSection() {
  return (
    <section
      className="max-w-screen-xl mx-auto min-h-screen px-5 xs:px-10 sm:px-12 md:px-24 py-24"
      id="about"
    >
      <h2 className="text-2xl sm:text-4xl text-gray-900 font-extrabold pb-1.5 sm:pb-3">
        About Me
      </h2>
      <div className=" flex flex-col justify-center items-start lg:flex-row lg:items-center gap-8">
        <article className="w-full">
          <p>
            Full-stack web developer, specializing in the MERN stack, with over
            10 years of professional experience as an Account and Business
            Manager in the Internet sector
          </p>
          <p>
            Skilled in business management, sales, e-commerce, and digital
            marketing. A dedicated lifelong learner passionate about
            problem-solving, technology, and continuous professional
            development.
          </p>
          <article className="space-y-4">
            <h3 className="text-lg font-semibold">Key Skills</h3>
            <div className="flex flex-wrap justify-start items-center gap-4">
              {technicalSkills.concat(marketingSkills).map((skill, index) => (
                <span
                  key={index}
                  className="bg-primary-100 text-primary-800 rounded-full px-3 py-1 text-sm font-semibold"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        </article>
        {/* <figure className="w-full md:w-4/5 md:self-center flex justify-center">
          <img
            src={profileImage}
            alt="Joana Parente, a Full-Stack Developer based in Portugal"
            className="rounded-lg object-cover"
          />
        </figure> */}
      </div>
    </section>
  );
}

export default AboutSection;