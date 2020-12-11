import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const MenuItem = ({ label }) => {
  let isChat;
  const icon = (label) => {
    let comp;
    let chat = false;

    switch (label) {
      case 'Schedule':
        comp = `<svg stroke="currentColor" class="h-7 w-7 transform scale-125 sm:block flex-shrink-0"
         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>`;
        break;
      case 'Services':
        comp = `<svg
        class="h-7 w-7 transform scale-125 sm:block flex-shrink-0"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.25"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>`;
        break;
      case 'Chat':
        comp = `<div id="online" class="relative h-2 w-2 ml-7 -mb-2 sm:hidden">
        <span class="flex h-1 w-1">
          <span class="animate-ping absolute inline-flex h-1 w-1 rounded-full bg-green-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-1 w-1 bg-green-500"></span>
        </span>
      </div><svg
        class="h-7 w-7 transform scale-125 sm:block flex-shrink-0"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.25"
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg><div id="online-sm" class="hidden sm:block relative h-2 w-2 -ml-0 -mt-5">
      <span class="flex h-1 w-1">
        <span class="animate-ping absolute inline-flex h-1 w-1 rounded-full bg-green-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-1 w-1 bg-green-500"></span>
      </span>
    </div>`;
        chat = true;
        break;
      case 'Log in':
        comp = `<svg
        class="h-7 w-7 transform scale-125 sm:block flex-shrink-0"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
        stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.25"
          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>`;
        break;
      default:
        comp = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>`;
    }
    isChat = chat;
    return comp;
  };

  // const isChat = () => {
  //   if (label === 'Chat') return true;
  // };

  return (
    <div className="flex flex-col justify-center items-center select-none text-white hover:text-indigo-400 sm:mt-6 sm:-mr-2 sm:flex-row sm:bg-transparent sm:hover:bg-gray-900 sm:rounded-md sm:justify-start sm:ml-2 sm:items-center sm:p-2 cursor-pointer ">
      {ReactHtmlParser(icon(label))}
      <span
        className={`mt-2 text-xs uppercase opacity-80 font-semibold tracking-wider content-center sm:mt-0 ${
          isChat ? 'sm:ml-2' : 'sm:ml-4'
        } sm:items-center sm:text-base sm:normal-case`}>
        {label}
      </span>
    </div>
  );
};

export default MenuItem;
