import { Button } from "@/components/ui/button.tsx";
import { Link } from "react-router-dom";

const EventsPage = () => {
  const cards = [
    {
      image: "https://picsum.photos/200/300",
      title: "Industry Coffee Chats",
      description:
        "Small‑group conversations with seasoned finance professionals, blending open Q&A with deep industry insights. Designed to give you candid perspectives and practical takeaways in an intimate setting.",
    },
    {
      image: "https://picsum.photos/200/300",
      title: "Exclusive Networking Events",
      description:
        "In‑person gatherings where every member can meet and engage with our selective circle of high‑finance professionals and alumni from top‑tier institutions—building authentic connections that last.",
    },
  ];

  return (
    <div>
      <div className={"bg-chart-1 pb-24 pt-40 border "}>
        <div className={"max-w-6xl mx-auto flex relative"}>
          <div className={"w-2/3 h-100"}>
            <img
              src={"https://picsum.photos/300/200"}
              alt={"Desert landscape"}
              className={"w-full h-full object-cover"}
            />
          </div>
          <div
            className={
              "w-2/3 p-16 pb-40 flex flex-col gap-8 right-0 mt-24 -ml-60 bg-white"
            }
          >
            <h1 className={"text-4xl font-normal sm:text-5xl mb-4"}>
              Our Events
            </h1>
            <p className={"text-md font-thin"}>
              Our events are designed to immerse members in the real dynamics of
              global finance. Through curated sessions, we connect students with
              industry professionals, alumni, and peers—creating meaningful
              relationships and actionable insights.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-white">
        <div
          className={
            "flex flex-col items-center max-w-7xl mx-auto gap-16 py-24 px-4"
          }
        >
          <h1 className={"text-4xl md:text-5xl font-light"}>Event Tracks</h1>
          <div className={"grid grid-cols-2 gap-8"}>
            {cards.map((card, index) => (
              <div key={index} className={"flex bg-chart-2"}>
                <div className={"w-1/2 h-80"}>
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className={
                    "flex w-1/2 flex-col  justify-center gap-8 p-8 pr-4"
                  }
                >
                  <p className={"text-md font-thin"}>{card.description}</p>
                  <h2 className={"text-xl font-normal"}>{card.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-white">
        <div
          className={
            "flex flex-col items-center-center max-w-4xl text-center mx-auto gap-8 py-24 px-4"
          }
        >
          <h1 className={"text-4xl md:text-5xl font-light"}>
            Become a member of our Network
          </h1>
          <p className={"text-md font-thin"}>
            Join us and take part in exclusive events that connect you with
            industry leaders, challenge your skills, and expand your network.
            Whether you're building relationships or competing to solve
            real-world finance problems,{" "}
            <span className={"font-normal"}>
              every event is a step toward your future.
            </span>
          </p>
          <Link to={"/apply"}>
            <Button
              className={
                "bg-chart-2 text-black rounded-full px-12 py-6 font-light hover:text-white self-center my-8 border border-black text-md"
              }
            >
              Apply
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
