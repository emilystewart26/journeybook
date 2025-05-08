"use client"; 

import React, { useState, useEffect } from 'react';

export default function BeenButton({ post }) {
  // Initialize the state
  const [likesBeen, setLikesBeen] = useState(post.likesBeen || 0);

  // This useEffect will run only on the client side to fetch stored likes from localStorage
  useEffect(() => {
    // Fetch the stored likes from localStorage
    const storedLikesBeen = localStorage.getItem(post.likesBeen);

    // If stored likes exist, update the state
    if (storedLikesBeen) {
      setLikesBeen(JSON.parse(storedLikesBeen));
    }
  }, [post.id]);

  // Handle the reaction for "I've already been"
  const handleBeen = () => {
    setLikesBeen((prevLikes) => {
      const newLikes = prevLikes + 1;

      // Save the updated likes to localStorage
      localStorage.setItem(post.likesBeen, JSON.stringify(newLikes));

      return newLikes;
    });
  };

  return (
    <div className="flex align-left items-center my-2">
      <div className="like-button" onClick={handleBeen}>✓ I've been here </div>
      <div className="px-2">{likesBeen}</div>
    </div>
  );
}