
export interface User {
  id: string;
  username: string;
  fullName: string;
  avatar: string;
  bio: string;
  followers: number;
  following: number;
  posts: number;
}

export interface Post {
  id: string;
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
}

export const currentUser: User = {
  id: "user1",
  username: "janesmith",
  fullName: "Jane Smith",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  bio: "Photographer | Traveler | Coffee lover ✨",
  followers: 1250,
  following: 420,
  posts: 86
};

export const users: User[] = [
  currentUser,
  {
    id: "user2",
    username: "alexjohnson",
    fullName: "Alex Johnson",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    bio: "Adventure seeker | Foodie | Hiking enthusiast 🏔️",
    followers: 2430,
    following: 567,
    posts: 143
  },
  {
    id: "user3",
    username: "sophialee",
    fullName: "Sophia Lee",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    bio: "Fashion designer | Cat lover | NYC 🗽",
    followers: 8752,
    following: 624,
    posts: 276
  },
  {
    id: "user4",
    username: "mikerivera",
    fullName: "Mike Rivera",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    bio: "Software engineer | Basketball player | Cooking novice 🍳",
    followers: 945,
    following: 356,
    posts: 68
  }
];

export const feedPosts: Post[] = [
  {
    id: "post1",
    user: {
      id: "user2",
      username: "alexjohnson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
    },
    image: "https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=1080&auto=format&fit=crop",
    caption: "Amazing sunset at the beach today! #nature #sunset #vibes",
    likes: 243,
    comments: 37,
    timestamp: "2023-11-15T14:30:00Z"
  },
  {
    id: "post2",
    user: {
      id: "user3",
      username: "sophialee",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    },
    image: "https://images.unsplash.com/photo-1682687982093-4abccc314f14?q=80&w=1080&auto=format&fit=crop",
    caption: "New fashion collection dropping next week! 👗 #fashion #design",
    likes: 1024,
    comments: 96,
    timestamp: "2023-11-14T09:15:00Z"
  },
  {
    id: "post3",
    user: {
      id: "user4",
      username: "mikerivera",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    image: "https://images.unsplash.com/photo-1659535876844-1d9f2701f251?q=80&w=1080&auto=format&fit=crop",
    caption: "Finally perfected my pasta recipe! What do you think? #foodie #cooking",
    likes: 567,
    comments: 42,
    timestamp: "2023-11-13T18:45:00Z"
  },
  {
    id: "post4",
    user: {
      id: "user1",
      username: "janesmith",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    },
    image: "https://images.unsplash.com/photo-1682687981907-170c266da3f0?q=80&w=1080&auto=format&fit=crop",
    caption: "Morning coffee and good book. Perfect start to my day ☕📚",
    likes: 893,
    comments: 61,
    timestamp: "2023-11-12T08:20:00Z"
  }
];

export const profilePosts = [
  {
    id: "profile1",
    image: "https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=500&auto=format&fit=crop",
    likes: 654,
    comments: 43
  },
  {
    id: "profile2",
    image: "https://images.unsplash.com/photo-1682687982093-4abccc314f14?q=80&w=500&auto=format&fit=crop",
    likes: 872,
    comments: 91
  },
  {
    id: "profile3",
    image: "https://images.unsplash.com/photo-1659535876844-1d9f2701f251?q=80&w=500&auto=format&fit=crop",
    likes: 427,
    comments: 28
  },
  {
    id: "profile4",
    image: "https://images.unsplash.com/photo-1682687981907-170c266da3f0?q=80&w=500&auto=format&fit=crop",
    likes: 1082,
    comments: 134
  },
  {
    id: "profile5",
    image: "https://images.unsplash.com/photo-1682688759157-57988e10ffa8?q=80&w=500&auto=format&fit=crop",
    likes: 362,
    comments: 19
  },
  {
    id: "profile6",
    image: "https://images.unsplash.com/photo-1682688759421-4d92a1a828c6?q=80&w=500&auto=format&fit=crop",
    likes: 743,
    comments: 54
  }
];
