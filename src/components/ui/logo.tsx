export function HazarSolutionsLogo({ size = 64 }: { size?: number }) {
  return (
    <div className="inline-flex items-center gap-4" aria-label="Hazar Solutions">
      <div
        className="relative flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 shadow-[0_12px_35px_rgba(59,130,246,0.35)]"
        style={{ width: size, height: size }}
      >
        <div className="absolute inset-0 rounded-full border border-white/30" />
        <span className="relative z-10 text-xl font-extrabold text-white tracking-widest">HS</span>
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-2xl font-black text-white">Hazar Solutions</span>
        <span className="text-xs font-medium uppercase text-cyan-200">Ingénierie digitale & transformation</span>
      </div>
    </div>
  );
}
