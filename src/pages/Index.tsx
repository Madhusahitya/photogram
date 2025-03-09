
import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import Post from "../components/Post";
import { feedPosts, users } from "../utils/dummyData";
import { toast } from "sonner";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulate API loading
    const loadPosts = async () => {
      setLoading(true);
      // Simulate network request
      await new Promise(resolve => setTimeout(resolve, 1000));
      setPosts(feedPosts);
      setLoading(false);
      toast.success("Feed updated", {
        description: "Latest posts have been loaded",
      });
    };

    loadPosts();
  }, []);

  return (
    <MainLayout>
      <div className="py-6">
        {/* Stories section */}
        <div className="mb-6 overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 pb-2">
            {users.map((user) => (
              <div key={user.id} className="flex flex-col items-center gap-1 w-20">
                <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-primary p-0.5 bg-white">
                  <img
                    src={user.avatar}
                    alt={user.username}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <span className="text-xs truncate w-full text-center">
                  {user.username}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Posts feed */}
        <div className="space-y-6">
          {loading ? (
            // Skeleton loading
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-muted"></div>
                  <div className="h-4 w-24 bg-muted rounded"></div>
                </div>
                <div className="aspect-square bg-muted rounded-md mb-4"></div>
                <div className="h-4 w-32 bg-muted rounded mb-2"></div>
                <div className="h-4 w-64 bg-muted rounded"></div>
              </div>
            ))
          ) : (
            posts.map((post) => <Post key={post.id} {...post} />)
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
