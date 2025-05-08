import SocialCard from '../components/SocialCard'; 
 // if page.js is inside 'src/app'


export default function Home() {
  const post = {
    id: 1, // Unique ID for the post
    username: 'Alice',
    text: 'This place looks amazing!',
    likes: 0, // Initial likes count
  };

  return (
    <main>
      <h1>JourneyBook</h1>
      <SocialCard post={post} />
    </main>
  );
}
