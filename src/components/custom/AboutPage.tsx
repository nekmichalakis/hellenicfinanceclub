const AboutPage = () => {
  return (
    <div>
      <div className={"bg-primary"}>
        <div
          className={"max-w-3xl mx-auto py-24 px-4 sm:px-6 lg:px-8 text-center"}
        >
          <h1 className={"text-4xl font-extrabold text-white sm:text-5xl"}>
            About Us
          </h1>
        </div>
      </div>

      <div className={"bg-secondary py-16"}>
        <div className={"max-w-6xl mx-auto bg-white flex"}>
          <div className={"w-2/3 p-16 flex flex-col gap-12"}>
            <h1 className={"text-4xl font-extrabold sm:text-5xl mb-4"}>
              Our Story
            </h1>
            <p className={"text-md font-light"}>
              The Hellenic Finance Network was born from a shared ambition.
              During an investment banking internship, two students — each from
              different backgrounds but united by a common vision — met,
              collaborated, and discovered a powerful synergy. That partnership
              between Aris and Nikos became the foundation for something bigger.
            </p>
            <p className={"text-md font-light"}>
              After the internship ended, we knew our journey wasn’t just about
              personal success.{" "}
              <span className={"font-medium"}>
                It was about creating a pathway for others. So we founded HFN: A
                student‑led club helping Greek students break into elite finance
                through exclusive, high‑impact connections.
              </span>
            </p>
          </div>
          <div className={"w-1/3"}>
            <img
              src={"https://picsum.photos/400/600"}
              alt={"About us"}
              className={"w-full"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
