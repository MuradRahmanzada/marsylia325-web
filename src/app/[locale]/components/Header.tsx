"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "../../../navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaWindowClose } from "react-icons/fa";
import Image from "next/image";

// assets
import Logo from "@/public/assets/logo.png";
import IPoland from "@/public/assets/poland-flag.svg";
import IRussia from "@/public/assets/russia-flag.svg";
import IUsa from "@/public/assets/usa-flag.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const t = useTranslations();

  const links = [
    { title: t("navbar.home"), path: `/` },
    { title: t("navbar.about-us"), path: `/about-us` },
    { title: t("navbar.services"), path: `/prices` },
    { title: t("navbar.contact"), path: `/contact` },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full px-6 sm:px-10 py-3 sm:py-4 md:py-6 flex items-center justify-between bg-zinc-800">
      <div className="container mx-auto flex items-center justify-between ">
        <Link href="/">
          <Image src={Logo} width={85} height={85} alt="marsylia325-logo" />
        </Link>
        <div className="hidden sm:block text-white text-sm">
          <ul className="flex items-center gap-6">
            {links.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.path}
                  className="uppercase font-semibold text-yellow-300 transition hover:scale-110"
                  onClick={handleLinkClick}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <div className="flex items-center gap-4">
            <Link href="/" locale="pl">
              <Image src={IPoland} width={35} height={100} alt="pl" />
            </Link>
            <Link href="/" locale="ru">
              <Image src={IRussia} width={35} height={100} alt="ru" />
            </Link>
            <Link href="/" locale="en">
              <Image src={IUsa} width={35} height={100} alt="en" />
            </Link>
          </div>
        </div>
        <div className="flex sm:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <GiHamburgerMenu className="text-white" size={25} />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-zinc-800 absolute top-16 left-0 right-0 px-4 py-2">
          <button
            onClick={toggleMenu}
            className="focus:outline-none absolute top-3 right-3"
          >
            <FaWindowClose size={30} className="text-white" />
          </button>
          <ul className="flex flex-col items-center gap-4">
            {/* Language icons */}
            <div className="flex items-center gap-4">
              <Link href="/">
                <Image src={IPoland} width={25} height={100} alt="pl" />
              </Link>
              <Link href="/">
                <Image src={IRussia} width={25} height={100} alt="ru" />
              </Link>
              <Link href="/">
                <Image src={IUsa} width={25} height={100} alt="en" />
              </Link>
            </div>
            {/* Navigation links */}
            {links.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.path}
                  className="uppercase font-semibold text-yellow-300 transition hover:scale-110"
                  onClick={handleLinkClick}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
