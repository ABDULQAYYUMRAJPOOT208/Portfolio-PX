import React from "react";
import localIcon from "../resources/img/code-circle-svgrepo-com.svg";

const Services = () => {
  return (
    <div data-aos="fade-left">
      <section className="services" id="services">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Services</h2>

            <p className="mt-4 text-gray-300">
              These are some services i offer. I also have some certificates but
              due to some causes i did not upload.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <img
                src={localIcon}
                alt="Local Icon"
                className="size-10 text-pink-500"
              />
              <h2 className="mt-4 text-xl font-bold text-white">
                &lt;/ Anything to Code &gt;
              </h2>
              <p className="mt-1 text-sm text-gray-300">
                I have completed half of my computer science degree. Including a
                lot of excellent projects in different languages from low level
                to high level languages. Now I am able to do Code anything.
              </p>
            </div>

            <div
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <img
                src={localIcon}
                alt="Local Icon"
                className="size-10 text-pink-500"
              />
              <h2 className="mt-4 text-xl font-bold text-white">
                &lt;/ .Net Apps &gt;
              </h2>
              <p className="mt-1 text-sm text-gray-300">
                There are many project I have completed in C#. Most of these
                demos i have provided you in projects sections and github.
              </p>
            </div>

            <div
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <img
                src={localIcon}
                alt="Local Icon"
                className="size-10 text-pink-500"
              />
              <h2 className="mt-4 text-xl font-bold text-white">
                &lt; React Web Apps &gt;
              </h2>
              <p className="mt-1 text-sm text-gray-300">
                Developed decent amount of mern apps.
              </p>
            </div>

            <div
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <img
                src={localIcon}
                alt="Local Icon"
                className="size-10 text-pink-500"
              />
              <h2 className="mt-4 text-xl font-bold text-white">
                React Native
              </h2>
              <p className="mt-1 text-sm text-gray-300">
                Working on this technology ( framework ). This was much easier
                for me to develop these app.
              </p>
            </div>

            <div
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <img
                src={localIcon}
                alt="Local Icon"
                className="size-10 text-pink-500"
              />
              <h2 className="mt-4 text-xl font-bold text-white">C++</h2>
              <p className="mt-1 text-sm text-gray-300">
                Working in C++ for last two years. And i gained decent knowledge
                of C++ with problem solving and projects.
              </p>
            </div>

            <div
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <img
                src={localIcon}
                alt="Local Icon"
                className="size-10 text-pink-500"
              />
              <h2 className="mt-4 text-xl font-bold text-white">
                &lt;/ Assembly &gt;
              </h2>
              <p className="mt-1 text-sm text-gray-300">
                I have worked in 8-bit and 32-bit assembly asm technology. And
                developed some project in these languages.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
