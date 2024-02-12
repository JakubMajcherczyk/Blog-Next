import PostCard from "../components/PostCard";
import posts from "../public/posts.json";

export default function Home() {
  return (
    <div className="flex flex-col items-center m-6">
      <h2 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
        YOUR ARTICLES
      </h2>
      <div className="flex flex-wrap justify-center content-start m-4 gap-6 max-w-6xl">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            date={post.date}
            description={post.description}
          />
        ))}
      </div>
    </div>
  );
}
