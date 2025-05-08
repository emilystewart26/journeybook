import SocialCard from '../components/SocialCard'; 
import Navbar from '../components/Navbar';

export default function Home() {
  
  const post = {
    id: 1, // Unique ID for the post
    username: 'Alice',
    text: 'This place looks amazing!',
    likes: 0, // Initial likes count
  };

  return (
    <>
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">JourneyBook</h1>
        <div className="flex justify-center">
          <SocialCard post={post} />
        </div>
      </main>
    </>
  );
}
