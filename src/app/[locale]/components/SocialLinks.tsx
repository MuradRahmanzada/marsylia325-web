import Link from "next/link";
import Image from "next/image";

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-3 mt-5 md:mt-0">
      <Link href="https://www.facebook.com/profile.php?id=61555124284892">
        <Image
          src="/assets/facebook.svg"
          width={35}
          height={35}
          alt="facebook-logo"
        />
      </Link>
      <Link href="https://www.instagram.com/marsylia325/">
        <Image
          src="/assets/instagram.svg"
          width={35}
          height={35}
          alt="instagram-logo"
        />
      </Link>
      <Link href="">
        <Image
          src="/assets/telegram.svg"
          width={35}
          height={35}
          alt="telegram-logo"
        />
      </Link>
    </div>
  );
};

export default SocialLinks;
