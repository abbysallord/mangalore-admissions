// src/components/ui/BorderBeam.jsx

export default function BorderBeam({
  size = 100,
  duration = 4,
  bgColor = 'bg-navy',
  className = '',
}) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden rounded-2xl ${className}`}>
      <div
        className="absolute animate-beam-slide"
        style={{
          inset: '-50%',
          background: `conic-gradient(from 0deg, transparent 0%, transparent 70%, rgba(212,168,83,0.6) 78%, rgba(240,201,122,0.8) 82%, rgba(212,168,83,0.6) 86%, transparent 94%, transparent 100%)`,
          animationDuration: `${duration}s`,
        }}
      />
      {/* Inner mask to create border-only effect */}
      <div
        className={`absolute rounded-2xl ${bgColor}`}
        style={{ inset: '1.5px' }}
      />
    </div>
  );
}
