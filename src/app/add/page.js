"use client";
import React, { useState } from "react";

const Page = () => {
  const [postObject, setPostObject] = useState({
    name: "",
    location: "",
    description: "",
  });

  // Handling form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPostObject((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //Handling form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setPosts((prev) => [postObject, ...prev]);
    setPostObject({ name: "", location: "", description: "" });
  };
    

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Add a location</h1>
      <form onSubmit={handleSubmit}>
        {["name", "location", "description"].map((field) => (
          <div key={field} className="md:flex mb-6">
            <div className="md:w-1/3">
              <label className="text-gray-700 font-bold pr-4 capitalize">
                {field}
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 border-2 border-gray-200 w-full p-2"
                name={field}
                placeholder={`Type your ${field} here`}
                value={postObject[field]}
                onChange={handleInputChange}
              />
            </div>
          </div>
        ))}
        <button
          type="submit"
          className="cursor-pointer bg-blue-500 p-4 text-white"
        >
          Post
        </button>
      </form>

      <div className="mt-8">
        {posts.map((post, index) => (
          <div key={index} className="mb-4 p-4 border rounded shadow">
            <h2 className="text-xl font-semibold">{post.name}</h2>
            <p className="text-gray-600">{post.location}</p>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
