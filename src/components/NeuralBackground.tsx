import React, { useEffect, useState } from 'react';

interface NeuralNode {
  id: string;
  x: number;
  y: number;
  delay: number;
}

interface NeuralConnection {
  id: string;
  x: number;
  y: number;
  width: number;
  rotation: number;
  delay: number;
}

interface Dendrite {
  id: string;
  x: number;
  y: number;
  height: number;
  rotation: number;
  delay: number;
}

interface SynapticVesicle {
  id: string;
  x: number;
  y: number;
  delay: number;
}

const NeuralBackground = () => {
  const [nodes, setNodes] = useState<NeuralNode[]>([]);
  const [connections, setConnections] = useState<NeuralConnection[]>([]);
  const [dendrites, setDendrites] = useState<Dendrite[]>([]);
  const [vesicles, setVesicles] = useState<SynapticVesicle[]>([]);

  useEffect(() => {
    // Generate MORE neural nodes (increased from 15 to 30)
    const newNodes: NeuralNode[] = Array.from({ length: 30 }, (_, i) => ({
      id: `node-${i}`,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
    }));

    // Generate MORE neural connections (increased from 8 to 18)
    const newConnections: NeuralConnection[] = Array.from({ length: 18 }, (_, i) => ({
      id: `connection-${i}`,
      x: Math.random() * 100,
      y: Math.random() * 100,
      width: 50 + Math.random() * 200,
      rotation: Math.random() * 360,
      delay: Math.random() * 4,
    }));

    // Generate dendrite structures
    const newDendrites: Dendrite[] = Array.from({ length: 25 }, (_, i) => ({
      id: `dendrite-${i}`,
      x: Math.random() * 100,
      y: Math.random() * 100,
      height: 20 + Math.random() * 40,
      rotation: Math.random() * 360,
      delay: Math.random() * 8,
    }));

    // Generate synaptic vesicles
    const newVesicles: SynapticVesicle[] = Array.from({ length: 20 }, (_, i) => ({
      id: `vesicle-${i}`,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
    }));

    setNodes(newNodes);
    setConnections(newConnections);
    setDendrites(newDendrites);
    setVesicles(newVesicles);
  }, []);

  return (
    <>
      {/* Enhanced Neural network background */}
      <div className="neural-bg">
        {/* Neural nodes with glow */}
        {nodes.map((node) => (
          <div
            key={node.id}
            className="neural-node floating-neuron"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              animationDelay: `${node.delay}s`,
            }}
          />
        ))}
        
        {/* Neural connections */}
        {connections.map((connection) => (
          <div
            key={connection.id}
            className="neural-connection"
            style={{
              left: `${connection.x}%`,
              top: `${connection.y}%`,
              width: `${connection.width}px`,
              transform: `rotate(${connection.rotation}deg)`,
              animationDelay: `${connection.delay}s`,
            }}
          />
        ))}

        {/* Dendrite structures */}
        {dendrites.map((dendrite) => (
          <div
            key={dendrite.id}
            className="dendrite"
            style={{
              left: `${dendrite.x}%`,
              top: `${dendrite.y}%`,
              height: `${dendrite.height}px`,
              transform: `rotate(${dendrite.rotation}deg)`,
              animationDelay: `${dendrite.delay}s`,
            }}
          />
        ))}

        {/* Synaptic vesicles */}
        {vesicles.map((vesicle) => (
          <div
            key={vesicle.id}
            className="synapse-vesicle"
            style={{
              left: `${vesicle.x}%`,
              top: `${vesicle.y}%`,
              animationDelay: `${vesicle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Enhanced EEG wave patterns with different frequencies */}
      <div className="fixed inset-0 pointer-events-none opacity-15 z-0">
        {/* Alpha waves (8-12 Hz) */}
        <div className="eeg-wave alpha-wave" style={{ top: '15%', animationDelay: '0s' }} />
        <div className="eeg-wave alpha-wave" style={{ top: '35%', animationDelay: '1s' }} />
        
        {/* Beta waves (13-30 Hz) */}
        <div className="eeg-wave beta-wave" style={{ top: '25%', animationDelay: '2s' }} />
        <div className="eeg-wave beta-wave" style={{ top: '55%', animationDelay: '0.5s' }} />
        
        {/* Gamma waves (30+ Hz) */}
        <div className="eeg-wave gamma-wave" style={{ top: '45%', animationDelay: '3s' }} />
        <div className="eeg-wave gamma-wave" style={{ top: '75%', animationDelay: '1.5s' }} />
        
        {/* Additional background waves */}
        <div className="eeg-wave" style={{ top: '65%', animationDelay: '4s' }} />
        <div className="eeg-wave" style={{ top: '85%', animationDelay: '2.5s' }} />
      </div>

      {/* Action potential spikes scattered around */}
      <div className="fixed inset-0 pointer-events-none opacity-10 z-0">
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={`spike-${i}`}
            className="action-potential"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default NeuralBackground;