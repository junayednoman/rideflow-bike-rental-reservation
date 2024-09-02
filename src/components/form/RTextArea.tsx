import { Col, Form, Input } from "antd";
import { Controller } from "react-hook-form";
import RInputError from "./RInputError";

type TTextAreaProps = {
  name: string;
  label: string;
  placeholder?: string;
  disabled?: boolean;
  colSpanLg?: number;
  colSpanMd?: number;
  rows?: number; 
};

const RTextArea = ({
  name,
  label,
  placeholder,
  disabled,
  colSpanLg,
  colSpanMd,
  rows = 4,
}: TTextAreaProps) => {
  return (
    <Col
      span={24}
      lg={{ span: colSpanLg }}
      md={{ span: colSpanMd }}
      className="mx-auto"
    >
      <div className="flex items-center justify-center">
        <Controller
          name={name}
          render={({ field, fieldState: error }) => (
            <div className="w-full">
              <Form.Item
                htmlFor={name}
                label={label}
                className="mb-3 font-semibold"
              >
                <Input.TextArea
                  {...field}
                  id={name}
                  placeholder={placeholder}
                  disabled={disabled}
                  className="block font-normal rounded-none focus:border-primaryColor focus:shadow-none hover:border-primaryColor"
                  size="large"
                  rows={rows}
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

export default RTextArea;
