import Image from "next/image";

interface IService {
  title: string;
  desc: string;
  img: string;
}

const ServiceBox: React.FC<IService> = ({title, desc, img}) => {
  return (
    <div
      key={title}
      className="w-[450px] h-[450px] rounded-3xl bg-zinc-900 p-6 transition-all hover:scale-110 cursor-pointer a"
    >
      <div className="w-full h-0.5 bg-yellow-300 my-3 rounded-md" />
      <div className="flex items-center gap-8 pl-4">
        <div className="bg-yellow-300 rounded-md w-[100px] h-[100px] flex items-center justify-center">
          <Image src={img} width={55} height={55} alt={title} />
        </div>
        <h1 className="text-yellow-300 text-xl font-bold uppercase">
          {title}
        </h1>
      </div>
      <div className="w-full h-0.5 bg-yellow-300 my-3" />
      <p className="text-white font-semibold text-sm">{desc}</p>
    </div>
  );
};

export default ServiceBox;
