'use client';

import { useState, useEffect } from 'react';

export default function SocialCard({ post }) {
  const [likesWantToGo, setLikesWantToGo] = useState(post.likesWantToGo || 0);
  const [likesBeen, setLikesBeen] = useState(post.likesBeen || 0);

  const [wantSelected, setWantSelected] = useState(false);
  const [beenSelected, setBeenSelected] = useState(false);

  useEffect(() => {
    const storedWant = localStorage.getItem(post.id + '_likes_wantToGo');
    const storedBeen = localStorage.getItem(post.id + '_likes_been');
    const storedWantSelected = localStorage.getItem(post.id + '_want_selected');
    const storedBeenSelected = localStorage.getItem(post.id + '_been_selected');

    if (storedWant) setLikesWantToGo(JSON.parse(storedWant));
    if (storedBeen) setLikesBeen(JSON.parse(storedBeen));
    if (storedWantSelected) setWantSelected(JSON.parse(storedWantSelected));
    if (storedBeenSelected) setBeenSelected(JSON.parse(storedBeenSelected));
  }, [post.id]);

  const handleWantToGo = () => {
    const newState = !wantSelected;
    setWantSelected(newState);
    localStorage.setItem(post.id + '_want_selected', JSON.stringify(newState));

    setLikesWantToGo((prev) => {
      const updated = newState ? prev + 1 : prev - 1;
      localStorage.setItem(post.id + '_likes_wantToGo', JSON.stringify(updated));
      return updated;
    });
  };

  const handleBeen = () => {
    const newState = !beenSelected;
    setBeenSelected(newState);
    localStorage.setItem(post.id + '_been_selected', JSON.stringify(newState));

    setLikesBeen((prev) => {
      const updated = newState ? prev + 1 : prev - 1;
      localStorage.setItem(post.id + '_likes_been', JSON.stringify(updated));
      return updated;
    });
  };

  const handleDate = (date) => {
    return (date.toLocaleDateString("en-GB", {
        year: "numeric",
        month: "long",
        day: "numeric"
      }) + " at " + date.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit"
      }));
  };

  return (
    <div className="card">
      <h3 className="card-header">{post.username} - {post.location ? post.location : "Location"}</h3>
      <p className="text-sm text-gray-400 mb-2">{handleDate((new Date(post.date ? post.date : 0)))}</p>
      <p>{post.text}</p>
      {post.image && (
        <img
          src={post.image}
          alt="Post"
          className="w-full h-auto rounded shadow p-6"
        />
      )}

        <div className="flex align-left items-center my-2">
            {/* I want to go button */}
            <div className="like-button" onClick={handleWantToGo}>♥ I want to go </div>
            <div className="px-2">{likesWantToGo}</div>
            
            {/* I've been button */}
            <div className="button" onClick={handleBeen}>✓ I've been here </div>
            <div className="px-2">{likesBeen}</div>
        </div>
    </div>
  );
}
