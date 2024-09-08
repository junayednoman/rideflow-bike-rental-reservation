import { Facebook, Linkedin, Twitter } from "lucide-react";
type TTeamItem = {
  data: {
    image: string;
    name: string;
    designation: string;
  };
};
const TeamItem = ({ data }: TTeamItem) => {
  const { image, name, designation } = data;
  return (
    <div className="text-center">
      <img className="rounded-full w-[200px] mx-auto" src={image} alt="" />
      <h5 className="text-lg font-semibold mt-4">{name}</h5>
      <p className="text-secondaryColor mt-1">{designation}</p>
      <div className="flex items-center justify-center gap-3 mt-4">
        <a href="#" className="p-2 rounded-full bg-white">
          <Linkedin size={20} className="text-primaryColor" />
        </a>
        <a href="#" className="p-2 rounded-full bg-white">
          <Facebook size={20} className="text-primaryColor" />
        </a>
        <a href="#" className="p-2 rounded-full bg-white">
          <Twitter size={20} className="text-primaryColor" />
        </a>
      </div>
    </div>
  );
};

export default TeamItem;
