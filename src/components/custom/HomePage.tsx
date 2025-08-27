import Hero from "@/components/custom/Hero.tsx";
import { Button } from "@/components/ui/button.tsx";
import officeImage from "@/assets/officeComp.avif";

const HomePage = () => {
  return (
    <div>
      <Hero />

      <div className="flex flex-col py-16 gap-6 items-center bg-secondary">
        <h1 className={"text-4xl md:text-6xl font-light"}>
          Explore Our Scope Of Work
        </h1>
        <p className={"text-xl font-[200]"}>Our Activities & Services</p>
        <Button className={"rounded-none py-6 px-10 mt-12 text-md font-light"}>
          Learn More
        </Button>
      </div>

      <div className="flex bg-white">
        <div className={"flex flex-col gap-6 p-16 w-1/2"}>
          <h1 className={"text-4xl md:text-6xl font-light"}>Get to Know Us</h1>
          <p className={"text-xl font-[200]"}>Hellenic Finance Network</p>
          <Button
            className={
              "rounded-none py-6 px-10 mt-12 text-md font-light self-center"
            }
          >
            Start Now
          </Button>
        </div>
        <div className="w-1/2 h-[400px] overflow-hidden bg-gray-200">
          <img
            src={officeImage}
            alt={"About Us"}
            loading={"lazy"}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex gap-16 bg-primary px-12 py-16 items-center justify-center">
        <h1 className={"text-6xl text-white font-light"}>Admits Include</h1>
        <div className={"size-36 bg-black flex items-center justify-center"}>
          <h1 className={"text-gray-400 text-6xl"}>A</h1>
        </div>
        <div className={"size-36 bg-black flex items-center justify-center"}>
          <h1 className={"text-gray-400 text-6xl"}>B</h1>
        </div>
        <div className={"size-36 bg-black flex items-center justify-center"}>
          <h1 className={"text-gray-400 text-6xl"}>C</h1>
        </div>
        <div className={"size-36 bg-black flex items-center justify-center"}>
          <h1 className={"text-gray-400 text-6xl"}>D</h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
