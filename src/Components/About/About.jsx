import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                        src="/Images/router3.jpg"
                        alt="React illustration"
                        loading="lazy"
                    />

                  </div>
                  <div className="md:7/12 lg:w-6/12">

                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          React development is carried out by passionate developers
                      </h2>

                      <p className="mt-6 text-gray-600">
                          React is more than just a library : it's a revolution in the way developers build modern web applications. 
                          Designed and maintained by Meta, React promotes the development of reusable components, 
                          unidirectional data flow, and an efficient virtual DOM, which together result in highly performant and 
                          scalable web applications.
                      </p>
                       
                       <p className="mt-4 text-gray-600">
                        Behind every beautiful and seamless user interface is a developer who has spent hours 
                        architecting clean, maintainable, and modular code. Whether building dashboards, single-page
                         applications, or full-scale platforms, React developers are constantly pushing boundaries of 
                         frontend performance and user satisfaction.
                       </p>

              <p className="mt-4 text-gray-600">
                   In today’s fast-paced tech world, React continues to evolve, and so do its developers. 
                   Their passion for innovation, eye for design, and strong foundation in JavaScript make them
                    invaluable assets in any development team.
              </p>
                    
                  </div>
              </div>
          </div>
      </div>
  );
}