
import { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import Avatar from "../components/Avatar";
import { Button } from "@/components/ui/button";
import { users } from "../utils/dummyData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ActivityItem {
  id: string;
  type: "like" | "follow" | "comment" | "mention";
  user: {
    id: string;
    username: string;
    avatar: string;
  };
  content?: string;
  postImage?: string;
  timestamp: string;
}

const Activity = () => {
  const [loading, setLoading] = useState(true);
  const [activities, setActivities] = useState<ActivityItem[]>([]);

  useEffect(() => {
    // Simulate API loading
    const loadActivity = async () => {
      setLoading(true);
      // Simulate network request
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Generate dummy activity data
      const dummyActivities: ActivityItem[] = [
        {
          id: "act1",
          type: "like",
          user: {
            id: users[1].id,
            username: users[1].username,
            avatar: users[1].avatar
          },
          postImage: "https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=200&auto=format&fit=crop",
          timestamp: "2023-11-15T12:30:00Z"
        },
        {
          id: "act2",
          type: "follow",
          user: {
            id: users[2].id,
            username: users[2].username,
            avatar: users[2].avatar
          },
          timestamp: "2023-11-14T15:45:00Z"
        },
        {
          id: "act3",
          type: "comment",
          user: {
            id: users[3].id,
            username: users[3].username,
            avatar: users[3].avatar
          },
          content: "This photo is amazing! Where was it taken?",
          postImage: "https://images.unsplash.com/photo-1682687982093-4abccc314f14?q=80&w=200&auto=format&fit=crop",
          timestamp: "2023-11-13T09:15:00Z"
        },
        {
          id: "act4",
          type: "mention",
          user: {
            id: users[1].id,
            username: users[1].username,
            avatar: users[1].avatar
          },
          content: "Check out this awesome shot by @janesmith!",
          postImage: "https://images.unsplash.com/photo-1682687981907-170c266da3f0?q=80&w=200&auto=format&fit=crop",
          timestamp: "2023-11-12T18:20:00Z"
        },
        {
          id: "act5",
          type: "like",
          user: {
            id: users[2].id,
            username: users[2].username,
            avatar: users[2].avatar
          },
          postImage: "https://images.unsplash.com/photo-1659535876844-1d9f2701f251?q=80&w=200&auto=format&fit=crop",
          timestamp: "2023-11-11T21:10:00Z"
        }
      ];
      
      setActivities(dummyActivities);
      setLoading(false);
    };

    loadActivity();
  }, []);

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) {
      return "Just now";
    } else if (diffInHours < 24) {
      return `${diffInHours}h ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays}d ago`;
    }
  };

  const renderActivityContent = (activity: ActivityItem) => {
    switch (activity.type) {
      case "like":
        return <span>liked your post.</span>;
      case "follow":
        return <span>started following you.</span>;
      case "comment":
        return (
          <span>
            commented: <span className="text-muted-foreground">{activity.content}</span>
          </span>
        );
      case "mention":
        return (
          <span>
            mentioned you in a comment: <span className="text-muted-foreground">{activity.content}</span>
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <MainLayout>
      <div className="py-6">
        <h1 className="text-2xl font-semibold mb-6">Activity</h1>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full grid grid-cols-3 mb-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="following">Following</TabsTrigger>
            <TabsTrigger value="you">You</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="animate-slide-up">
            {loading ? (
              // Skeleton loading
              Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex items-center gap-4 mb-6 animate-pulse">
                  <div className="h-12 w-12 rounded-full bg-muted"></div>
                  <div className="flex-1">
                    <div className="h-4 w-48 bg-muted rounded mb-2"></div>
                    <div className="h-3 w-24 bg-muted rounded"></div>
                  </div>
                  <div className="h-12 w-12 bg-muted rounded"></div>
                </div>
              ))
            ) : (
              <div className="space-y-6">
                {activities.map((activity) => (
                  <div key={activity.id} className="flex items-center gap-4">
                    <Avatar src={activity.user.avatar} alt={activity.user.username} size="md" />
                    <div className="flex-1">
                      <p>
                        <span className="font-medium">{activity.user.username}</span>{" "}
                        {renderActivityContent(activity)}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {formatTimestamp(activity.timestamp)}
                      </p>
                    </div>
                    {activity.postImage ? (
                      <img
                        src={activity.postImage}
                        alt=""
                        className="w-12 h-12 object-cover rounded"
                      />
                    ) : activity.type === "follow" ? (
                      <Button size="sm" variant="outline">
                        Follow
                      </Button>
                    ) : null}
                  </div>
                ))}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="following">
            <div className="text-center py-10">
              <h3 className="text-lg font-medium mb-2">Activity from people you follow</h3>
              <p className="text-muted-foreground text-sm">
                When people you follow interact with posts, you'll see it here.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="you">
            <div className="text-center py-10">
              <h3 className="text-lg font-medium mb-2">Activity on your posts</h3>
              <p className="text-muted-foreground text-sm">
                When people interact with your posts, you'll see it here.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Activity;
