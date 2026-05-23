"use client";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-black" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse" />
    </div>
  );
}