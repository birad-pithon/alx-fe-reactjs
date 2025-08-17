function UserProfile() {
  return (
    <div className="bg-gray-100 sm:p-4 md:p-8 max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full mx-auto transform hover:scale-110 transition-transform duration-300 ease-in-out"
      />
      <h1 className="text-lg md:text-xl text-blue-800 my-4 hover:text-blue-500 transition-colors duration-300">
        John Doe
      </h1>
      <p className="text-sm md:text-base text-gray-600">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
