import { useRouter } from "next/router";
import Link from "next/link";

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

  const paragraphs = post.description.split("\n").filter((p) => p);

  return (
    <div className="flex">
      <div className="w-3/4 p-8">
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {post.title}
          </h2>
          <p className="text-gray-700 dark:text-gray-400 mb-2">{post.date}</p>
        </div>
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-gray-700 dark:text-gray-400 text-clip mb-4"
          >
            {paragraph}
          </p>
        ))}
      </div>
      <div className="sticky top-0 h-screen w-1/4 bg-gray-200 dark:bg-gray-800 p-4 overflow-auto">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Inne posty
        </h3>
        <div className="flex flex-col justify-around items-start gap-6">
          {posts.map((post) => (
            <Link
              href={`/posts/${post.id}`}
              key={post.id}
              className="cursor-pointer block bg-white dark:bg-gray-700 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              {post.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
