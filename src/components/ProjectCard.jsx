import React from "react";

const ProjectCard = ({ title, description, img, animation }) => {
  return (
    <div data-aos={animation}>
      <article className="article-wrapper">
        <div className="rounded-lg container-project">
          <img src={img} alt={title} />
        </div>
        <div className="project-info">
          <div className="flex-pr bg">
            <div className="project-title text-nowrap">{title}</div>
            <div className="project-hover">
              <svg
                style={{ color: "black" }}
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                color="black"
                strokeLinejoin="round"
                strokeLinecap="round"
                viewBox="0 0 24 24"
                strokeWidth={2}
                fill="none"
                stroke="currentColor"
              >
                <line y2={12} x2={19} y1={12} x1={5} />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </div>
          <div className="bg">
            <span>{description}</span>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProjectCard;
