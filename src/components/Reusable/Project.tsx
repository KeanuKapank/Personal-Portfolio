import React from 'react'

export interface IProjectProps {
  id: number;
  imgSrc: string;
  title: string;
  description?: string;
  tags: string[];
}

const Project = ({ id, imgSrc, title, description, tags }: IProjectProps) => {
  const random = Math.floor(Math.random() * tags.length + 1);  
  return (
    <div className={`container-popout container-popout-hover p-4 ${id % 2 === 0 ? 'rotate-tilt-xsm' : 'rotate-tilt-xsmr'}`}>
      <div className="py-4 w-full">
        <img src={imgSrc} alt={title} className="w-full aspect-square object-cover border-charcoal-slim" />
      </div>
      <h3 className="text-headline">{title}</h3>
      <p className="text-caption py-2 text-gray-600">{description}</p>
      <div className="flex flex-wrap gap-2 py-1">
        {tags.map((tag, index) => (
          <span key={index} className={`tag ${index + 1 === random ? 'tag-ink' : index + 1 < random ? 'tag-marker' : 'tag-highlight'}`}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Project