import RContainer from "@/components/layout/RContainer";
import RButtonSmall from "@/components/ui/RButtonSmall";

const SignUpSuccess = () => {
  return (
    <RContainer>
      <div className="text-center md:py-24 py-16">
        <h1 className="lg:text-5xl text-3xl font-semibold mb-8">
          Account Created Successfully!
        </h1>
        <p className="mb-5">
          Your account has been set up, and you're ready to start your biking
          adventure.
        </p>
        <RButtonSmall link="/dashboard/profile">Go To Profile</RButtonSmall>
      </div>
    </RContainer>
  );
};

export default SignUpSuccess;
