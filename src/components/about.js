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
            Computer Science Major, Software Engineer
          </p>
          <p className="mb-8 text-xl text-white leading-relaxed font">
            I am a penultimate undergraduate pursuing a Bachelor's Degree in Computer Science at the National University of Singapore.           
            <br/>
            My interests include Software Engineering, Computer Networks, and Machine Learning.
          </p>

          <p className="mb-8 text-xl text-white leading-relaxed font">
            In my free time, I like to workout, play video games and build apps spontaneously.
          </p>
        </div>
        {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 h-1/3"> */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
          <img
            className="object-cover object-center rounded aspect-square"
            alt="hero"
            src="./testPic.avif"
          />
        </div>
      </div>
    </section>
  );
}
  
  export default about;