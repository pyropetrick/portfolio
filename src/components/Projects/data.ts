import { StaticImageData } from "next/image";
import testImage from "@/assets/images/Image.png";
import { elangImage, genayImage, pixemaImage, postureImage, townsendImage } from "@/assets";

type ProjectData = {
  title: string;
  image: StaticImageData;
  badges: string[];
  description: string;
  link: string;
};

export const projectDatas: ProjectData[] = [
  {
    title: "Cinema-Pixema",
    image: pixemaImage,
    badges: ["React", "Redux", "2022"],
    link: "https://react-pixema.netlify.app/",
    description:
      "This app is analogue the popular service kinopoisk. You may choose popular movie, find any movies, episodes or serials from search(with filter options), see current trends, add movie to favorites(unique for your account). This service have a auth(sign in/sign up/reset password) with validation and you may setting your profile. Support Dark/Light theme.",
  },
  {
    title: "Education elang",
    image: elangImage,
    badges: ["React", "Next", "MobX", "2023"],
    link: "https://edu.elang.app/",
    description:
      "Experienced middle frontend developer specializing in React, Next, and React Native. Browse through my portfolio for examples of interactive web apps, responsive websites, and mobile applications.",
  },
  {
    title: "Genesis GPT",
    image: genayImage,
    badges: ["React", "Next", "Open AI", "Tailwind", "2023"],
    link: "https://genai-gray.vercel.app/",
    description:
      "Experienced middle frontend developer specializing in React, Next, and React Native. Browse through my portfolio for examples of interactive web apps, responsive websites, and mobile applications.",
  },
  {
    title: "Townsend platform",
    image: townsendImage,
    badges: ["React", "Redux", "2023"],
    link: "http://node.twnsnd.online:32043/",
    description:
      "Experienced middle frontend developer specializing in React, Next, and React Native. Browse through my portfolio for examples of interactive web apps, responsive websites, and mobile applications.",
  },
  {
    title: "Posture screen",
    image: postureImage,
    link: "https://apps.apple.com/gb/app/posture-ai-medical-assistant/id1662597139",
    badges: ["React", "Ionic", "Mobile", "2023"],
    description:
      "Experienced middle frontend developer specializing in React, Next, and React Native. Browse through my portfolio for examples of interactive web apps, responsive websites, and mobile applications.",
  },
];
