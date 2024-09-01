type TSectionTitleProps = {
  heading: string;
  subHeading?: string;
  align?: "left" | "center" | "right";
  color?: string;
};
const DashboardSectionTitle = ({
  heading,
  subHeading,
  align,
  color,
}: TSectionTitleProps) => {
  return (
    <div
      className={`mb-6 space-y-2 capitalize  ${align || "text-center"}`}
      style={{ color: color }}
    >
      <p className="text-accentColor uppercase text-sm">{subHeading}</p>
      <h4 className="font-semibold md:text-2xl text-[22px] md:capitalize uppercase">
        {heading}
      </h4>
    </div>
  );
};

export default DashboardSectionTitle;
