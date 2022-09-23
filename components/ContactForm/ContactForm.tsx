import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ContactFormFields } from "../../types/types.contact";
import Button from "../Button/Button";
import InputField from "./InputField";

import style from "../../styles/contactForm.module.css";
import ContentRow from "../ContentRow/ContentRow";

const validation = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
};

const ContactForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ContactFormFields>({
    mode: "onChange", // "onChange"
    reValidateMode: "onChange",
  });

  const onSubmit = async (values: ContactFormFields) => {
    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    console.log(res.status);
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
        validationRules={{ required: true, maxLength: 8 }}
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

      <ContentRow>
        <Button type={"outlined"} buttonType={"submit"}>
          submit
        </Button>
      </ContentRow>
    </form>
  );
};

export default ContactForm;
