import React from "react";
import { Link } from "react-router-dom";

const CenterCard = ({ line, center }) => {
  return (
    <Link to={`/${line}/${center.name.toLowerCase()}`} className="block">
      <div className="flex h-[100%] transform cursor-pointer items-center overflow-hidden rounded-lg bg-gray-200 shadow-lg transition hover:-translate-y-2.5 hover:scale-105 dark:bg-gray-900">
        <img
          src={center.imageUrl}
          alt="Image"
          className="h-[100%] w-40 flex-shrink-0 object-cover object-center bordber-4 border-red-500"
        />
        <div className="px-3 py-2">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            {center.name}
          </h3>
          <div className="mt-2">
          <div className="text-lg font-semibold text-gray-800 dark:text-white">Layout: {center.layout}</div>
           <div className="text-lg font-semibold text-gray-800 dark:text-white">Line: {center.line}</div>
            <div className="text-lg font-semibold text-gray-800 dark:text-white">Latitude: {center.latitude}</div>
            <div className="text-lg font-semibold text-gray-800 dark:text-white">Longitude: {center.longitude}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CenterCard;
