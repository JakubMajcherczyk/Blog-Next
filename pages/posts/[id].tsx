import { useRouter } from "next/router";

import posts from "../../public/posts.json";

export default function Post() {
  const router = useRouter();
  const { id } = router.query;
  interface PostType {
    id: string;
    title: string;
    date: string;
    description: string;
  }

  const post: PostType = posts.find((post) => post.id === id) || {
    id: "",
    title: "",
    date: "",
    description: "",
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
        {post.title}
      </h1>
      <p className="text-gray-700 dark:text-gray-400">{post.date}</p>
      <p className="text-gray-700 dark:text-gray-400">{post.description}</p>
    </div>
  );
}
