import { Button } from "antd";
type RButtonProps = {
  children: string;
  size?: "large" | "middle" | "small";
  link?: string;
  type?: "submit";
  wFull?: boolean;
};
const RButtonSmall = ({ children, size, link, type, wFull }: RButtonProps) => {
  return (
    <Button
      htmlType={type}
      type="link"
      href={link}
      className={`RButton bg-accentColor border-accentColor border-2 text-white font-medium hover:text-primaryColor rounded-none px-6 py-5 ${
        wFull && "w-full"
      }`}
      size={size || "large"}
    >
      {children}
    </Button>
  );
};

export default RButtonSmall;
