
import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import MainLayout from "../layouts/MainLayout";
import { Input } from "@/components/ui/input";
import PostGrid from "../components/PostGrid";
import { profilePosts } from "../utils/dummyData";

const Explore = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Simulate API loading
    const loadExplore = async () => {
      setLoading(true);
      // Simulate network request
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Duplicate posts to have more content
      const allPosts = [...profilePosts, ...profilePosts].map((post, index) => ({
        ...post,
        id: `explore${index}`,
      }));
      
      setPosts(allPosts);
      setLoading(false);
    };

    loadExplore();
  }, []);

  return (
    <MainLayout>
      <div className="py-6">
        <div className="mb-6 relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            <Search size={18} />
          </div>
          <Input
            type="text"
            placeholder="Search"
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {loading ? (
          <div className="grid grid-cols-3 gap-1 md:gap-4 animate-pulse">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="aspect-square bg-muted rounded"></div>
            ))}
          </div>
        ) : (
          <PostGrid posts={posts} />
        )}
      </div>
    </MainLayout>
  );
};

export default Explore;
