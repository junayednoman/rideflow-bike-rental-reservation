type TSectionTitleProps = {
  heading: string;
  subHeading?: string;
};
const RSectionTitle = ({ heading, subHeading }: TSectionTitleProps) => {
  return (
    <div className="lg:mb-14 mb-10 space-y-2 capitalize text-center">
      <p className="text-accentColor uppercase text-sm">{subHeading}</p>
      <h4 className="font-semibold text-3xl">{heading}</h4>
    </div>
  );
};

export default RSectionTitle;
