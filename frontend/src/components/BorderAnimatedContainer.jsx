function BorderAnimatedContainer({ children }) {
  return (
    <div className="w-full h-full min-h-0 overflow-hidden rounded-2xl border-2 border-transparent animate-border [background:linear-gradient(45deg,#0f172a,theme(colors.slate.900)_50%,#0f172a)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.cyan.400)_0%,theme(colors.indigo.500)_25%,theme(colors.pink.500)_50%,theme(colors.indigo.500)_75%,theme(colors.cyan.400)_100%)_border-box] filter drop-shadow-[0_0_15px_rgba(99,102,241,0.25)]">
      {children}
    </div>
  );
}

export default BorderAnimatedContainer;
