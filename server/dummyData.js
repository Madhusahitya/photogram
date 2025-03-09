
const users = [
  {
    username: "johndoe",
    fullName: "John Doe",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    bio: "Photography enthusiast.\nTravel lover.\nCoffee addict.",
    email: "john@example.com",
    posts: 15,
    followers: 1250,
    following: 420
  },
  {
    username: "janedoe",
    fullName: "Jane Doe",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    bio: "Digital artist",
    email: "jane@example.com",
    posts: 42,
    followers: 2300,
    following: 567
  },
  {
    username: "willsmith",
    fullName: "Will Smith",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    bio: "Adventure seeker",
    email: "will@example.com",
    posts: 27,
    followers: 987,
    following: 356
  },
  {
    username: "emilyjones",
    fullName: "Emily Jones",
    avatar: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    bio: "Food blogger",
    email: "emily@example.com",
    posts: 53,
    followers: 4500,
    following: 321
  }
];

const feedPosts = [
  {
    user: {
      username: "johndoe",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    image: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    caption: "Beautiful sunset at the beach 🌅",
    likes: 124,
    comments: 12,
    timestamp: "2023-11-01T12:30:00Z"
  },
  {
    user: {
      username: "janedoe",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    image: "https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    caption: "Coffee and art, perfect combination ☕️🎨",
    likes: 237,
    comments: 24,
    timestamp: "2023-11-02T09:15:00Z"
  },
  {
    user: {
      username: "willsmith",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    caption: "Hiking in the mountains today 🏔️",
    likes: 342,
    comments: 31,
    timestamp: "2023-11-03T16:45:00Z"
  },
  {
    user: {
      username: "emilyjones",
      avatar: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    caption: "Homemade pizza night! 🍕",
    likes: 412,
    comments: 47,
    timestamp: "2023-11-04T19:20:00Z"
  }
];

const profilePosts = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1682687982093-4abccc314f14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    likes: 123,
    comments: 12
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    likes: 84,
    comments: 5
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1682687981907-170c266da3f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    likes: 231,
    comments: 21
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1682687980976-fec0915c6177?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    likes: 76,
    comments: 3
  },
  {
    id: "5",
    image: "https://images.unsplash.com/photo-1682688759157-57988e10ffa8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    likes: 192,
    comments: 14
  },
  {
    id: "6",
    image: "https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    likes: 145,
    comments: 9
  }
];

module.exports = { users, feedPosts, profilePosts };
