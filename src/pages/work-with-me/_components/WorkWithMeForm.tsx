import Button from "../../../components/ui/Button";

function WorkWithMeForm() {
  return (
    <form
      name="work-with-me"
      method="post"
      className="w-full"
      action="/success"
    >
      <input type="hidden" name="form-name" value="work-with-me" />
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <div className="w-full">
          <input
            type="text"
            id="first-name"
            name="first-name"
            placeholder="First Name*"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 peer"
            required
          />
        </div>
        <div className="w-full">
          <input
            type="text"
            id="last-name"
            name="last-name"
            placeholder="Last Name*"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 peer"
            required
          />
        </div>
        <div className="w-full">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email*"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 peer"
            required
          ></input>
        </div>
        <div className="w-full">
          <input
            type="url"
            id="website"
            name="website"
            placeholder="Your current website (if you have one)"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 peer"
          />
        </div>
        <div className="sm:col-span-2">
          <textarea
            id="story"
            name="story"
            placeholder="Tell me your story, what does your business do and how did you get here*"
            rows={5}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 peer"
            required
          ></textarea>
        </div>
        <div className="w-full">
          <select
            id="services"
            name="services"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:bg-neutral-900 dark:text-white dark:border-gray-600 dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 peer"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Which service are you interested in?*
            </option>
            <option value="Marketing Website">Marketing Website</option>
            <option value="Landing Page">Landing Page</option>
            <option value="E-commerce">E-commerce</option>
            <option value="Web Applications">Web Applications</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className="w-full">
          <select
            id="budget"
            name="budget"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:bg-neutral-900 dark:text-white dark:border-gray-600 dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 peer"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Select budget range*
            </option>
            <option value="€500 - €5,000">€500 - €5,000</option>
            <option value="€5,000 - €10,000">€5,000 - €10,000</option>
            <option value="€10,000+">€10,000+</option>
            <option value="I don't know">I don't know</option>
            <option value="I prefer not to say">I prefer not to say</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <select
            id="timeline"
            name="timeline"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:bg-neutral-900 dark:text-white dark:border-gray-600 dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 peer"
            required
            defaultValue=""
          >
            <option value="" disabled>
              When do you want to start?*
            </option>
            <option value="Yesterday">Yesterday</option>
            <option value="Next Month">Next Month</option>
            <option value="In 3 Months">In 3 Months</option>
            <option value="I'm flexible'">I'm flexible'</option>
            <option value="I'm in research mode">I'm in research mode</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <textarea
            id="project"
            name="project"
            placeholder="Tell us about your project. What problems are you hoping to solve by working with us and what does success look like for your business?*"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 peer"
            rows={5}
            required
          ></textarea>
        </div>
      </div>
      <Button size={"large"} type="submit" className="mt-4 uppercase">
        Send
      </Button>
    </form>
  );
}

export default WorkWithMeForm;
