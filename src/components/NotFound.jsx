import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-gray-100 p-24 text-center dark:bg-gray-700 dark:text-white">
      <h2 className="text-2xl font-bold">Ooooops!, we are so sorry. 🙇‍♀️</h2>
      <p className="text-xl font-bold">This page cannot be found.</p>
      <p className="mt-10 text-base font-bold">
        Click
        <Link to="/" className="text-blue-500 underline">
          here
        </Link>
        to go back to the homepage....Thanks!
      </p>
    </div>
  );
};

export default NotFound;
