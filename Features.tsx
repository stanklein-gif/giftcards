import React from 'react';
import { UserCheck, FileText, Gift } from 'lucide-react';

const Features: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Click the Button",
      description: "Start the process instantly by clicking the red claim button.",
      icon: <UserCheck className="w-8 h-8 text-white" />,
      color: "bg-aldi-blue"
    },
    {
      id: 2,
      title: "Answer Questions",
      description: "Complete a short survey about your Black Friday shopping list.",
      icon: <FileText className="w-8 h-8 text-white" />,
      color: "bg-bf-red"
    },
    {
      id: 3,
      title: "Receive Reward",
      description: "Qualify to receive your $500 gift card reward.",
      icon: <Gift className="w-8 h-8 text-white" />,
      color: "bg-aldi-orange"
    }
  ];

  return (
    <div className="py-12 bg-bf-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-bf-red font-bold tracking-wide uppercase">How It Works</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Get Your Card in 3 Steps
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
            We've streamlined the process for the Black Friday event.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.id} className="relative bg-bf-card p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-gray-700 transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1">
              <div className={`flex items-center justify-center h-16 w-16 rounded-full ${step.color} mb-4 shadow-lg shadow-black/50 group-hover:scale-110 transition-transform`}>
                {step.icon}
              </div>
              <h3 className="text-lg leading-6 font-bold text-white mb-2">
                Step {step.id}: {step.title}
              </h3>
              <p className="text-base text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;