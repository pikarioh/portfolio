import Image from 'next/image';
import LinkButtons from './components/linkbuttons';

export default function Home() {
  return (
    <div className="w-vw flex h-dvh justify-center overflow-x-hidden overflow-y-scroll bg-gradient-to-br from-gray-200 to-white font-[family-name:var(--font-geist-sans)]">
      <div className="h-max w-full max-w-screen-lg md:h-full">
        <div className="flex h-[66dvh] flex-col items-center justify-center gap-8 p-8 md:col-span-12 md:min-h-min md:flex-row md:gap-12">
          <div className="size-36 shrink rounded-full bg-gray-300 sm:size-48" />
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold md:text-6xl">Hello!</h1>
            <h2 className="max-w-96">
              My name is Thanathon. I am a Front-end Engineer and Graphic Designer, currently
              wokring at Microchip Technology.
            </h2>
          </div>
        </div>

        <div className="flex h-[33dvh] items-center justify-center gap-8 p-8 md:col-span-3 md:gap-12">
          <LinkButtons />
        </div>
      </div>
    </div>
  );
}
