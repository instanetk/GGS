import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ name, slug, image }) => {
  //regex: match ' & ' - any ampersand wrapped by single spaces or a single space ' '.
  const route = slug + '/' + name.toLowerCase().replace(/\s&\s|\s/g, '-');
  return (
    <div className="w-64 text-center ml-4 flex-shrink-0 px-4 py-0 sm:pb-8 select-none sm:w-64 sm:ml-0 cursor-pointer ">
      <Link to={route}>
        <div className="flex flex-col flex-grow justify-center items-center select-none">
          <img
            alt={name}
            className="w-full h-32 sm:h-36 border-white border-t-2 border-l-2 border-r-2 rounded-t-lg shadow-md object-cover"
            src={image}
          />
          <span className="w-full h-16 sm:h-14 py-3 px-2 flex justify-center items-center bg-white rounded-b-lg font-bold leading-6 text-gray-800 shadow-sm">
            {name}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Category;
