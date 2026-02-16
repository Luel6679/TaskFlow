
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/UI';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const steps = [
    { title: "Post", desc: "Clients list Reddit tasks with specific URLs and requirements." },
    { title: "Review", desc: "System verifies task safety and formatting instantly." },
    { title: "Complete", desc: "Posters pick tasks, finish them, and submit proof." },
    { title: "Paid", desc: "Payments are released automatically after verification." }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center space-y-8 mb-24">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
          Post. Complete.<br />Get Paid.
        </h1>
        <p className="text-lg md:text-xl font-medium text-neutral-600 max-w-xl mx-auto">
          Simple Reddit task platform. Connect with people who help your content grow.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Button 
            variant="primary" 
            size="xl" 
            className="sm:w-80"
            onClick={() => navigate('/client')}
          >
            I WANT TO POST
          </Button>
          <Button 
            variant="outline" 
            size="xl" 
            className="sm:w-80"
            onClick={() => navigate('/poster')}
          >
            I WANT TO COMPLETE
          </Button>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t-2 border-black pt-20">
        <h2 className="text-xs font-bold uppercase tracking-[0.3em] mb-12 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="space-y-4">
              <div className="mono text-4xl font-bold">0{idx + 1}</div>
              <h3 className="text-xl font-bold uppercase tracking-tight">{step.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="mt-32 p-12 bg-neutral-100 border-2 border-black flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <div className="text-5xl font-black">10K+</div>
          <div className="text-xs font-bold uppercase tracking-widest mt-2">Tasks Done</div>
        </div>
        <div className="text-center md:text-left">
          <div className="text-5xl font-black">$45K</div>
          <div className="text-xs font-bold uppercase tracking-widest mt-2">Paid Out</div>
        </div>
        <div className="text-center md:text-left">
          <div className="text-5xl font-black">2.4m</div>
          <div className="text-xs font-bold uppercase tracking-widest mt-2">Avg Upvotes</div>
        </div>
      </section>
    </div>
  );
};

export default Home;
