const ServicesPage = () => {
  return (
    <div>
      <div className={"pt-32 pb-16 bg-white"}>
        <div className={"max-w-3xl mx-auto flex flex-col gap-6"}>
          <h1 className={"text-4xl md:text-6xl font-bold"}>Services</h1>
          <p>
            At the Hellenic Finance Network our services are more than benefits
            - they are strategic investments in the future of Greek talent.
            Every member gains privileged access to career-shaping mentorship,
            elite networking, technical mastery and competitive platforms -{" "}
            <span className={"font-semibold"}>
              all provided at no cost. Because when our members grow, achieve,
              and lead, we succeed.
            </span>
          </p>
        </div>
      </div>

      <div className={"pt-32 pb-16 bg-secondary"}></div>
    </div>
  );
};

export default ServicesPage;
