"use client"
import SocialCard from '../components/SocialCard'; 
import { useState, useEffect } from "react"
 // if page.js is inside 'src/app'

 export default function Home() {

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPosts = () => {
      try {
        const storedPosts = localStorage.getItem("posts");
        if (storedPosts) {
          setPosts(JSON.parse(storedPosts));
        }
        setError(null);
      } catch (error) {
        console.error('Error loading todos:', error);
        setError('Failed to load todos. Please try refreshing the page.');
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);

  return (
         <main className="min-h-screen bg-light-sand p-6">
          <header className="text-center py-8">
            <h1 className="text-4xl font-extrabold">JourneyBook</h1>
            <p className="text-xl mt-2">Share your travel experiences with the world</p>
          </header>

          <section className="max-w-3xl mx-auto py-8 px-4">
            <div className="flex flex-col items-center gap-8">
            {posts.map((post) => (
              <div key={post.id} className="mb-6">
                <SocialCard post={post} />
              </div>
            ))}
            </div>
          </section>
    </main>
  );
}
