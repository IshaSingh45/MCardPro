import StateCard from "./StateCard";
import allDestinations from "../data/allDestinations";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "./General/Button";

const Home = () => {
  const [tour, SetTour] = useState("");
  const [state, SetState] = useState("");

  const onSubmitTour = (e) => {
    e.preventDefault();
    SetTour(tour);
  };

  // arrays of all tours array

  let allTourCenterArr = [];

  for (let i = 0; i < allDestinations.length; i++) {
    allTourCenterArr.push(allDestinations[i].tourCenter);
  }

  console.log("allTourCenterArr", allTourCenterArr, typeof allTourCenterArr);

  // arrays of all tours object
  const realTourArray = [];

  for (let i = 0; i < allTourCenterArr.length; i++) {
    realTourArray.push(
      allTourCenterArr[i].reduce(
        (obj, item) => ({
            id: item.id,
            name: item.name, 
            line: item.line, 
            layout: item.layout, 
            longitude: item.longitude, 
            latitude: item.latitude,
            imageUrl:item.imageUrl
        }),
        {}
      )
    );
  }
  console.log("realTourArray", realTourArray);

  // if (realTourArray.length) {
  //   let shuffleArr = shuffle(realTourArray);

  //   console.log("shuffleArr", shuffleArr);
  // }

  let shuffledArr = [];
  
  // if (realTourArray.length) {
    shuffledArr = realTourArray.sort(() => 0.5 - Math.random()).slice(0, 6);
    console.log("shuffledArr", shuffledArr);
  // }

  let filteredTourCenterArr = [];

  // add all tour center that satisfy the filter condition
  for (let i = 0; i < allDestinations.length; i++) {
    filteredTourCenterArr.push(
      allDestinations[i].tourCenter.filter((item) =>
        item.name.toLowerCase().includes(tour.toLowerCase())
      )
    );
  }

  console.log("filteredTourCenterArr", filteredTourCenterArr);

  // contained tour center arr

  // const containedMainFilterdTourArr = filteredTourCenterArr.filter(
  //   (e) => e.length
  // );

  // console.log("containedMainFilterdTourArr", containedMainFilterdTourArr);

  const mainFilterdTourArr = [];

  // convert array of arrays to array of objects
  if (tour) {
    for (let i = 0; i < filteredTourCenterArr.length; i++) {
      mainFilterdTourArr.push(
        filteredTourCenterArr[i].reduce(
          (obj, item) => ({
            id: item.id,
            name: item.name, 
            line: item.line, 
            layout: item.layout, 
            longitude: item.longitude, 
            latitude: item.latitude,
            imageUrl:item.imageUrl
          }),
          {}
        )
      );
    }
  }

  console.log(
    "mainFilterdTourArr",
    mainFilterdTourArr,
    typeof mainFilterdTourArr
  );

  // remove empty array
  let finalArray = mainFilterdTourArr.filter(
    (value) => Object.keys(value).length !== 0
  );

  console.log("finalArray", finalArray, typeof finalArray);

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <>
      <div className="grid bg-gray-100 mx-auto pt-16 lg:pt-20 lg:pb-8 dark:bg-gray-700 lg:grid-cols-2 2xl:grid-cols-5 content-start">
        <div className="w-[80%] mx-auto max-w-md px-4 py-4 sm:max-w-xl lg:max-w-full lg:px-12 lg:py-0 xl:mr-0 2xl:col-span-2">
          <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white sm:mt-4 lg:mt-4  ">
            Tour with metro.
            <br />
            <span className="text-indigo-500 dark:text-indigo-600">
              Make good travelling memories.
            </span>
          </h1>
          <p className="my-4 md:mt-8 text-gray-600 dark:text-white sm:text-xl">
            Whether it's a place of interest, value, history or cultural
            significance - Tourcation saves your seat in the next tour to your
            favorite tourist attraction.
          </p>
          <img
            src="/images/small.jpg"
            alt="Metro"
            className="my-2 h-64 w-full rounded-xl object-center shadow-xl sm:mt-8 sm:h-64 sm:object-cover lg:hidden"
          />
          <div className="mt-8 md:mt-32 inline-block overflow-hidden space-x-1">
            <a
              href="/select-journey-type"
              className="focus:outline-none inline-block transform rounded-lg bg-indigo-500 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-indigo-400 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 focus:ring-offset-2 active:bg-indigo-600 dark:bg-indigo-600  sm:text-base "
            >
              Plan Journey
            </a>
            {/* <a
              href="/"
              className="focus:outline-none inline-block rounded-lg bg-gray-300 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-gray-800 hover:bg-gray-200 focus:ring focus:ring-gray-300 focus:ring-opacity-50 focus:ring-offset-2 active:bg-gray-400 sm:text-base"
            >
              Know more
            </a> */}
          </div>
        </div>

        <div className="relative w-[80%] m-3 hidden lg:block 2xl:col-span-3">
          <img
            src="/images/big.jpg"
            alt="People going in the bus"
            className="absolute inset-0 h-full w-full rounded-xl object-cover object-center"
          />
        </div>
      </div>

      <div className="relative w-[80%] m-3 hidden lg:block 2xl:col-span-3">
      <span style={{
                                                                                        marginLeft: 600
                                                                                }}className="text-indigo-500 dark:text-indigo-600">
              Our Objective
            </span>
            <p  style={{
                                                                                        marginLeft: 230
                                                                                }}>The objective of introducing a multi-user metro card system is to enhance convenience, efficiency, and user experience in urban transit systems. 
                                                                                By allowing multiple users to share a single card, the system aims to streamline the entry and exit process, minimize queues, and reduce waiting times. 
Additionally, the implementation of multi-user metro cards aims to optimize costs for both commuters and transit authorities by eliminating the production and distribution of individual tickets. </p>
        </div>

      <div className="mx-auto w-[80%] px-8 py-20 dark:bg-gray-800 lg:px-8">
        {/* <h2 className="text-center text-2xl font-semibold tracking-wider text-gray-900 dark:text-white">
          Find Line Route <br />
          (by Line)
        </h2>
        <form className="w-[80%] mx-auto text-center">
          <input
            className="rounded-lg bg-gray-500 p-2 w-[18rem] mx-auto my-5"
            type="text"
            onChange={(e) => SetState(e.target.value)}
          />
        </form> */}
        <div className="mt-6 flex justify-center mx-auto">
          {state
            ? allDestinations
                .filter(
                  (item) => item.line.toLowerCase() === line.toLowerCase()
                )
                .map((eachDestination) => (
                  <StateCard
                    className="w-12 mx-auto"
                    destination={eachDestination}
                    key={eachDestination.id}
                  />
                ))
            : ""}
        </div>
        <h2 className="text-center text-xl my-5 font-semibold tracking-wider text-gray-900 dark:text-white">
          All Lines
        </h2>
        <div className="mt-6 grid gap-6 rounded-md lg:grid-cols-2 xl:grid-cols-3">
          {allDestinations
            .filter((item, index) => index < 6)
            .map((eachDestination) => (
              <StateCard
                destination={eachDestination}
                key={eachDestination.id}
              />
            ))}
        </div>
        <div className="text-center">
          <Link to="/same-source-diff-dest">
            <Button
              type="submit"
              text="Future Scope"
              classes="transform mt-10 px-6 py-2 uppercase tracking-widest text-white"
              onClick={() => window.scrollTo(0, 0)}
            />
          </Link>
        </div>
      </div>

      {/* <div className="mx-auto max-w-full px-8 py-40 bg-gray-100 dark:bg-gray-700 lg:max-w-full lg:px-8"> */}
        {/* <h2 className="mb-5 text-center text-2xl font-semibold tracking-wider text-gray-900 dark:text-white">
          Find Stations <br />
        </h2>
        <form className="w-[80%] mx-auto text-center" onSubmit={onSubmitTour}>
          <input
            className="rounded-lg bg-gray-500 p-2 w-[18rem] mx-auto my-5"
            type="text"
            placeholder="type your favourite tourism attraction"
            onChange={(e) => SetTour(e.target.value)}
          />
        </form> */}

        {/* <div className="mt-6 grid gap-8 w-[80%] mx-auto lg:grid-cols-2">
          {finalArray?.map((item) => (
            <CenterCard line={item.line} center={item} key={item.id} />
          ))}
        </div> */}

        {/* <h2 className="text-center text-xl my-5 font-semibold tracking-wider text-gray-900 dark:text-white">
          All Metro Stations
        </h2>
          <div className="mt-6 grid gap-8 w-[80%] mx-auto lg:grid-cols-2">
            {shuffledArr?.map((item) => (
              <CenterCard line={item.line} center={item} />
            ))}
          </div>
        <div className="text-center">
          <Link to="/all-states">
            <Button
              type="submit"
              text="See all states"
              classes="transform mt-10 px-6 py-2 uppercase tracking-widest text-white"
              onClick={() => window.scrollTo(0, 0)}
            />
          </Link>
        </div> */}
      {/* </div> */}
    </>
  );
};
export default Home;
