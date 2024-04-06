interface Props {
  label: string;
}

export const Icon: React.FC<Props> = ({ label }) => {
  return (
    <div className="icon">
      <span className="material-symbols-outlined">local_cafe</span>
      <span className="text">{label}</span>
    </div>
  );
};
