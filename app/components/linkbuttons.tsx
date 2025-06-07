'use client';
import React from 'react';

const LinkedInIcon = () => {
  return (
    <svg
      width="100%"
      height="100%"
      id="linkedin"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 382 382"
    >
      <path
        fill="current"
        d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889
            C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056
            H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806
            c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1
            s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73
            c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079
            c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426
            c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472
            L341.91,330.654L341.91,330.654z"
      />
    </svg>
  );
};

const MailIcon = () => {
  return (
    <svg
      id="uuid-0c637729-38c6-4c63-ad0b-45e59fcdd945"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 300"
    >
      <path
        d="M262.5,37.5H37.5C16.8,37.5,0,54.3,0,75v150c0,20.7,16.8,37.5,37.5,37.5h225c20.74,0,37.5-16.8,37.5-37.5V75c0-20.7-16.76-37.5-37.5-37.5ZM266.59,76.28l-108.64,108.6c-2.18,2.21-5.06,3.3-7.95,3.3s-5.74-1.09-7.95-3.3L33.45,76.28c-3.22-3.22-4.2-8.06-2.47-12.26,1.76-4.2,5.85-6.94,10.42-6.94h217.24c4.54,0,8.66,2.74,10.39,6.94,1.76,4.2.79,9.04-2.44,12.26Z"
        fill="current"
      />
      <polygon points="150 161.03 231.49 79.58 68.55 79.58 150 161.03" fill="current" />
    </svg>
  );
};

function LinkButtons() {
  return (
    <div className="flex justify-center gap-2">
      <button
        type="button"
        className="flex cursor-pointer items-center gap-2 rounded-xl bg-none px-6 py-2 font-normal transition-all duration-300 ease-out hover:bg-gray-500/15 hover:font-bold active:bg-sky-300"
      >
        <div className="size-6">
          <LinkedInIcon />
        </div>
        LinkedIn
      </button>
      <button
        type="button"
        className="flex cursor-pointer items-center gap-2 rounded-xl bg-none px-6 py-2 font-normal transition-all duration-300 ease-out hover:bg-gray-500/15 hover:font-bold active:bg-sky-300"
      >
        <div className="size-6">
          <MailIcon />
        </div>
        E-Mail
      </button>
    </div>
  );
}

export default LinkButtons;
