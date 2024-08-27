import { Button } from "antd";
type RButtonProps = {
  children: string;
  size?: "large" | "middle" | "small";
  link?: string;
};
const RButtonWhite = ({ children, size, link }: RButtonProps) => {
  return (
    <Button
      type="link"
      href={link}
      className="RButtonWhite bg-accentColor border-accentColor border-2 text-white font-medium rounded-none px-8 py-6"
      size={size || "large"}
    >
      {children}
    </Button>
  );
};

export default RButtonWhite;
