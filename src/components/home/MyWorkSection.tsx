import Project, { type IProjectProps } from "../Reusable/Project";
import Title from "../Reusable/Title";

const projects: IProjectProps[] = [
  {
    id: 1,
    imgSrc: "/projects/javilen.png",
    title: "Javilen",
    description:
      "A fire-and-forget event streaming API designed to capture UI, API, and database events and publish them to Kafka.",
    tags: [".NET", "Confluent Kafka", "Docker"],
  },
  {
    id: 2,
    imgSrc: "/projects/educare.png",
    title: "EduCare",
    description:
      "An educational platform that allows teachers to manage learning content and provide students with an engaging digital learning experience.",
    tags: ["React Native", "Strapi", ".NET", "PostgreSQL"],
  },
  {
    id: 7,
    imgSrc: "/projects/edurise.png",
    title: "EduRise",
    description:
      "EduRise is a professional web-based platform designed to serve as the digital foundation for a modern education consultancy business.",
    tags: ["React", ".NET", "Google Calendar API"],
  },
  // {
  //   id: 3,
  //   imgSrc: "https://picsum.photos/800/600?random=3",
  //   title: "Ahoy",
  //   description:
  //     "A feature flagging system that allows development teams to safely enable, disable, and gradually release application features.",
  //   tags: ["C#", ".NET", "Redis", "SQL Server"],
  // },
  // {
  //   id: 4,
  //   imgSrc: "https://picsum.photos/800/600?random=4",
  //   title: "RunTrack",
  //   description:
  //     "A running companion that tracks workouts, visualizes performance, and helps runners monitor their progress toward personal goals.",
  //   tags: ["React", "TypeScript", "Tailwind", "Charts"],
  // },
  {
    id: 5,
    imgSrc: "/projects/carpool.png",
    title: "CarPool",
    description:
      "A long-distance ride-sharing platform connecting passengers and drivers travelling along similar routes.",
    tags: ["React Native", ".NET", "PostgreSQL", "Docker"],
  },
  // {
  //   id: 6,
  //   imgSrc: "https://picsum.photos/800/600?random=6",
  //   title: "TaskFlow",
  //   description:
  //     "A collaborative project management application for organizing tasks, tracking progress, and managing team workloads.",
  //   tags: ["React", "TypeScript", "Tailwind", "Node.js"],
  // },
];

const MyWorkSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <Title name="My Work" />
        <p className="text-caption italic">
          A collection of experiments, failures, and triumphs. Every project
          here started as an messy idea, passion project before making its way
          to the digital world.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6 py-2">
          {projects.map((project) => (
            <Project
              key={project.id}
              id={project.id}
              imgSrc={project.imgSrc}
              title={project.title}
              description={project.description}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default MyWorkSection;
