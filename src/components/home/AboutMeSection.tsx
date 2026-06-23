const AboutMeSection = () => {
  const tags = [
    { text: "Resilient", x: "-5%", y: "-1.25%", rotate: -15 },
    { text: "Innovative", x: "90%", y: "20%", rotate: 10 },
    { text: "Problem-Solver", x: "60%", y: "90%", rotate: -25 },
    { text: "Collaborative", x: "80%", y: "70%", rotate: -10 },
    { text: "Adaptable", x: "70%", y: "5%", rotate: 15 },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-headline-md mb-4 rotate-tilt-xsm">
          <span className="underline-bold">About Me</span> - Buoyant.
        </h2>
        <div className="container-popout py-12 px-6">
          <h5 className="text-label-caps mb-5 rotate-tilt-xsm">
            ENTRY #124 // 2026
            <span className="text-headline-sm capitalize underline-highlight-light">
              Inside the Brain
            </span>
          </h5>
          <div className="sm:flex flex-row gap-8">
            <div>
              <p className="text-body-sm mb-4">
                Keanu Kapank, a 22 year old software engineer, I'm a passionate
                and driven individual with a love for technology and innovation.
                With a strong background in Information Technology, I have honed
                my skills in various tools and frameworks, allowing me to create
                efficient and effective solutions to complex problems. My
                dedication to continuous learning and improvement has led me to
                explore new technologies and stay up-to-date with industry
                trends.
              </p>
              <p className="text-body-sm">
                I'm collaborative by nature and my excellent communication
                skills make me a valuable team player, always willing to share
                knowledge and support my colleagues. In my free time, I enjoy
                contributing to open-source projects, attending tech meetups,
                and exploring the latest advancements in the tech world.
              </p>
            </div>
            <div>
              <hr className="line-broken"></hr>
              <h6>Hobbies: </h6>
              <ul className="text-sm list-disc list-inside">
                <li>Jogging</li>
                <li>Reading</li>
                <li>Hiking</li>
                <li>Watching Sport Amabokke</li>
                <li>Playing Video Games</li>
              </ul>
            </div>
          </div>
          {tags.map((tag) => (
            <span
              key={tag.text}
              className="card-sticky card-sticky-coral"
              style={{
                left: tag.x,
                top: tag.y,
                transform: `rotate(${tag.rotate}deg)`,
              }}
            >
              {tag.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
