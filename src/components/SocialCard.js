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

  return (
    <div>
      <h3 className="text-lg font-semibold">{post.username}</h3>
      <p>{post.text}</p>
      {post.image && (
        <img
          src={post.image}
          alt="Post"
          className="w-full h-auto rounded shadow"
        />
      )}

      {/* I want to go container */}
      <div className={`p-4 rounded transition ${wantSelected ? 'bg-green-200' : 'bg-red-200'}`}>
        <p className="mb-4">❤️ I want to go Likes: {likesWantToGo}</p>
        <button
          onClick={handleWantToGo}
          className="like-button"
        >
          {wantSelected ? "I've been" : "I want to go"}
        </button>
      </div>

      {/* I've been container */}
      <div className={`p-4 rounded transition ${beenSelected ? 'bg-red-200' : 'bg-green-200'}`}>
        <p className="mb-4">✅ I've been Likes: {likesBeen}</p>
        <button
          onClick={handleBeen}
          className="button"
        >
          {beenSelected ? "I want to go" : "I've been"}
        </button>
      </div>
    </div>
  );
}
