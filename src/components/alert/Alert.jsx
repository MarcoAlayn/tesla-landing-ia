import React, { useEffect, useState } from "react";

const Alert = ({ message, duration = 5000 }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [message, duration]);

  if (!message) return null;

  return (
    <div
      className={`fixed top-0 left-0 w-full py-14 transition-opacity duration-400 ease-in-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className='flex items-center justify-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-neutral-800 dark:text-red-400 mx-auto w-3/6'
        role='alert'
      >
        <svg
          className='flex-shrink-0 inline w-4 h-4 me-3'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          viewBox='0 0 20 20'
        >
          <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z' />
        </svg>
        <div>
          <span className='font-medium'>{message}</span>
        </div>
      </div>
    </div>
  );
};

export default Alert;
