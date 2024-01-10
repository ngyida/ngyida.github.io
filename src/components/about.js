import React from 'react'

function about() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hello, I'm Yi Da.
            <br className="hidden lg:inline-block" /> Computer Science Student, Software Engineer
          </h1>
          <p className="mb-8 leading-relaxed">
            I'm currently pursuing a Bachelor's Degree in Computer Science at the National University of Singapore. 
            My interests include Software Engineering, Computer Networks, and Machine Learning.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./testPic.avif"
          />
        </div>
      </div>
    </section>
  );
}
  
  export default about;