import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            {/* Hero Section */}
            <section className="grid sm:grid-cols-2 items-center gap-8 sm:mx-16 mx-4 sm:py-24 py-10">

                
                {/* Left Side - Image */}
                <div className="flex justify-center">
                    <img className="w-80 sm:w-96" src="/Images/router.png" alt="image1" />
                </div>

                {/* Right Side - Text */}
                <div className="space-y-6 text-center sm:text-right">


<h2 className="text-2xl font-semibold text-center text-gray-700 mt-8">
  Ready to Elevate Your Development?
</h2>


<p className="text-4xl sm:text-5xl font-bold text-black text-center my-4">
  Start Building Smarter & Faster 🚀
</p>
<br />
<p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
  Download our toolkit now and unlock a powerful suite of tools designed to speed up your workflow, simplify development, and help you launch production-ready apps in no time. Perfect for both beginners and experienced developers.
</p>

<p className="text-center text-gray-600 text-lg max-w-2xl mx-auto mt-4">
  Whether you're building a portfolio, a side project, or your next big startup idea, our tools offer you a solid foundation to write clean, scalable, and high-performing code — all while staying focused on what really matters: creating impact.
</p>

<p className="text-center text-gray-600 text-lg max-w-2xl mx-auto mt-4">
  Built with modern frameworks like <strong>React</strong>, and optimized for developer experience, the toolkit includes pre-built components, routing strategies, performance tweaks, and design inspiration to take your project from concept to reality — faster than ever.Download from below button.
</p>
<br />



                    <Link
                       to="/"
                       aria-label="Download App"
                        className="inline-flex items-center px-13 py-5 text-white bg-orange-500 font-medium rounded-lg hover:opacity-80 transition ml-[-10px]"

                     >

                        <svg
                            fill="white"
                            aria-hidden="true"
                            width="24"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg"
                            fillRule="evenodd"
                            clipRule="evenodd"
                        >
                            <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                        </svg>
                        &nbsp; Download now
                    </Link>
                </div>
            </section>
            {/* Features Section */}
<section className="py-16 bg-gray-50">
  <h2 className="text-3xl font-bold text-center mb-10 text-black">Why Choose Our Toolkit?</h2>
  <div className="grid sm:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
    <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-2 text-black">⚡ Lightning Fast</h3>
      <p className="text-gray-600">Optimized for performance with minimal setup and blazing-fast builds.</p>
    </div>
    <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-2 text-black">🧱 Modular Design</h3>
      <p className="text-gray-600">Pre-built components help you structure and scale projects efficiently.</p>
    </div>
    <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-2 text-black">📦 Modern Tech Stack</h3>
      <p className="text-black">Built with React, Vite, Tailwind — fully customizable and production-ready.</p>
    </div>
  </div>
</section>

{/* Testimonials */}
<section className="py-16">
  <h2 className="text-3xl font-bold text-center mb-10">What Developers Are Saying</h2>
  <div className="max-w-4xl mx-auto space-y-8 px-4">
    <blockquote className="bg-white p-6 rounded-lg shadow-md italic text-gray-700">
      “This toolkit boosted my productivity by 10x. Everything is just plug-and-play!” 
      <span className="block mt-2 text-right font-semibold">— Anika, Frontend Dev</span>
    </blockquote>
    <blockquote className="bg-white p-6 rounded-lg shadow-md italic text-gray-700">
      “Perfect for my startup MVP. Super clean codebase with great defaults.” 
      <span className="block mt-2 text-right font-semibold">— Rahul, Indie Hacker</span>
    </blockquote>
  </div>
</section>

{/* Tech Stack Logos */}
<section className="py-12">
  <h3 className="text-center text-xl font-semibold text-gray-700 mb-6">Built With:</h3>
  <div className="flex flex-wrap justify-center items-center gap-6">
    <img className="sm:w-40 w-50 h-25"    src="/Images/react-logo.png" alt="React"  />
    <img src="/Images/vite-logo.jpeg" alt="Vite" className="m:w-40 w-50 h-25" />
    <img src="/Images/tailwind-logo.png" alt="Tailwind" className="m:w-40 w-50 h-25" />
    <img src="/Images/js-logo.jpg" alt="JavaScript" className="m:w-40 w-50 h-25" />
  </div>
</section>


            {/* Second Image */}
            <div className="grid place-items-center sm:mt-20 mt-10">
                <img className="sm:w-96 w-48" src="/Images/router2.png" alt="image2" />
            </div>

            {/* Footer Text */}
            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium text-black">
  Empower Your Code. Elevate Your Skills.
</h1>
<p className="text-center text-gray-600 text-lg px-4 max-w-3xl mx-auto">
  Join a community of forward-thinking developers. Build smarter, faster, and cleaner with tools that make a real difference.
</p>

        </div>
    );
}
