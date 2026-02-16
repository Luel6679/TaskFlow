
import React, { useState } from 'react';
import { Button, Input, Label, Card } from '../components/UI';
import { Task } from '../types';

const MOCK_TASKS: Task[] = [
  { id: '1', title: 'Upvote Crypto Thread', redditUrl: 'reddit.com/r/crypto', category: 'Upvote', reward: 0.15, description: '', status: 'active', createdAt: Date.now() },
  { id: '2', title: 'Comment on SaaS Post', redditUrl: 'reddit.com/r/saas', category: 'Comment', reward: 0.45, description: '', status: 'active', createdAt: Date.now() },
  { id: '3', title: 'Join /r/Minimalism', redditUrl: 'reddit.com/r/minimalism', category: 'Join Subreddit', reward: 0.20, description: '', status: 'active', createdAt: Date.now() },
  { id: '4', title: 'Share News Article', redditUrl: 'reddit.com/r/news', category: 'Post', reward: 1.50, description: '', status: 'active', createdAt: Date.now() },
];

const PosterPortal: React.FC = () => {
  const [step, setStep] = useState(1);
  const [earnings, setEarnings] = useState(0);
  const [completedIds, setCompletedIds] = useState<string[]>([]);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const completeTask = (task: Task) => {
    if (completedIds.includes(task.id)) return;
    setCompletedIds([...completedIds, task.id]);
    setEarnings(prev => prev + task.reward);
    alert(`Task completed. $${task.reward} added to pending balance.`);
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-12 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black uppercase tracking-tight mb-2">Poster Portal</h1>
          <p className="text-neutral-500 font-medium">Complete small tasks, earn cash.</p>
        </div>
        {step === 2 && (
          <div className="text-right border-2 border-black p-4 bg-neutral-100">
            <div className="text-[10px] font-black uppercase tracking-tighter">Balance</div>
            <div className="text-2xl font-black">${earnings.toFixed(2)}</div>
          </div>
        )}
      </div>

      {step === 1 && (
        <Card className="max-w-md mx-auto">
          <form onSubmit={handleSignup} className="space-y-6">
            <h2 className="text-xl font-bold uppercase border-b-2 border-black pb-4 mb-6">Join the Workforce</h2>
            <div>
              <Label>Reddit Username</Label>
              <Input placeholder="u/username" required />
            </div>
            <div>
              <Label>Email</Label>
              <Input type="email" placeholder="you@provider.com" required />
            </div>
            <Button type="submit" variant="primary" className="w-full">START EARNING</Button>
          </form>
        </Card>
      )}

      {step === 2 && (
        <div className="space-y-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xs font-bold uppercase tracking-widest">Available Tasks</h2>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-black text-white text-[10px] font-bold">ALL</span>
              <span className="px-2 py-1 border border-black text-[10px] font-bold">UPVOTES</span>
              <span className="px-2 py-1 border border-black text-[10px] font-bold">COMMENTS</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {MOCK_TASKS.map(task => {
              const isDone = completedIds.includes(task.id);
              return (
                <div 
                  key={task.id} 
                  className={`border-2 border-black p-5 flex flex-col md:flex-row justify-between items-center gap-4 transition-all bg-white ${isDone ? 'opacity-40 grayscale pointer-events-none' : 'hover:border-neutral-400'}`}
                >
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold uppercase bg-neutral-200 px-1.5 py-0.5">{task.category}</span>
                      <h4 className="font-bold uppercase text-base">{task.title}</h4>
                    </div>
                    <p className="text-xs text-neutral-400 underline">{task.redditUrl}</p>
                  </div>
                  <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
                    <div className="text-xl font-black">${task.reward.toFixed(2)}</div>
                    <Button 
                      variant={isDone ? 'secondary' : 'primary'} 
                      size="sm"
                      onClick={() => completeTask(task)}
                    >
                      {isDone ? 'COMPLETED' : 'ACCEPT TASK'}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-12 p-8 border-2 border-black border-dashed text-center">
            <p className="text-xs font-bold uppercase text-neutral-400">More tasks arrive every 30 minutes.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PosterPortal;
