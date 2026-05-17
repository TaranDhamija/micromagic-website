import FloatingShapes from './FloatingShapes';

export default function AmbientBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="hero-ambient-gradient absolute inset-0" />
      <div className="hero-light hero-light-left absolute inset-0" />
      <div className="hero-light hero-light-right absolute inset-0" />
      <div className="hero-vignette absolute inset-0" />
      <div className="hero-grain absolute inset-0 opacity-[0.08] mix-blend-soft-light" />
      <div className="hero-sweep absolute inset-y-0 left-[-18%] w-[42%]" />
      <FloatingShapes />
    </div>
  );
}
