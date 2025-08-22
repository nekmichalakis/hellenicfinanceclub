import Hero from "@/components/custom/Hero.tsx";
import { Button } from "@/components/ui/button.tsx";

const HomePage = () => {
  return (
    <div>
      <Hero />

      <div className="flex flex-col py-16 gap-6 items-center bg-secondary">
        <h1 className={"text-4xl md:text-6xl font-bold"}>
          Explore Our Scope Of Work
        </h1>
        <p className={"text-xl"}>Our Activities & Services</p>
        <Button className={"rounded-none py-6 px-10 mt-12 text-md font-light"}>
          Learn More
        </Button>
      </div>

      <div className="flex bg-white">
        <div className={"flex flex-col gap-6 p-16 w-1/2"}>
          <h1 className={"text-4xl md:text-6xl font-bold"}>Get to Know Us</h1>
          <p className={"text-xl"}>Hellenic Finance Network</p>
          <Button
            className={
              "rounded-none py-6 px-10 mt-12 text-md font-light self-center"
            }
          >
            Start Now
          </Button>
        </div>
        <img
          src={"https://picsum.photos/800"}
          alt={"About Us"}
          className={"w-1/2 object-cover h-[400px]"}
        />
      </div>
    </div>
  );
};

export default HomePage;
