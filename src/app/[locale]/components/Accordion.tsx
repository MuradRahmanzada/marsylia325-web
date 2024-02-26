import { useState } from "react";
import Image from "next/image";

const IPlus = "/assets/plus.png";
const IMinus = "/assets/minus.png";

interface IAccordion {
    title: string;
    desc: string;
}

const Accordion: React.FC<IAccordion> = ({title, desc}) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="w-full bg-black text-yellow-300 p-3 flex items-center justify-center">
      <div className="w-full">
        <button
          className="flex items-center justify-between w-full"
          onClick={() => setAccordionOpen(!accordionOpen)}
        >
          <span className="text-lg font-semibold">{title}</span>
          {accordionOpen ? (
            <Image src={IMinus} width={30} height={30} alt="minus-icon" />
          ) : (
            <Image src={IPlus} width={30} height={30} alt="plus-icon" />
          )}
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
            accordionOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden text-white font-semibold ">{desc}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
