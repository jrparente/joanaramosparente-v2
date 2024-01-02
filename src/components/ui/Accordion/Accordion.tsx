import { useState, ReactNode } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionProps {
  title: string;
  children: ReactNode;
}

function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item border-b border-gray-200 dark:border-[#2d2d2d]">
      <div className="flex accordion-header">
        <button
          onClick={toggleAccordion}
          className="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline"
        >
          {title}
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>
      {isOpen && (
        <div className="accordion-content overflow-hidden text-sm transition-all">
          <div className="pb-4 pt-0">{children}</div>
        </div>
      )}
    </div>
  );
}

export default Accordion;
