interface IContact {
  icon: React.ReactNode;
  text: string;
  info?: string;
}

const ContactInfo: React.FC<IContact> = ({ icon, text, info }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-1">
      {icon}
      <h1 className="font-bold">{text}</h1>
      <span className="text-sm md:text-base font-semibold">{info}</span>
    </div>
  );
};

export default ContactInfo;
