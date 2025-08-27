
export default function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="h-8 w-8 rounded-lg bg-primary ring-1 ring-zinc-300 flex items-center justify-center text-xs font-bold text-zinc-900">RS</div>
      <span className="font-semibold tracking-tight">Rafael Santos</span>
      <span className="hidden sm:inline text-zinc-500">• Criminalista</span>
    </div>
  );
}
