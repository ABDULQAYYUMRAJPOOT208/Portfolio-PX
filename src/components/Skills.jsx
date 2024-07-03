import React from "react";
import SkillLine from "./SkillLine";
const Skills = () => {
  return (
    <div id="skills" data-aos="fade-up">
      <h3 className="text-center text-4xl pt-10 skills">Skills</h3>
      <div className="mbskills-container flex skills">
        <div className="mbskill flex-1">
          <div className="my-3">
            <p>HTML</p>
            <SkillLine width={80} />
          </div>
          <div className="my-3">
            <p>CSS</p>
            <SkillLine width={86} />
          </div>
          <div className="my-3">
            <p>JavaScript</p>
            <SkillLine width={78} />
          </div>
          <div className="my-3">
            <p>React</p>
            <SkillLine width={85} />
          </div>
          <div className="my-3">
            <p>React Native</p>
            <SkillLine width={80} />
          </div>
          <div className="my-3">
            <p>ETL</p>
            <SkillLine width={75} />
          </div>
          <div className="my-3">
            <p>SQL</p>
            <SkillLine width={70} />
          </div>
        </div>

        <div className=" mbskill flex-1 ">
          <div className="my-3">
            <p>Express js</p>
            <SkillLine width={75} />
          </div>
          <div className="my-3">
            <p>Node js</p>
            <SkillLine width={80} />
          </div>
          <div className="my-3">
            <p>C++</p>
            <SkillLine width={82} />
          </div>
          <div className="my-3">
            <p>C#</p>
            <SkillLine width={88} />
          </div>
          <div className="my-3">
            <p>Python</p>
            <SkillLine width={85} />
          </div>
          <div className="my-3">
            <p>Power BI</p>
            <SkillLine width={85} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
