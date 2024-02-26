import { FaPhoneAlt } from "react-icons/fa";
import { IoMail, IoLocation } from "react-icons/io5";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations();
  return (
    <footer className="bg-zinc-900 py-12 px-6 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex-1 md:w-1/4">
          <Image
            src="/assets/logo.png"
            width={300}
            height={300}
            alt="marsylia325-logo"
            className="hidden md:block"
          />
          <Image
            src="/assets/logo.png"
            width={150}
            height={150}
            alt="marsylia325-logo"
            className="md:hidden"
          />
        </div>
        <div className="flex-1 md:w-1/4">
          <h2 className="text-lg font-semibold my-3 text-white">
            {t("Footer.contact")}
          </h2>
          <p className="text-white">{t("Footer.contactText")}</p>
          <div className="flex flex-col gap-4 mt-6">
            <div className="flex items-center gap-2">
              <FaPhoneAlt size={20} className="text-white" />
              <span className="text-yellow-300">{t("Footer.phoneNumber")}</span>
            </div>
            <div className="flex items-center gap-2">
              <IoMail size={20} className="text-white" />
              <span className="text-yellow-300">{t("Footer.gmail")}</span>
            </div>
            <div className="flex items-center gap-2">
              <IoLocation size={20} className="text-white" />
              <span className="text-yellow-300">{t("Footer.address")}</span>
            </div>
          </div>
        </div>
        <div className="flex-1 md:w-1/4 text-yellow-300">
          <p>{t("Footer.text1")}</p>
          <p className="mt-3">{t("Footer.text2")}</p>
        </div>
      </div>
      <h2 className="pt-8 text-center text-white font-semibold">
        {t("Footer.copyrightText")}
      </h2>
    </footer>
  );
};

export default Footer;
