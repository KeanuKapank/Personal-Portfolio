import React from "react";

export interface IProjectProps {
  id: number;
  imgSrc: string;
  title: string;
  description?: string;
  tags: string[];
  url?: string;
}

const Project = ({ id, imgSrc, title, description, tags, url }: IProjectProps) => {
  const random = Math.floor(Math.random() * tags.length + 1);
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`container-popout container-popout-hover p-4 ${id % 2 === 0 ? "rotate-tilt-xsm" : "rotate-tilt-xsmr"}`}
    >
      <div className="w-full overflow-hidden aspect-auto">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-contain border-charcoal-slim"
        />
      </div>
      <h3 className="text-headline">{title}</h3>
      <p className="text-caption py-2 text-gray-600">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`tag ${index + 1 === random ? "tag-ink" : index + 1 < random ? "tag-marker" : "tag-highlight"}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
};

export default Project;
