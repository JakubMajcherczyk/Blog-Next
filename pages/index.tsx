`use client`;
import PostCard from "../components/PostCard";
import posts from "../public/posts.json";

export default function Home() {
  return (
    <div className="flex flex-wrap justify-between">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          description={post.description}
        />
      ))}
    </div>
  );
}
