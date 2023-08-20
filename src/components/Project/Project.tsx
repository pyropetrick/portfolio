import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import { Badge } from "..";

type ProjectData = {
  title: string;
  image: StaticImageData;
  badges: string[];
  description: string;
  link: string;
};

type Props = {
  projectData: ProjectData;
};

export const Project: FC<Props> = ({ projectData }) => {
  return (
    <li className="p-4  drop-shadow-lg rounded-lg hover:bg-blue dark:hover:bg-electric cursor-pointer ease-in-out duration-300">
      <a href={projectData.link} target="_blank" className="flex space-x-5">
        <Image
          className="rounded-lg self-start"
          width={200}
          height={80}
          src={projectData.image}
          alt={`${projectData.title} screenshot project`}
        />
        <div className="flex flex-col space-2">
          <h3 className="font-medium text-primary text-xl dark:text-blue">{projectData.title}</h3>
          <p className="text-sm text-brown font-medium dark:text-white">{projectData.description}</p>
          <div className="flex flex-wrap space-x-2 space-y-2 items-end justify-center">
            {projectData.badges.map((badge) => (
              <Badge key={badge} text={badge} />
            ))}
          </div>
        </div>
      </a>
    </li>
  );
};
