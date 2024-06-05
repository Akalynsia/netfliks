import React from "react";

const App = () => {
  return (
    <div
      className="bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <main className="w-[1440px] h-[900px] bg-[rgba(0,0,0,0.3)] flex flex-col justify-center items-center gap-2">
        <h1 className="text-white font-[400] text-[50px] font-bowlby mt-2 mb-2">
          NET<span className="text-[rgba(255,0,0,1)]">FLIX</span>
        </h1>
        <em className="font-[400] font-sorts-mill-goudy text-[23px] text-white mb-2">
          Thank you for signing up to Netflix. Tell me more about yourself.
        </em>
        <div className="w-[500px] h-[750px] bg-[rgba(0,0,0,0.8)] flex flex-col justify-center items-start">
          <form className="p-8 shadow-md w-full max-w-lg">
            <h1 className="text-2xl font-bold mb-6">Survey Form</h1>

            {/* Name */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full mt-2 p-2 border border-gray-300 "
                placeholder="Enter your name"
              />
            </div>

            {/* Age */}
            <div className="mb-4">
              <label htmlFor="age" className="block text-white">
                Age
              </label>
              <input
                type="number"
                id="age"
                className="w-full mt-2 p-2 border border-gray-300 "
                placeholder="Enter your age"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full mt-2 p-2 border border-gray-300 "
                placeholder="Enter your email"
              />
            </div>

            {/* Content Type */}
            <div className="mb-4">
              <label htmlFor="contentType" className="block text-white">
                Content Type
              </label>
              <select
                id="contentType"
                className="w-full mt-2 p-2 border border-gray-300 "
              >
                <option value="">Select content type</option>
                <option value="blog">Blog</option>
                <option value="video">Video</option>
                <option value="podcast">Podcast</option>
              </select>
            </div>

            {/* Movie Type */}
            <div className="mb-4 text-white">
              <label className="block text-white">Movie Type</label>
              <div className="mt-2">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    value="comedy"
                  />
                  <span className="ml-2">Comedy</span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    value="action"
                  />
                  <span className="ml-2">Action</span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    value="romance"
                  />
                  <span className="ml-2">Romance</span>
                </label>
              </div>
            </div>

            {/* Gender */}
            <div className="mb-4">
              <label className="block text-white">Gender</label>
              <div className="mt-2 text-white">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    name="gender"
                    value="male"
                  />
                  <span className="ml-2">Male</span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    className="form-radio"
                    name="gender"
                    value="female"
                  />
                  <span className="ml-2">Female</span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    className="form-radio"
                    name="gender"
                    value="other"
                  />
                  <span className="ml-2">Other</span>
                </label>
              </div>
            </div>

            {/* Feedback */}
            <div className="mb-4">
              <label htmlFor="feedback" className="block text-white">
                Feedback
              </label>
              <textarea
                id="feedback"
                className="w-full mt-2 p-2 border border-gray-300 "
                placeholder="Enter your feedback"
                rows="4"
              ></textarea>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default App;
