import Banner from "./components/Banner";
import Brands from "./components/Brands";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import Form from "./components/Form";

export default function Home() {
  return (
    <main className="min-h-[1800px]">
      <Banner />
      <Services />
      <Brands />
      <FAQ />
      <Form />
    </main>
  );
}
