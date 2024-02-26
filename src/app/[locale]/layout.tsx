import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SubHeader from "./components/SubHeader";
import { NextIntlClientProvider, useMessages } from "next-intl";


const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marsylia 325",
  description: "Marsylia 325- Serwis samochodowy Warszawa",
  icons: [{ rel: "icon", url: "/assets/logo-black.png" }],
};

type Props = {
  children: React.ReactNode;
  params: {
    locale: "pl" | "ru" | "en";
  };
};

const RootLayout: React.FC<Props> = ({ children, params: { locale } }) => {
  const messages = useMessages();
  return (
    <html lang={locale} className={montserrat.className}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <SubHeader />
          <Header />
          <main className="w-full min-h-screen">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
