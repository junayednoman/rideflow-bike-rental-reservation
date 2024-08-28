import RSectionTitle from "@/components/ui/RSectionTitle";
import RContainer from "../../RContainer";
import { teams } from "@/constant";
import TeamItem from "@/components/ui/TeamItem";

const Team = () => {
  return (
    <div className="team bg-cover bg-center bg-no-repeat">
      <div className="bg-black bg-opacity-35 md:py-20 py-16">
        <RContainer>
          <RSectionTitle
            color="#fff"
            heading="Our Team"
            subHeading="Dedicated professionals"
          />
          <div className="grid md:grid-cols-3 gap-12 xl:w-[900px] mx-auto text-white">
            {teams.map((item) => (
              <TeamItem data={item} />
            ))}
          </div>
        </RContainer>
      </div>
    </div>
  );
};

export default Team;
