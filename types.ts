
export type TaskCategory = 'Upvote' | 'Comment' | 'Post' | 'Join Subreddit';

export interface Task {
  id: string;
  title: string;
  redditUrl: string;
  category: TaskCategory;
  reward: number;
  description: string;
  status: 'active' | 'completed' | 'pending';
  createdAt: number;
}

export interface User {
  role: 'client' | 'poster' | null;
  username: string;
  isLoggedIn: boolean;
}
