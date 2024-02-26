"use client";

import { fadeIn } from "../variants";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaQuestion } from "react-icons/fa";

const bgUrl = "/assets/bg-image.png";
const logo = "/assets/logo.png";
const imgTaxi = "/assets/taxi-img.png";
const imgMechanic = "/assets/car-mechanic.jpeg";

const AboutUs = () => {
  const t = useTranslations();
  return (
    <div
      className="min-h-screen px-4 sm:px-10 bg-[#ffde59] flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${bgUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-4xl sm:text-5xl font-semibold pt-10 text-center">
        {t("About-us.pageName")}
      </h1>
      <motion.span
        className="text-4xl font-bold flex items-center mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {t("About-us.Why Marsylia")}
        <FaQuestion className="text-gray-800" size={32} />
      </motion.span>

      <motion.div
        className="flex flex-col lg:flex-row items-center mt-12 lg:ml-24"
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        <div className="flex-1">
          <Image src={imgTaxi} height={500} width={700} alt="taxi-img" />
        </div>
        <div className="flex-1 items-center">
          <p className="font-bold text-sm md:text-lg w-full">
            {t("About-us.aboutMarsylia")}
          </p>
        </div>
      </motion.div>
      <div>
        <motion.section
          className="flex container mx-auto items-center justify-between py-6 px-7 relative"
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        ></motion.section>
      </div>
      <div>
        <motion.section
          className="flex container mx-auto items-center justify-between py-6 px-7 relative"
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <div className="flex items-center z-10">
            <div className="bg-[#231F20] w-[380px] h-[380px] lg:w-[750px] lg:h-[500px] p-1 rounded-3xl relative z-20">
              <Image
                src={logo}
                width={125}
                height={125}
                alt="marsylia325-logo"
              />
              <p className="text-yellow-300 text-sm lg:text-2xl font-semibold p-8">
                {t("About-us.text2")}
              </p>
            </div>
          </div>
          <div className="relative right-12 top-8 z-50 hidden lg:block">
            <Image
              src={imgMechanic}
              width={750}
              height={450}
              alt="marsylia-car-mechanic"
              className="rounded-3xl"
            />
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutUs;
