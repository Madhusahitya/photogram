import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Settings, Grid, Bookmark, TagIcon } from "lucide-react";
import MainLayout from "../layouts/MainLayout";
import Avatar from "../components/Avatar";
import PostGrid from "../components/PostGrid";
import { fetchCurrentUser, fetchUserPosts } from "../services/api";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const Profile = () => {
  const { data: user, isLoading: userLoading } = useQuery({
    queryKey: ['currentUser'],
    queryFn: async () => {
      const response = await fetchCurrentUser();
      return response.data;
    }
  });

  const { data: posts, isLoading: postsLoading } = useQuery({
    queryKey: ['userPosts', user?._id],
    queryFn: async () => {
      if (!user?._id) return [];
      const response = await fetchUserPosts(user._id);
      return response.data;
    },
    enabled: !!user?._id
  });

  const loading = userLoading || postsLoading;

  if (loading) {
    return (
      <MainLayout>
        <div className="py-8 animate-pulse">
          <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
            <div className="h-24 w-24 rounded-full bg-muted"></div>
            <div className="flex-1 space-y-4">
              <div className="h-6 w-48 bg-muted rounded"></div>
              <div className="flex gap-8 justify-between md:justify-start">
                <div className="h-4 w-20 bg-muted rounded"></div>
                <div className="h-4 w-20 bg-muted rounded"></div>
                <div className="h-4 w-20 bg-muted rounded"></div>
              </div>
              <div className="h-4 w-full max-w-sm bg-muted rounded"></div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1 md:gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-square bg-muted rounded"></div>
            ))}
          </div>
        </div>
      </MainLayout>
    );
  }

  if (!user) return null;

  return (
    <MainLayout>
      <div className="py-8">
        {/* Profile header */}
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-8">
          <Avatar src={user.avatar} alt={user.username} size="xl" className="md:w-36 md:h-36" />
          
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
              <h1 className="text-xl font-semibold">{user.username}</h1>
              <div className="flex gap-2 justify-center md:justify-start">
                <Button size="sm" className="rounded-lg" variant="outline">
                  Edit Profile
                </Button>
                <Button size="sm" className="rounded-lg" variant="outline">
                  <Settings size={16} />
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-start gap-6 mb-4">
              <div className="text-sm">
                <span className="font-semibold">{user.posts}</span> posts
              </div>
              <div className="text-sm">
                <span className="font-semibold">{user.followers.toLocaleString()}</span> followers
              </div>
              <div className="text-sm">
                <span className="font-semibold">{user.following.toLocaleString()}</span> following
              </div>
            </div>
            
            <div className="mb-2">
              <h2 className="font-semibold">{user.fullName}</h2>
            </div>
            <p className="text-sm whitespace-pre-line">{user.bio}</p>
          </div>
        </div>

        {/* Profile tabs */}
        <Tabs defaultValue="posts" className="w-full">
          <TabsList className="w-full grid grid-cols-3 mb-6">
            <TabsTrigger value="posts" className="flex items-center gap-2">
              <Grid size={16} />
              <span className="hidden sm:inline">Posts</span>
            </TabsTrigger>
            <TabsTrigger value="saved" className="flex items-center gap-2">
              <Bookmark size={16} />
              <span className="hidden sm:inline">Saved</span>
            </TabsTrigger>
            <TabsTrigger value="tagged" className="flex items-center gap-2">
              <TagIcon size={16} />
              <span className="hidden sm:inline">Tagged</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="posts" className="animate-slide-up">
            {posts && <PostGrid posts={posts} />}
          </TabsContent>
          
          <TabsContent value="saved">
            <div className="text-center py-10">
              <h3 className="text-lg font-medium mb-2">No saved posts yet</h3>
              <p className="text-muted-foreground text-sm">
                When you save posts, they'll appear here.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="tagged">
            <div className="text-center py-10">
              <h3 className="text-lg font-medium mb-2">No posts you're tagged in</h3>
              <p className="text-muted-foreground text-sm">
                When people tag you in posts, they'll appear here.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Profile;
