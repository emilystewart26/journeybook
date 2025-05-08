'use client'; 

import { useState, useEffect } from 'react';

export default function SocialCard({ post }) {
  // Initialize the state for likes for both buttons
  const [likesWantToGo, setLikesWantToGo] = useState(post.likesWantToGo || 0);  
  const [likesBeen, setLikesBeen] = useState(post.likesBeen || 0);

  // This useEffect will run only on the client side to fetch stored likes from localStorage
  useEffect(() => {
    // Fetch the stored likes from localStorage
    const storedLikesWantToGo = localStorage.getItem(post.id + '_likes_wantToGo');
    const storedLikesBeen = localStorage.getItem(post.id + '_likes_been');

    // If stored likes exist, update the state
    if (storedLikesWantToGo) {
      setLikesWantToGo(JSON.parse(storedLikesWantToGo));
    }
    if (storedLikesBeen) {
      setLikesBeen(JSON.parse(storedLikesBeen));
    }
  }, [post.id]);

  // Handle the reaction for "I want to go"
  const handleWantToGo = () => {
    setLikesWantToGo((prevLikes) => {
      const newLikes = prevLikes + 1;

      // Save the updated likes to localStorage
      localStorage.setItem(post.id + '_likes_wantToGo', JSON.stringify(newLikes));

      return newLikes;
    });
  };

  // Handle the reaction for "I've been"
  const handleBeen = () => {
    setLikesBeen((prevLikes) => {
      const newLikes = prevLikes + 1;

      // Save the updated likes to localStorage
      localStorage.setItem(post.id + '_likes_been', JSON.stringify(newLikes));

      return newLikes;
    });
  };

  return (
    <div>
      <h3>{post.username}</h3>
      <p>{post.text}</p>

      <p>❤️ "I want to go" Likes: {likesWantToGo}</p>
      <button className='like-button' onClick={handleWantToGo}>
        I want to go
      </button>

      <p>✅ "I've been" Likes: {likesBeen}</p>
      <button className='like-button' onClick={handleBeen}>
        I've been
      </button>
    </div>
  );
}
