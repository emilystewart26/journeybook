"use client";

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import SocialCard from "src/components/SocialCard";

const Page = () => {
  // State for the current form inputs
  const [postObject, setPostObject] = useState({
    username: "",
    location: "",
    text: "",
    image: null
  });
  const [previewImage, setPreviewImage] = useState(null);

  // State for all submitted posts
  const [posts, setPosts] = useState([]);

  // Update form input values
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPostObject((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id: uuidv4(), // Unique ID for localStorage tracking
      username: postObject.username,
      text: `Went to ${postObject.location}: ${postObject.text}`,
    };

    setPosts((prev) => [newPost, ...prev]);

    // Reset the form
    setPostObject({
      username: "",
      location: "",
      text: "",
    });
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Share your experience by filling out the form below:</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { name: "username", placeholder: "Type your name here" },
          { name: "location", placeholder: "Type where you went here" },
          { name: "text", placeholder: "Type a description here" },
        ].map(({ name, placeholder }) => (
          <div key={name} className="flex flex-col">
            <label className="text-gray-700 font-bold capitalize mb-1">
              {name}
            </label>
            <input
              className="bg-gray-200 border-2 border-gray-300 rounded p-2"
              name={name}
              placeholder={placeholder}
              value={postObject[name]}
              onChange={handleInputChange}
              required
            />
          </div>
        ))}

<div className="flex flex-col mb-4">
  <label className="text-gray-700 font-bold mb-1">Upload an Image</label>
  <input
    className="bg-gray-200 border-2 border-gray-300 rounded p-2"
    type="file"
    accept="image/*"
    onChange={(e) => {
      const file = e.target.files[0];
      if (file) {
        setPostObject((prev) => ({ ...prev, image: file }));
        setPreviewImage(URL.createObjectURL(file));
      }
    }}
  />
  {previewImage && (
    <img
      src={previewImage}
      alt="Preview"
      className="mt-2 w-48 h-auto rounded shadow"
    />
  )}
</div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Post
        </button>
      </form>

      <div className="mt-10 space-y-6">
        {posts.map((post) => (
          <SocialCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Page;