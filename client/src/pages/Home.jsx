import AboutUs from "../components/AboutUs";
import CardView from "../components/CardView";
import ContactUs from "../components/ContactUs";
import NavBar from "../components/NavBar";
import OurJur from "../components/OurJur";

const Home = () => {
  return (
    <div className="w-full ">
      <NavBar />
      <div className="relative">
        <img
          src="https://cpsnb.org/images/slideshow/cpsnb_slide3.jpg"
          alt="main"
          className="h-[600px] min-w-[100%] opacity-95"
        />
        <div className="absolute top-[35%] left-[10%] flex flex-col gap-5">
          <h1 className="text-4xl font-bold text-gray-500 w-[400px]">
            Welcome to Kolonna Base Hospital
          </h1>
          <p className="  text-gray-500">
            We provide the best health care services
          </p>
          <button className="w-[200px] bg-transparent border border-gray-500 text-gray-500  px-5 py-2 rounded-md">
            <a href="/services">Our Services</a>
          </button>
        </div>
      </div>
      <OurJur />
      <CardView />
      <AboutUs />
      <ContactUs />
    </div>
  );
};
export default Home;
