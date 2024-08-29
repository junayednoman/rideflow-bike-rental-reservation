import { Form } from "antd";
import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
};
type TFormProps = {
  children: ReactNode;
  handleFormSubmit: SubmitHandler<FieldValues>;
} & TFormConfig;

const RForm = ({
  children,
  handleFormSubmit,
  defaultValues,
  resolver,
}: TFormProps) => {
  const formConfig: TFormConfig = {};
  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  if (resolver) {
    formConfig["resolver"] = resolver;
  }
  const methods = useForm(formConfig);
  return (
    <FormProvider {...methods}>
      <Form
        style={{ width: "100%" }}
        layout="vertical"
        onFinish={methods.handleSubmit(handleFormSubmit)}
      >
        {children}
      </Form>
    </FormProvider>
  );
};

export default RForm;
