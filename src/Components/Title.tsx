interface TitleProps {
  label: string;
  description: string;
}

export const Title = ({ label, description }: TitleProps) => {
  return (
    <div className="h-min">
      <h1>{label}</h1>
      <span>{description}</span>
    </div>
  );
};
