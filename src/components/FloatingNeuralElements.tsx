import React from 'react';
import { Brain, Zap, Activity } from 'lucide-react';

// Floating neural-themed icons scattered across sections
const FloatingNeuralElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-5">
      {/* Floating brain icons with gentle animations */}
      <div className="absolute top-20 left-12 text-neural-primary opacity-80 animate-float" style={{ animationDelay: '0s' }}>
        <Brain className="w-8 h-8" />
      </div>
      
      <div className="absolute top-1/3 right-16 text-neural-secondary opacity-60 animate-float" style={{ animationDelay: '2s' }}>
        <Zap className="w-6 h-6" />
      </div>
      
      <div className="absolute top-2/3 left-20 text-neural-accent opacity-70 animate-float" style={{ animationDelay: '4s' }}>
        <Activity className="w-7 h-7" />
      </div>
      
      <div className="absolute bottom-32 right-12 text-neural-primary opacity-50 animate-float" style={{ animationDelay: '1s' }}>
        <Brain className="w-5 h-5" />
      </div>
      
      <div className="absolute top-1/2 left-8 text-neural-secondary opacity-80 animate-float" style={{ animationDelay: '3s' }}>
        <Activity className="w-6 h-6" />
      </div>
      
      <div className="absolute top-3/4 right-32 text-neural-accent opacity-60 animate-float" style={{ animationDelay: '5s' }}>
        <Zap className="w-8 h-8" />
      </div>

      {/* Additional scattered neural symbols */}
      <div className="absolute top-1/4 left-1/3 text-primary opacity-40 animate-neural-pulse">
        <div className="text-xs font-mono">∇²Ψ</div>
      </div>
      
      <div className="absolute bottom-1/4 right-1/4 text-primary opacity-50 animate-neural-pulse" style={{ animationDelay: '2s' }}>
        <div className="text-xs font-mono">σ(x)</div>
      </div>
      
      <div className="absolute top-1/2 right-1/3 text-primary opacity-40 animate-neural-pulse" style={{ animationDelay: '4s' }}>
        <div className="text-xs font-mono">∑w·x</div>
      </div>
    </div>
  );
};

export default FloatingNeuralElements;