import React from 'react'

function about() {
  return (
    <section id="about">
      <div className="container w-5/6 mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl font-medium text-white">
            Hello, I'm Yi Da.
          </h1>
          <p className="mb-8 leading-relaxed">
            Backend Engineer
          </p>
          <p className="mb-8 text-xl text-white leading-relaxed font">
            Currently, I am a final-year Computer Science undergraduate at the National University of Singapore.        
          </p>

          <p className="mb-8 text-xl text-white leading-relaxed font">
            My expertise focuses on backend software engineering and security, where I am passionate about designing robust, scalable, and secure solutions to tackle complex challenges.
          </p>

          <p className="mb-8 text-xl text-white leading-relaxed font">
            Outside of work, I enjoy staying active through workouts and exploring the world of video games. I’m always open to connecting for collaboration on exciting projects!
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
          <img
            className="object-cover object-center rounded aspect-square"
            alt="hero"
            src="./portrait.png"
          />
        </div>
      </div>
    </section>
  );
}
  
  export default about;