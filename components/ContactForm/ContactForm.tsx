import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ContactFormFields } from "../../types/types.contact";
import InputField from "./InputField";

import style from "./contactForm.module.css";
import ContentRow from "../ContentRow/ContentRow";

const validation = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
};

const ContactForm = () => {
  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm<ContactFormFields>({
    mode: "onChange", // "onChange"
    reValidateMode: "onChange",
  });

  useEffect(() => {
    const values = getValues();
    console.log(values);
  }, [getValues]);

  const onSubmit = async (values: ContactFormFields) => {
    // const res = await fetch("/api/send", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(values),
    // });
    const formValues = getValues();
    console.log(formValues);
    // handleResponse(res.status);
  };

  return (
    <form className={style.contactWrapper} onSubmit={handleSubmit(onSubmit)}>
      <InputField
        inputType="text"
        required={true}
        label="name"
        formfield={"fullName"}
        placeholderText={"your name"}
        registerField={register}
        validationRules={{ required: true, maxLength: 50 }}
        errorMessage={errors}
      />
      <InputField
        inputType="text"
        required={true}
        label="email"
        formfield={"email"}
        placeholderText={"your email"}
        registerField={register}
        validationRules={{ required: true, pattern: validation.email }}
        errorMessage={errors}
      />
      <InputField
        inputType="textarea"
        required={true}
        label="Message"
        formfield={"message"}
        placeholderText={"your message"}
        registerField={register}
        validationRules={{ required: true }}
        errorMessage={errors}
      />

      <button className={`${style["submit"]}`} type="submit" disabled={false}>
        <div className={`${style["submit-content"]}`}>Send</div>
      </button>
    </form>
  );
};

export default ContactForm;
