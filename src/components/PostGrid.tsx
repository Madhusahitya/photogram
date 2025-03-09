
import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, MessageCircle } from "lucide-react";

interface PostGridItemProps {
  id: string;
  image: string;
  likes: number;
  comments: number;
}

const PostGrid = ({ posts }: { posts: PostGridItemProps[] }) => {
  return (
    <div className="grid grid-cols-3 gap-1 md:gap-4">
      {posts.map((post) => (
        <PostGridItem key={post.id} {...post} />
      ))}
    </div>
  );
};

const PostGridItem = ({ id, image, likes, comments }: PostGridItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link
      to={`/post/${id}`}
      className="relative aspect-square group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!imageLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse"></div>
      )}
      <img
        src={image}
        alt=""
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setImageLoaded(true)}
      />

      <div
        className={`absolute inset-0 bg-black/50 flex items-center justify-center gap-4 transition-opacity duration-200 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex items-center text-white">
          <Heart size={20} className="fill-white mr-2" />
          <span>{likes}</span>
        </div>
        <div className="flex items-center text-white">
          <MessageCircle size={20} className="fill-white mr-2" />
          <span>{comments}</span>
        </div>
      </div>
    </Link>
  );
};

export default PostGrid;
