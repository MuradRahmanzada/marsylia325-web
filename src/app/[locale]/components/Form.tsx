"use client";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import Input from "./Input";
import { useTranslations } from "next-intl";

const Form = () => {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });
  const t = useTranslations();
  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-center lg:justify-around bg-[#ffde59] bg-center bg-cover px-6 md:px-0"
      style={{ backgroundImage: `url(/assets/bg-image.png)` }}
    >
      <motion.div
        className="flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl sm:text-5xl font-bold text-center">
          {t("Form.text")};
        </h1>
        <div className="w-full max-w-md">
          <Image
            src="/assets/image-form.png"
            height={isLargeScreen ? 700 : 500}
            width={isLargeScreen ? 700 : 500}
            alt="car-form"
          />
        </div>
      </motion.div>
      <motion.form
        className="w-full max-w-md bg-[#231F20] rounded-3xl p-8 mt-8 mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold text-yellow-300 mb-4">
          {t("Form.title1")}
        </h2>
        <p className="text-yellow-300 mb-6 text-sm text-center">
          {t("Form.title2")}
        </p>
        <Input text={`${t("Form.inputLabels.name")} *`} />
        <Input text={`${t("Form.inputLabels.phone")} *`} />
        <Input text={`${t("Form.inputLabels.carBrand")} *`} />
        <button className="w-full bg-yellow-300 text-lg font-bold rounded-full py-3">
          {t("Form.buttonText")}
        </button>
        <span className="text-yellow-300 text-sm mt-4">
          {t("Form.consentText")}
        </span>
      </motion.form>
    </div>
  );
};

export default Form;
