import { useMediaQuery } from "react-responsive";

const Map = () => {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });
  const isMediumScreen = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2446.8165115741394!2d20.857408877067193!3d52.17402947197254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47193454d62ce767%3A0xfc1d1ac091ed62fc!2sal.%20Jerozolimskie%20325%2C%2005-816%20Regu%C5%82y%2C%20Poland!5e0!3m2!1sen!2saz!4v1707944317545!5m2!1sen!2saz"
      width={isLargeScreen ? 600 : isMediumScreen ? 600 : 320}
      height={isLargeScreen ? 450 : isMediumScreen ? 350 : 320}
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="rounded-3xl"
    ></iframe>
  );
};

export default Map;
