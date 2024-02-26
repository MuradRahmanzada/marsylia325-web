"use client";

import { fadeIn } from "../variants";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  const t = useTranslations();
  return (
    <div
      className="h-screen sm:h-auto px-6 sm:px-10 pt-10  pb-16 sm:pb-0 bg-[#ffde59] bg-center bg-cover"
      style={{
        backgroundImage: `url(/assets/bg-image.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <motion.div
        className="container mx-auto flex flex-col sm:flex-row items-center justify-between"
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        <div className="sm:w-1/2 flex flex-col items-center sm:items-start text-center sm:text-left">
          <h1 className="text-2xl md:text-4xl font-black uppercase">
            {t("banner.title")}
          </h1>
          <span className="text-6xl md:text-8xl font-black uppercase">
            {t("banner.city")}
          </span>
          <p className="text-xl font-bold px-5 py-3">
            {t("banner.description")}
          </p>
          <div className="px-5 py-7">
            <Link
              href="/"
              className="px-14 py-6 bg-zinc-900 text-yellow-300 font-bold"
            >
              {t("banner.cta")}
            </Link>
          </div>
        </div>

        <div className="mt-16 mx-4 custom-animate">
          <Image
            src="/assets/banner.png"
            width={500}
            height={500}
            alt="marsylia325-banner"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
