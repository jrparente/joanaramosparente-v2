import ReactGA from "react-ga";

export const initGA = () => {
  ReactGA.initialize("G-BXFL1XSDHB"); // Replace with your Google Analytics tracking ID
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
};
