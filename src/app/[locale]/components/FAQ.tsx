"use client";
import { GiLobArrow } from "react-icons/gi";
import Accordion from "./Accordion";
import { useTranslations } from "next-intl";

const bgUrl = "/assets/bg-image.png";

const FAQ = () => {
  const t = useTranslations();
  const accordionData = [
    {
      title: t("FAQ.q1.q"),
      desc: t("FAQ.q1.answer"),
    },
    {
      title: t("FAQ.q2.q"),
      desc: t("FAQ.q2.answer"),
    },
    {
      title: t("FAQ.q3.q"),
      desc: t("FAQ.q3.answer"),
    },
  ];

  return (
    <div
      className="min-h-screen pt-32"
      style={{
        backgroundImage: `url(/assets/bg-image.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-4xl xl:text-5xl font-bold text-center">
        {t("FAQ.title1")}
      </h1>
      <div className="flex flex-col items-center justify-center">
        <h1 className="py-6 text-xl xl:text-2xl font-semibold">
          {t("FAQ.title2")}
        </h1>
        <GiLobArrow size={75} className="text-black" />
        <div className="flex flex-col items-center py-12 gap-6">
          <div className="flex flex-col gap-3 px-[40px] xl:max-w-[900px] ">
            {accordionData.map((acc, index) => (
              <Accordion title={acc.title} desc={acc.desc} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
