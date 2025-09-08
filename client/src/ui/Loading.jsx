import React from 'react';

const Loading = () => {
  return (
    <div className="w-full h-full bg-black/80 absolute top-0 left-0 flex flex-col gap-4 items-center justify-center">
      {/* Custom Loading Spinner */}
      <div className="relative w-20 h-20">
        {/* Generate 12 segments in a circle */}
        {[...Array(12)].map((_, index) => (
          <div
            key={index}
            className="absolute w-1.5 h-5 bg-green-400 rounded-full"
            style={{
              top: '8px',
              left: '50%',
              transformOrigin: '50% 32px',
              transform: `translateX(-50%) rotate(${index * 30}deg)`,
              opacity: 1 - (index * 0.08),
              animation: `spin 1.2s linear infinite`,
              animationDelay: `${index * 0.1}s`
            }}
          />
        ))}
      </div>
      
      <p className="text-white text-2xl font-bold tracking-widest">
        Loading...
      </p>
      
      <style jsx>{`
        @keyframes spin {
          0% { opacity: 1; }
          100% { opacity: 0.1; }
        }
      `}</style>
    </div>
  );
};

export default Loading;