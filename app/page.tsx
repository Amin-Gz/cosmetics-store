import Slider from "./components/slider/slider";
import Image_row from "./components/Image_row";
import Product_offer from "./components/product_Offer/product_offer";
import Articel from "./components/articel";
import Contact_suport from "./components/contact_suport";

export default function Home() {
  return (
    <main className="w-full relative">
      {/* ------slider---------- */}
      <Slider />
      {/* ------img-articel---------- */}
      <Image_row />
      {/* -------Product-slider--------- */}
      <Product_offer />
      {/* -------main-articel-------- */}
      <Articel />
      {/* --------contact-support------- */}
      <Contact_suport />
    </main>
  );
}
