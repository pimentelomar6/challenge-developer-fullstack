import { Progress } from "@chakra-ui/react";

interface Props {
  title: string;
  progress: number;
}

export const Header: React.FC<Props> = ({ title, progress = 0 }) => {
  return (
    <>
      <div className="mt-4 header">
        <span className="title">{title}</span>
        <Progress colorScheme="green" size="md" value={progress} />
      </div>
    </>
  );
};
