import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-blue-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Raghavendran, nice to meet you. Please take a look around
            </p>
          </div>
          <div>
            <p>
              Technically advanced Full stack developer with ≈ 3 years of
              experience in developing, testing and delivering user-centric
              software applications using MERN stack technologies. Equipped with
              excellent communication skills, work ethics and possesses a strong
              sense of leadership.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
