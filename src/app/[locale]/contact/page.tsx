"use client";

import { fadeIn } from "../variants";
import { motion } from "framer-motion";
import { TiLocation } from "react-icons/ti";
import { GoClock } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

// components
import ContactInfo from "../components/ContactInfo";
import SocialLinks from "../components/SocialLinks";
import Map from "../components/Map";
import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations();
  return (
    <div
      className="min-h-screen w-full px-10 bg-[#ffde59]"
      style={{
        backgroundImage: `url("/assets/bg-image.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-center text-4xl font-bold pt-10">{t("Contact.pageName")}</h1>
      <div className="flex flex-col lg:flex-row container mx-auto items-center py-24">
        <Map />

        {/* Right Section */}

        <motion.div
          className="flex flex-col items-center text-center mt-10 lg:mt-0"
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-5 mt-10 md:mt-0">
            <ContactInfo
              icon={<TiLocation size={35} />}
              text={t("Contact.address.title")}
              info={t("Contact.address.line1")}
            />

            <ContactInfo
              icon={<GoClock size={35} />}
              text={t("Contact.openingHours.title")}
              info={t("Contact.openingHours.hours")}
            />

            <ContactInfo
              icon={<FaPhoneAlt size={35} />}
              text={t("Contact.phoneNumber.title")}
              info={t("Contact.phoneNumber.number")}
            />

            <ContactInfo
              icon={<CiMail size={35} />}
              text={t("Contact.email.title")}
              info={t("Contact.email.address")}
            />
          </div>
          <SocialLinks />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
