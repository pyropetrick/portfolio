import { projectDatas } from "./data";
import { Project } from "..";


export const Projects = () => {
  return (
    <div className="">
      <ul className="grid grid-flow-row grid-cols-1 gap-4">
        {projectDatas.map((project, index) => (
          <Project key={index} projectData={project} />
        ))}
      </ul>
    </div>
  );
};
