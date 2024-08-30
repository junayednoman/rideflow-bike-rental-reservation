import RForm from "@/components/form/RForm";
import RInput from "@/components/form/RInput";
import RContainer from "@/components/layout/RContainer";
import RButtonSmall from "@/components/ui/RButtonSmall";
import { useLoginMutation } from "@/redux/api/auth/authApi";
import { addUser} from "@/redux/features/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import handleMutation from "@/utils/handleMutation";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { jwtDecode } from "jwt-decode";

const loginDefaultValues = {
  email: "smidth@edxdyample.com",
  password: "user1",
};

const Login = () => {
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const onSuccess = (res) => {
    const token = res.token;
    const { email, role } = jwtDecode(token);
    const user = { email, role };
    const payload = { token, user };
    console.log(payload);
    dispatch(addUser(payload));
    console.log("inside success func", res);
  };
  const handleForm: SubmitHandler<FieldValues> = (data) => {
    handleMutation(data, login, "User is being logged in...", onSuccess);
  };
  return (
    <div className="md:py-24 py-16">
      <RContainer>
        <div>
          <RForm
            defaultValues={loginDefaultValues}
            handleFormSubmit={handleForm}
          >
            <RInput label="Email" name="email" placeholder="Enter your email" />
            <RInput
              label="Password"
              name="password"
              placeholder="Enter your password"
            />
            <RButtonSmall type="submit">Login</RButtonSmall>
          </RForm>
        </div>
      </RContainer>
    </div>
  );
};

export default Login;
