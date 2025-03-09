
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react";
import Avatar from "./Avatar";
import { likePost } from "../services/api";

interface PostProps {
  _id: string;
  user: {
    id: string;
    username: string;
    avatar: string;
  };
  image: string;
  caption: string;
  likes: number;
  comments: number;
  timestamp: string;
  likedBy?: string[];
}

const Post = ({ _id, user, image, caption, likes, comments, timestamp, likedBy = [] }: PostProps) => {
  const queryClient = useQueryClient();
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // In a real app, this would come from authentication
  const currentUserId = "123";
  const [liked, setLiked] = useState(likedBy.includes(currentUserId));
  const [saved, setSaved] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const likeMutation = useMutation({
    mutationFn: () => likePost(_id, currentUserId),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      // Update the post in the cache
      queryClient.setQueryData(['post', _id], data.data);
    }
  });

  const handleLike = () => {
    if (liked) {
      setLikeCount((prev) => prev - 1);
    } else {
      setLikeCount((prev) => prev + 1);
    }
    setLiked(!liked);
    
    // Call the API to update the like status
    likeMutation.mutate();
  };

  const formattedDate = new Date(timestamp).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
  });

  return (
    <div className="rounded-xl border bg-card animate-slide-up shadow-sm mb-6">
      <div className="p-4 flex items-center justify-between">
        <Link to={`/profile/${user.id}`} className="flex items-center gap-3">
          <Avatar src={user.avatar} alt={user.username} size="sm" />
          <span className="font-medium">{user.username}</span>
        </Link>
        <button className="text-muted-foreground">
          <MoreHorizontal size={20} />
        </button>
      </div>

      <div className="relative aspect-square overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-muted animate-pulse"></div>
        )}
        <img
          src={image}
          alt={caption}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-4">
            <button onClick={handleLike} className="focus:outline-none">
              <Heart
                size={24}
                className={`transition-colors ${
                  liked ? "fill-red-500 text-red-500" : "text-foreground"
                }`}
              />
            </button>
            <button className="focus:outline-none">
              <MessageCircle size={24} />
            </button>
            <button className="focus:outline-none">
              <Send size={24} />
            </button>
          </div>
          <button onClick={() => setSaved(!saved)} className="focus:outline-none">
            <Bookmark
              size={24}
              className={saved ? "fill-primary text-primary" : ""}
            />
          </button>
        </div>

        <div className="font-medium mb-2">{likeCount.toLocaleString()} likes</div>

        <div className="mb-2">
          <Link to={`/profile/${user.id}`} className="font-medium mr-2">
            {user.username}
          </Link>
          <span>{caption}</span>
        </div>

        {comments > 0 && (
          <Link
            to={`/post/${_id}`}
            className="text-muted-foreground text-sm block mb-2"
          >
            View all {comments} comments
          </Link>
        )}

        <div className="text-muted-foreground text-xs">{formattedDate}</div>
      </div>
    </div>
  );
};

export default Post;
