`use client`;
import { Button, Card } from "flowbite-react";

interface PostCardProps {
  id: string;
  title: string;
  date: string;
  description: string;
}

const PostCard: React.FC<PostCardProps> = ({
  id,
  title,
  date,
  description,
}) => {
  const words = description.split(" ");
  const firstTwelveWords = words.slice(0, 12).join(" ");
  const displayDescription =
    words.length > 12 ? firstTwelveWords + "..." : firstTwelveWords;

  return (
    <Card className="max-w-sm gap-2 h-64">
      <div className="flex justify-between items-center">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="text-xl font-extralight tracking-tight text-gray-900 dark:text-white">
          {date}
        </p>
      </div>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {displayDescription}
      </p>
      <Button color="blue" href={`/posts/${id}`}>
        Read more
        <svg
          className="-mr-1 ml-2 h-4 w-4"
          fill="white"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
    </Card>
  );
};

export default PostCard;
