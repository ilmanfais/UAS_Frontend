import React, { useEffect } from 'react';
import animationData from '../../assets/holyquran.json';
import Lottie from 'lottie-web';

const Home = () => {
  useEffect(() => {
    // Load and play the Lottie animation
    const animation = Lottie.loadAnimation({
      container: document.getElementById('lottie-container'), // Replace with the actual ID of the container element
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    // Optionally, you can stop the animation when the component unmounts
    return () => animation.destroy();
  }, []);

  return (
    <div className="relative px-6 pt-1 lg:px-8">
      {/* Left column with Lottie animation */}
      <div className="flex flex-col sm:flex-row">
        <div
          id="lottie-container"
          className="mx-auto max-w-2xl py-6 sm:py-8 lg:py-10 z-10 relative"
        />
        {/* Right column with other content */}
        <div className="sm:w-2/3 mx-auto">
          <div className="fixed inset-x-0 -top-40 z-0 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#808080] to-[#003188] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 z-10 relative">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Temukan kebijaksanaan Bersama Alquran.{' '}
                <a href="/quran" className="font-semibold text-indigo-600">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Mulai membaca <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Bimbingan Alquran untuk Hidup Anda
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Temukan kebijaksanaan dan petunjuk hidup melalui bacaan Alquran.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/quran"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Mulai Membaca
                </a>
              </div>
            </div>
          </div>
          <div className="fixed inset-x-0 top-[calc(100%-13rem)] z-0 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#808080] to-[#003188] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
