"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useTranslations } from "next-intl";
const bgUrl = "/assets/bg-image.png";
const title = "/assets/brands-title.png";

const Brands = () => {
  const t = useTranslations();
  return (
    <div
      className="min-h-screen w-full bg-[#ffde59] py-10 px-6 sm:px-10"
      style={{
        backgroundImage: `url(${bgUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex items-center justify-center">
        <Image src={title} width={500} height={500} alt="brands-title" />
      </div>

      <motion.div
        className="flex items-center justify-center py-16"
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        <div className="grid grid-cols-3 xs:grid-cols-2 xl:grid-cols-5 gap-8">
          {brands.map((brand) => (
            <div className="flex items-center justify-center" key={brand.name}>
              <div className="w-20 h-20 md:w-40 md:h-40 p-6 bg-black rounded-3xl flex items-center justify-center">
                <Image
                  src={brand.image}
                  width={160}
                  height={160}
                  alt={brand.name}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <div className="container mx-auto bg-black w-full xl:w-3/4  p-6 sm:p-10 rounded-3xl">
        <p className="text-yellow-300 text-sm md:text-xl font-semibold">
          {t("brands.text")}
        </p>
      </div>
    </div>
  );
};

export default Brands;

const brands = [
  {
    name: "honda",
    image: "/assets/honda.png",
  },
  {
    name: "lexus",
    image: "/assets/lexus.png",
  },
  {
    name: "suzuki",
    image: "/assets/suzuki.png",
  },
  {
    name: "nissan",
    image: "/assets/nissan.png",
  },
  {
    name: "peugeot",
    image: "/assets/peugeot.png",
  },
  {
    name: "subaru",
    image: "/assets/subaru.png",
  },
  {
    name: "toyota",
    image: "/assets/toyota.png",
  },
  {
    name: "renault",
    image: "/assets/renault.png",
  },
  {
    name: "mitsubishi",
    image: "/assets/mitsubishi.png",
  },
  {
    name: "acura",
    image: "/assets/acura.png",
  },
];
