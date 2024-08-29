import { Col, Form, Input } from "antd";
import { Controller } from "react-hook-form";
import RInputError from "./RInputError";
type TInputProps = {
  name: string;
  label: string;
  placeholder?: string;
  type?: "text" | "number";
  disabled?: boolean;
  colSpanLg?: number;
  colSpanMd?: number;
};

const RInput = ({
  name,
  label,
  placeholder,
  type,
  disabled,
  colSpanLg,
  colSpanMd,
}: TInputProps) => {
  return (
    <Col span={24} lg={{ span: colSpanLg }} md={{ span: colSpanMd }} className="mx-auto">
      <div className="flex items-center justify-center">
        <Controller

          name={name}
          render={({ field, fieldState: error }) => (
            <div className="w-full">
              <Form.Item htmlFor={name} label={label} className="mb-3 font-semibold">
                <Input
                  {...field}
                  id={name}
                  type={type}
                  placeholder={placeholder}
                  disabled={disabled}
                  className="block font-normal rounded-none focus:border-primaryColor focus:shadow-none hover:border-primaryColor"
                  size="large"
                />
                {error && (
                  <RInputError message={error?.error?.message as string} />
                )}
              </Form.Item>
            </div>
          )}
        />
      </div>
    </Col>
  );
};

export default RInput;
