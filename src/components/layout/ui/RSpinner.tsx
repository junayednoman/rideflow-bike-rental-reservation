import loadingImg from "@/assets/icons/loading.svg";
const RSpinner = ({ mgT }: { mgT?: string }) => {
  return (
    <div style={{ marginTop: `${mgT}px` }}>
      <img className="w-[120px] mx-auto" src={loadingImg} alt="" />
    </div>
  );
};

export default RSpinner;
