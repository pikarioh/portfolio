'use client';
import Image from 'next/image';
import WebButton from './components/webbutton';
import LinkButton from './components/linkbutton';

export default function Home() {
  return (
    <div className="w-vw flex h-dvh justify-center overflow-x-hidden overflow-y-scroll bg-gradient-to-b from-gray-100 via-gray-200 via-90% to-sky-100 font-[family-name:var(--font-geist-sans)]">
      <div className="flex h-max w-full max-w-screen-md flex-col">
        <div className="flex flex-col items-center justify-center gap-8 p-8 md:min-h-min md:flex-row md:gap-12">
          <div className="size-36 shrink rounded-full bg-gray-300 sm:size-48" />
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold md:text-6xl">Hello!</h1>
            <h2 className="max-w-96">
              My name is Thanathon. I am a Front-end Engineer and Graphic Designer, currently
              wokring at Microchip Technology.
            </h2>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 p-8 sm:flex-row">
          <WebButton link="https://try.microchip.com">
            <div className="justify-beween flex w-full items-center gap-2">
              <span>Microchip Try</span>
            </div>
            <img src="/preview_try.png" alt="Microchip Try Preview" className="rounded-xl" />
          </WebButton>

          <WebButton link="https://propulse.no">
            <div className="justify-beween flex w-full items-center gap-2">
              <span>Propulse NTNU</span>
            </div>
            <img src="/preview_propulse.png" alt="Propulse Preview" className="rounded-xl" />
          </WebButton>
        </div>

        <div className="flex items-center justify-center gap-4 p-8">
          <LinkButton link="https://www.linkedin.com/in/thanathon/">
            <div className="size-6 shrink-0">
              <svg
                id="uuid-3d23bace-fd13-462a-a6fa-f4556e3741b4"
                data-name="LinkedIn"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 300 300"
              >
                <path
                  d="M258.333,0H41.667C18.667,0,0,18.667,0,41.667v216.667c0,23,18.667,41.667,41.667,41.667h216.667c23.042,0,41.667-18.667,41.667-41.667V41.667c0-23-18.625-41.667-41.667-41.667ZM90.708,258.333h-44.709V113.875h44.709v144.458ZM68.125,94.958c-14.583,0-26.458-11.917-26.458-26.625s11.875-26.667,26.458-26.667,26.458,11.917,26.458,26.667-11.833,26.625-26.458,26.625ZM258.333,258.333h-44.5v-75.833c0-20.792-7.917-32.417-24.375-32.417-17.875,0-27.25,12.083-27.25,32.417v75.833h-42.875V113.875h42.875v19.458s12.917-23.875,43.583-23.875,52.542,18.708,52.542,57.417v91.458Z"
                  fill="current"
                />
              </svg>
            </div>
            <span className="hidden sm:inline">LinkedIn</span>
          </LinkButton>
          <LinkButton newTab={false} link="mailto:nucleus-keel-0b@icloud.com">
            <div className="flex size-6 shrink-0 items-center">
              <svg
                id="uuid-b0555c11-71f6-4df7-8d77-e4967e93cba1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 300 225"
              >
                <path d="M262.5,0H37.5C16.8,0,0,16.8,0,37.5v150c0,20.7,16.8,37.5,37.5,37.5h225c20.737,0,37.5-16.8,37.5-37.5V37.5c0-20.7-16.763-37.5-37.5-37.5ZM266.587,38.775l-108.637,108.6c-2.175,2.213-5.062,3.3-7.95,3.3-2.85,0-5.738-1.087-7.95-3.3L33.45,38.775c-3.225-3.225-4.2-8.063-2.475-12.263,1.762-4.2,5.85-6.937,10.425-6.937h217.237c4.538,0,8.662,2.737,10.388,6.937,1.763,4.2.788,9.038-2.438,12.263Z" />
                <polygon points="150 123.525 231.487 42.075 68.55 42.075 150 123.525" />
              </svg>
            </div>
            <span className="hidden sm:inline">Contact</span>
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
