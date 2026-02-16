
import React, { useState } from 'react';
import { Button, Input, Label, Card } from '../components/UI';
import { Task, TaskCategory } from '../types';

const ClientPortal: React.FC = () => {
  const [step, setStep] = useState(1);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [formData, setFormData] = useState({
    title: '',
    url: '',
    category: 'Upvote' as TaskCategory,
    reward: 0.50,
    amount: 10
  });

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleCreateTask = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask: Task = {
      id: Math.random().toString(36).substr(2, 9),
      title: formData.title,
      redditUrl: formData.url,
      category: formData.category,
      reward: formData.reward,
      description: `Targeting ${formData.amount} completions.`,
      status: 'active',
      createdAt: Date.now()
    };
    setTasks([newTask, ...tasks]);
    setFormData({ title: '', url: '', category: 'Upvote', reward: 0.50, amount: 10 });
    alert("Task posted successfully.");
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black uppercase tracking-tight mb-2">Client Portal</h1>
        <p className="text-neutral-500 font-medium">Post tasks and boost your Reddit reach.</p>
      </div>

      {step === 1 && (
        <Card>
          <form onSubmit={handleSignup} className="space-y-6">
            <h2 className="text-xl font-bold uppercase border-b-2 border-black pb-4 mb-6">01. Setup Account</h2>
            <div>
              <Label>Work Email</Label>
              <Input type="email" placeholder="name@company.com" required />
            </div>
            <div>
              <Label>Password</Label>
              <Input type="password" placeholder="••••••••" required />
            </div>
            <Button type="submit" variant="primary" className="w-full">CREATE ACCOUNT</Button>
          </form>
        </Card>
      )}

      {step === 2 && (
        <div className="space-y-12">
          <Card>
            <form onSubmit={handleCreateTask} className="space-y-6">
              <h2 className="text-xl font-bold uppercase border-b-2 border-black pb-4 mb-6">02. New Task</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label>Task Title</Label>
                  <Input 
                    value={formData.title} 
                    onChange={e => setFormData({...formData, title: e.target.value})}
                    placeholder="e.g. Upvote My Launch" 
                    required 
                  />
                </div>
                <div>
                  <Label>Reddit URL</Label>
                  <Input 
                    value={formData.url}
                    onChange={e => setFormData({...formData, url: e.target.value})}
                    placeholder="reddit.com/r/..." 
                    required 
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Label>Type</Label>
                  <select 
                    className="w-full border-2 border-black px-4 py-3 text-sm focus:outline-none bg-white"
                    value={formData.category}
                    onChange={e => setFormData({...formData, category: e.target.value as TaskCategory})}
                  >
                    <option>Upvote</option>
                    <option>Comment</option>
                    <option>Post</option>
                    <option>Join Subreddit</option>
                  </select>
                </div>
                <div>
                  <Label>Reward per task ($)</Label>
                  <Input 
                    type="number" 
                    step="0.01" 
                    value={formData.reward}
                    onChange={e => setFormData({...formData, reward: parseFloat(e.target.value)})}
                  />
                </div>
                <div>
                  <Label>Quantity</Label>
                  <Input 
                    type="number"
                    value={formData.amount}
                    onChange={e => setFormData({...formData, amount: parseInt(e.target.value)})}
                  />
                </div>
              </div>
              <div className="p-4 bg-neutral-100 border-2 border-black border-dashed text-xs flex justify-between">
                <span>TOTAL BUDGET:</span>
                <span className="font-bold">${(formData.reward * formData.amount).toFixed(2)}</span>
              </div>
              <Button type="submit" variant="primary" className="w-full">POST TASK</Button>
            </form>
          </Card>

          {tasks.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-widest">Active Tasks ({tasks.length})</h2>
              {tasks.map(task => (
                <div key={task.id} className="border-2 border-black p-4 flex justify-between items-center bg-white">
                  <div>
                    <h4 className="font-bold uppercase text-sm">{task.title}</h4>
                    <p className="text-xs text-neutral-500 mt-1 truncate max-w-xs">{task.redditUrl}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold">${task.reward.toFixed(2)}</div>
                    <div className="text-[10px] uppercase font-bold text-neutral-400">STATUS: {task.status}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ClientPortal;
