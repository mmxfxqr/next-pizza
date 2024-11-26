import React from "react";
import { RequiredSymbol } from "../required-symbol";
import { Input } from "../../ui";
import { ErrorText } from "../error-text";
import { ClearButton } from "../clear-button";
import { useFormContext } from "react-hook-form";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  required?: boolean;
  className?: string;
}

export const FormInput: React.FC<Props> = ({
  className,
  name,
  label,
  required,
  ...props
}) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();
  const value = watch(name);
  const errorText = errors[name]?.message as string;
  const isPasswordField = props.type === "password" || props.type === "confirmPassword";
  const onClickClear = () => {
    setValue(name, "", { shouldValidate: true });
  };
  
  return (
    <div className={className}>
      {label && (
        <p className="font-medium mb-2">
          {label} {required && <RequiredSymbol />}
        </p>
      )}
      <div className="relative">
       
          <Input className="h-12 text-md" {...register(name)} {...props} />
        

        {/* {isPasswordField? value && <ClearButton onClick={onClickClear} className="right-10" /> : value && <ClearButton onClick={onClickClear} />} */}
        {value && <ClearButton onClick={onClickClear} className={isPasswordField ? "right-10" : ""} />} 
      </div>
      {errorText && <ErrorText text={errorText} className="mt-2" />}
    </div>
  );
};