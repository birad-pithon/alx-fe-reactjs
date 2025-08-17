function UserProfile() {
  return (
    <div className="bg-gray-100 p-8 max-w-sm sm:max-w-md lg:max-w-lg mx-auto my-20 rounded-lg shadow-lg text-center">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="w-36 h-36 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full mx-auto"
      />
      <h1 className="text-xl sm:text-2xl lg:text-3xl text-blue-800 my-4">
        John Doe
      </h1>
      <p className="text-base sm:text-lg lg:text-xl text-gray-600">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
