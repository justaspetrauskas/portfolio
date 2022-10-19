import React from "react";
import { UseFormRegister } from "react-hook-form";
import { ContactFormFields, ValidationRules } from "../../types/types.contact";
import ErrorMessage from "./ErrorMessage";
import style from "./contactForm.module.css";

interface InputFieldProps {
  inputType: "textarea" | "text";
  required: boolean;
  label: string;
  placeholderText: string;
  registerField: UseFormRegister<ContactFormFields>;
  formfield: keyof ContactFormFields;
  validationRules: ValidationRules;
  errorMessage: Record<string, any>;
}

const InputField = ({
  label,
  required = true,
  placeholderText = label,
  inputType = "text",
  registerField,
  formfield,
  validationRules,
  errorMessage,
}: InputFieldProps) => {
  return (
    <div className={style["group"]}>
      <label
        className={`${style["input--label"]} ${
          required === true && style["input--required"]
        }`}
      >
        {label}
      </label>
      {inputType === "text" && (
        <div>
          <input
            type="text"
            id={`inputfield--${label}`}
            className={`${style["input--field"]} ${
              errorMessage[formfield] ? style["error"] : ""
            }`}
            placeholder={placeholderText}
            {...registerField(formfield, validationRules)}
            data-form-type={label}
          />
          {errorMessage[formfield] && (
            <ErrorMessage label={label} error={errorMessage[formfield]} />
          )}
        </div>
      )}
      {inputType === "textarea" && (
        <div>
          <textarea
            className={[style["input--field"], style["input--textArea"]].join(
              " "
            )}
            rows={1}
            placeholder={placeholderText}
            {...registerField(formfield, validationRules)}
          />
          {errorMessage[formfield] && (
            <ErrorMessage label={label} error={errorMessage[formfield]} />
          )}
        </div>
      )}
    </div>
  );
};

export default InputField;
