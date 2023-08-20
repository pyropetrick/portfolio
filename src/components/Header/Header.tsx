import { ContainedButton } from "..";

export const Header = () => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div className="flex flex-col justify-between">
        <div className="mb-3">
          <h1 className="text-4xl font-medium mb-2">Pavel Chernenko</h1>
          <h2 className="text-xl font-medium mb-2">Frontend developer</h2>
          <h3 className="text-md text-brown">Transforming Ideas into Interactive Digital Solutions</h3>
        </div>
        <div className="flex flex-col">
          <div className="flex space-x-4 self-start">
            <ContainedButton className="bg-primary text-white">My CV</ContainedButton>
            <ContainedButton className="bg-primary text-white hover:bg-grey">Сontact</ContainedButton>
          </div>
        </div>
      </div>
    </header>
  );
};
