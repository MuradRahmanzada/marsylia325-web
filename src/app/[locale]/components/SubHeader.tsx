import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import ContactInfo from "./ContactInfo";

const SubHeader = () => {
  return (
    <section className="w-full h-auto md:h-14 bg-yellow-300 px-6 sm:px-10 py-4 flex items-center">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6 text-xs md:text-sm font-bold ">
          <ContactInfo
            icon={<FaPhoneAlt size={20} />}
            text={"+48 780 780 325"}
          />
          <ContactInfo
            icon={<IoMail size={20} />}
            text={"325marsylia@gmail.com"}
          />
        </div>
        <div className="hidden md:block">
          <h1 className="font-bold text-sm">Twój Samochód, Nasza Troska</h1>
        </div>
      </div>
    </section>
  );
};

export default SubHeader;
