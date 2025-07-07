'use client';
import React from 'react';

type WebButtonProps = {
  link: string;
  children: React.ReactNode;
};

function WebButton({ link, children }: WebButtonProps) {
  return (
    <a
      href={link}
      target="_blank"
      className={`relative flex cursor-pointer flex-col items-start justify-between gap-4 overflow-hidden rounded-2xl bg-none from-white/0 to-sky-500/50 fill-gray-700 p-4 font-bold text-gray-700 shadow-md outline-sky-400/50 transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,2.2)] select-none before:absolute before:top-[var(--y)] before:left-[var(--x)] before:h-[800px] before:w-[800px] before:-translate-x-1/2 before:-translate-y-1/2 before:bg-radial before:from-white/50 before:via-white/0 before:to-white/0 before:opacity-0 before:mix-blend-screen before:content-[''] hover:scale-105 hover:bg-gradient-to-b hover:from-30% hover:fill-white hover:shadow-lg hover:before:opacity-100 focus:outline-2 active:scale-100 sm:p-6`}
      onMouseMove={(e) => {
        const target = e.currentTarget;
        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element
        const y = e.clientY - rect.top; // y position within the element
        target.style.setProperty('--x', `${x.toFixed(0)}px`);
        target.style.setProperty('--y', `${y.toFixed(0)}px`);
      }}
    >
      {children}
      <div className="absolute inset-0 isolate z-[2] overflow-hidden rounded-2xl shadow-[inset_2px_2px_1px_0_rgba(255,255,255,0.5),inset_-1px_-2px_4px_1px_rgba(37,171,255,0.3)]" />
    </a>
  );
}

export default WebButton;
