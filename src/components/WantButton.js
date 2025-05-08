"use client"; 

import React, { useState, useEffect } from 'react';

export default function WantButton({ post }) {
  // Initialize the state
  const [likesWantToGo, setLikesWantToGo] = useState(post.likesWantToGo || 0);

  // This useEffect will run only on the client side to fetch stored likes from localStorage
  useEffect(() => {
    // Fetch the stored likes from localStorage
    const storedLikesWantToGo = localStorage.getItem(post.likesWantToGo);

    // If stored likes exist, update the state
    if (storedLikesWantToGo) {
      setLikesWantToGo(JSON.parse(storedLikesWantToGo));
    }
  }, [post.id]);

  // Handle the reaction for "I want to go"
  const handleWantToGo = () => {
    setLikesWantToGo((prevLikes) => {
      const newLikes = prevLikes + 1;

      // Save the updated likes to localStorage
      localStorage.setItem(post.likesWantToGo, JSON.stringify(newLikes));

      return newLikes;
    });
  };

  return (
    <div className="flex align-left items-center my-2">
      <div className="like-button" onClick={handleWantToGo}>♥ I want to go </div>
      <div className="px-2">{likesWantToGo}</div>
    </div>
  );
}