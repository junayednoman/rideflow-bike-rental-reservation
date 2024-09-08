import RContainer from "@/components/layout/RContainer";
import RButtonSmall from "@/components/layout/ui/RButtonSmall";

const SignUpSuccess = () => {
  return (
    <RContainer>
      <div className="text-center md:py-24 py-16">
        <h1 className="lg:text-5xl text-3xl font-semibold mb-8">
          Account Created Successfully!
        </h1>
        <p className="mb-5">
          Please, login with the credentials to continue with the next
          adventures
        </p>
        <RButtonSmall link={`/login`}>Go To Login</RButtonSmall>
      </div>
    </RContainer>
  );
};

export default SignUpSuccess;
