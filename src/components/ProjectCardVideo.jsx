import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const ProjectCardVideo = ({ title, description, vid, animation }) => {
  const videoRef = useRef(null);
  const { ref, inView } = useInView({
    triggerOnce: false, // Set to false if you want to play/pause each time it scrolls in/out of view
    threshold: 0.5, // Play the video when 50% of it is in view
  });

  useEffect(() => {
    if (videoRef.current) {
      if (inView) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [inView]);

  return (
    <div ref={ref} className="video-container" data-aos={animation}>
      <article className="article-wrapper">
        <div className="rounded-lg container-project z-0">
          <video ref={videoRef} width="90%" height="100%" controls muted>
            <source src={vid} type="video/mp4" />
          </video>
        </div>
        <div className="project-info">
          <div className="flex-pr bg z-10">
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
          <div className="bg z-10">
            <span className="">{description}</span>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProjectCardVideo;
