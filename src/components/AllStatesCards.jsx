import React from "react";
import StateCard from "./StateCard";

const AllStatesCards = ({ destination }) => {
  return (
    <div  className="mx-auto max-w-full px-4 py-6 pt-20 dark:bg-gray-800 lg:max-w-full lg:px-8">
      <h2 className="text-center text-xl text-gray-900 dark:text-white">
        Explore all states
      </h2>
      <p className="mt-2 text-center text-gray-600 dark:text-white">
        Collecton of great places to tour in each states.
      </p>
      <div className="mt-6 grid gap-6 rounded-lg p-4 dark:bg-gray-900 lg:grid-cols-2 xl:grid-cols-3">
        {destination.map((destination) => (
          <StateCard destination={destination} key={destination.id} />
        ))}
      </div>
    </div>
  );
};

export default AllStatesCards;
