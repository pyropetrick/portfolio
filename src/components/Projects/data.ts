import { StaticImageData } from "next/image";
import { elangImage, genayImage, pixemaImage, postureImage, townsendImage, phrasalImage } from "@/assets";

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
    badges: ["React", "Next", "MobX", "Education", "2023"],
    link: "https://edu.elang.app/",
    description:
      "Built a platform for learning English through videos with subtitles, including gaming content.",
  },
  {
    title: "Genesis GPT",
    image: genayImage,
    badges: ["React", "Next", "Open AI", "Tailwind", "2023"],
    link: "https://genai-gray.vercel.app/",
    description:
      "Created a customizable ChatGpt based on the openAI voice messaging API, including voice response playback. Collaborated with American developers to ensure flexible chat customization and version selection.",
  },
  {
    title: "Townsend platform",
    image: townsendImage,
    badges: ["React", "Redux", "2023"],
    link: "http://node.twnsnd.online:32043/",
    description:
      "Created a chatbot service for aggregating all chatbot platforms, with the ability to purchase chatbot solutions for the company.",
  },
  {
    title: "Phrasal verbs",
    image: phrasalImage,
    link: "https://apps.apple.com/gb/app/phrasal-verbs-english-grammar/id1659421678",
    badges: ["React", "React Native", "MobX", "Mobile", "Education", "2023"],
    description:
      "Developed a cross-platform application (iOS, Android) using Ionic, utilizing TensorFlow capabilities for body segmentation.",
  },
  {
    title: "Posture screen",
    image: postureImage,
    link: "https://apps.apple.com/gb/app/posture-ai-medical-assistant/id1662597139",
    badges: ["React", "Ionic", "Mobile", "TensorFlow", "2023"],
    description:
      "Developed a cross-platform application (iOS, Android) using Ionic, utilizing TensorFlow capabilities for body segmentation.",
  },
];
