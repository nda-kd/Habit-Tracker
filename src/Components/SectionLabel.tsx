interface SectioLabelProp {
  label: string;
}

export const SectionLabel = ({ label }: SectioLabelProp) => {
  return (
    <div className="font-['Kalam',cursive] font-bold text-[19px] mb-3.5 flex items-center gap-2.5">
      {label}
      <span className="flex-1 h-0.5 bg-[repeating-linear-gradient(90deg,var(--graphite)_0_6px,transparent_6px_10px)] opacity-55"></span>
    </div>
  );
};
