import { Metadata } from "next";

type Meta = Record<"en" | "ru", Metadata>;

export const metaInfo: Meta = {
  en: {
    title: "Pavel Chernenko",
    description:
      "Welcome to my portfolio! I'm Pavel Chernenko, an experienced middle frontend developer specializing in React, Next, and React Native. Here you will find examples of my projects showcasing my skills and web development style. Take a look at my work which includes interactive web applications, responsive websites, and mobile apps. Browse through my portfolio and feel free to reach out to me if you have any questions or interesting collaboration opportunities.",
    keywords:
      "Pavel Chernenko, portfolio, middle frontend developer, React, Next, React Native, web development, web applications, responsive websites, mobile apps, projects, programming, technologies, collaboration, contacts",
  },
  ru: {
    title: "Павел Черненко",
    description:
      "Добро пожаловать на мое портфолио! Я Павел Черненко, опытный мидлл фронтенд разработчик, специализируюсь в использовании React, Next и React Native. Здесь вы найдете примеры моих проектов, демонстрирующих мои навыки и стиль веб-разработки. Обратите внимание на мои работы, которые включают в себя интерактивные веб-приложения, адаптивные веб-сайты и мобильные приложения. Просмотрите мое портфолио и свяжитесь со мной, если у вас возникнут вопросы или интересные предложения для сотрудничества.",
    keywords:
      "Павел Черненко, портфолио, мидлл фронтенд разработчик, React, Next, React Native, веб-разработка, веб-приложения, адаптивные веб-сайты, мобильные приложения, проекты, программирование, технологии, сотрудничество, контакты",
  },
};
