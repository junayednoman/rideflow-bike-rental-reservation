import RForm from "@/components/form/RForm";
import RInput from "@/components/form/RInput";
import RContainer from "@/components/layout/RContainer";
import RButtonSmall from "@/components/ui/RButtonSmall";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import RSectionTitle from "@/components/ui/RSectionTitle";
import { useSignUpMutation } from "@/redux/api/auth/authApi";
import handleMutation from "@/utils/handleMutation";
import { signValidationSchema } from "@/validation";
import { useAppDispatch } from "@/redux/hooks";
import { logOut } from "@/redux/features/authSlice";

const SignUp = () => {
  const [signUp] = useSignUpMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSuccess = () => {
    dispatch(logOut());
    return navigate("/sign-up-success", { replace: true });
  };
  const handleFormSubmit: SubmitHandler<FieldValues> = async (data) => {
    handleMutation(data, signUp, "User is being created...", onSuccess);
  };

  return (
    <div className="md:py-24 py-16">
      <RContainer>
        <div className="md:w-[600px] mx-auto">
          <RSectionTitle
            heading="Join Us Today"
            subHeading="start your adventure"
          />
          <RForm
            resolver={zodResolver(signValidationSchema)}
            handleFormSubmit={handleFormSubmit}
          >
            <RInput label="Name" name="name" placeholder="enter your name" />
            <RInput label="Email" name="email" placeholder="enter your email" />
            <RInput
              label="Phone"
              name="phone"
              placeholder="enter your phone number"
            />
            <RInput
              label="Password"
              name="password"
              placeholder="enter a password"
            />
            <RInput
              label="Address"
              name="address"
              placeholder="enter your address"
            />
            <RButtonSmall type="submit">Submit</RButtonSmall>
          </RForm>
          <div className="mt-6">
            <p>
              Already have an account?{" "}
              <Link
                className="underline font-medium hover:text-accentColor duration-200"
                to={"/login"}
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </RContainer>
    </div>
  );
};

export default SignUp;
