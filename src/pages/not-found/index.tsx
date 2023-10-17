import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    const count = setInterval(() => {
      setTimer((prevCounter) => prevCounter - 1);
    }, 1000);

    const redirectTimer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => {
      clearInterval(count);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  return (
    <section className="max-w-screen-xl mx-auto min-h-[85vh] px-5 xs:px-10 sm:px-12 md:px-24 py-24 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">
        Oops! This page is playing hide-and-seek.
      </h1>
      <p className="text-center text-lg">
        Seems like you've ventured into uncharted territory. Don't worry, we'll
        guide you back home.
        <br />
        You will be redirected to the homepage in{" "}
        <span className="text-primary-700 font-semibold">{timer} seconds</span>.
      </p>
    </section>
  );
}
