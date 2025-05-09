import SocialCard from '../components/SocialCard'; 
 // if page.js is inside 'src/app'


 export default function Home() {
  const posts = [
    { id: 1, username: 'Alice', text: 'This place looks amazing!', likes: 0 },
    { id: 2, username: 'Bob', text: 'Had an unforgettable experience here!', likes: 5 },
    { id: 3, username: 'Scott', text: 'Exploring new horizons!', likes: 10 },
  ];

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
