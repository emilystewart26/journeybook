"use client";

import SocialCard from '../components/SocialCard'; 
 // if page.js is inside 'src/app'


export default function Home() {
    localStorage.setItem("post-1", JSON.stringify({
        id: 1, // Unique ID for the post
        username: 'Alice',
        text: 'This place looks amazing!',
        likesWantToGo: 0,
        hasWant: false,
        likesBeen: 0,
        hasBeen: false
    }));
  
    return (
      <main>
        <h1>JourneyBook</h1>
        <SocialCard postID={1} />
      </main>
    );
}
