import { Button } from "antd";
type RButtonProps = {
  children: string;
  size?: "large" | "middle" | "small";
  link?: string;
  wFull?: string;
};
const RButton = ({ children, size, link, wFull }: RButtonProps) => {
  return (
    <Button
      type="link"
      href={link}
      className={`RButton bg-accentColor border-accentColor border-2 text-white font-medium rounded-none px-8 py-6 ${
        wFull && "w-full"
      }`}
      size={size || "large"}
    >
      {children}
    </Button>
  );
};

export default RButton;
