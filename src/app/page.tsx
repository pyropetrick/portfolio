import { Projects } from "@/components";

export default function Home() {
  return (
    <main className="pt-24 lg:w-1/2 lg:py-24 flex flex-col">
      <p className="text-lg mb-10">
        I'm frontend developer with 1,5+ year experience in E-commerce. <br />  My main stack - React, Next,
        Typescript, Redux(RTK). <br /> I have experience with : <br /> - Backend services on Node.js
        (Express, Nest, MongoDB, PostgreSQL). <br /> - Cross-platform apps on Ionic, Flutter, React
        Native.
        <br /> - Vue 2-3, Angular 14. In my free time, <br /> I enjoy playing computer games,
        reading, and playing basketball with friends.
      </p>
      <h2 className="font-medium text-3xl mb-10">My projects</h2>
      <Projects />
    </main>
  );
}
