"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useTranslations } from "next-intl";

const Services = () => {
  const t = useTranslations();
  const serviceItems = [
    {
      title: t("services.Diagnostics.name"),
      desc: t("services.Diagnostics.desc"),
      img: t("services.Diagnostics.img"),
    },
    {
      title: t("services.Automotive.name"),
      desc: t("services.Automotive.desc"),
      img: t("services.Automotive.img"),
    },
    {
      title: t("services.Suspension.name"),
      desc: t("services.Suspension.desc"),
      img: t("services.Suspension.img"),
    },
    {
      title: t("services.Electrical.name"),
      desc: t("services.Electrical.desc"),
      img: t("services.Electrical.img"),
    },
    {
      title: t("services.Tire Service.name"),
      desc: t("services.Tire Service.desc"),
      img: t("services.Tire Service.img"),
    },
    {
      title: t("services.Oil Service.name"),
      desc: t("services.Oil Service.desc"),
      img: t("services.Oil Service.img"),
    },
  ];

  return (
    <div
      className="min-h-screen w-full bg-[#ffde59] py-20 sm:py-32 px-6 sm:px-10"
      style={{
        backgroundImage: `url(/assets/bg-image.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-16 md:mb-10 sm:mb-20">
        {t("services.title")}
      </h1>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-14 mt-10"
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.8 }}
      >
        {serviceItems.map((serv) => (
          <div
            key={serv.title}
            className="w-full max-w-md mx-auto bg-zinc-900 p-6 rounded-3xl transition-all hover:scale-105 cursor-pointer"
          >
            {/* Wrapper div with yellow background */}
            <div className="flex items-center justify-center mb-6 bg-yellow-300 rounded-full w-24 h-24">
              <Image src={serv.img} width={75} height={75} alt={serv.title} />
            </div>
            {/* End of wrapper div */}
            <h2 className="text-yellow-300 text-lg sm:text-xl font-bold mb-4">
              {serv.title}
            </h2>
            <p className="text-white text-sm sm:text-base font-semibold">
              {serv.desc}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
