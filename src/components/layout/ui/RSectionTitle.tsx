type TSectionTitleProps = {
  heading: string;
  subHeading?: string;
  align?: "left" | "center" | "right";
  color?: string;
};
const RSectionTitle = ({
  heading,
  subHeading,
  align,
  color,
}: TSectionTitleProps) => {
  return (
    <div
      className={`lg:mb-14 mb-10 space-y-2 capitalize  ${
        align || "text-center"
      }`}
      style={{ color: color }}
    >
      <p className="text-accentColor uppercase text-sm">{subHeading}</p>
      <h4 className="font-semibold md:text-3xl text-[22px] md:capitalize uppercase dark:text-gray-300">
        {heading}
      </h4>
    </div>
  );
};

export default RSectionTitle;
