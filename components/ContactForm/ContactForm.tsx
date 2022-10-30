import React, { useRef, useState, MutableRefObject } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ContactFormFields } from "../../types/types.contact";
import InputField from "./InputField";

import emailjs from "@emailjs/browser";

import style from "./contactForm.module.css";
import ContentRow from "../ContentRow/ContentRow";
import SubmitButton from "../SubmitButton/SubmitButton";
import { emailJS, recaptcha } from "../../config";
import ReCAPTCHA from "react-google-recaptcha";

const validation = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
};

const ContactForm = () => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const {
    register,
    getValues,
    formState: { errors, isDirty, isValid, touchedFields },
    handleSubmit,
    reset,
  } = useForm<ContactFormFields>({
    mode: "onChange", // "onChange"
    reValidateMode: "onChange",
  });

  const [messageStatus, setMessageStatus] = useState<"IDLE" | "SENT" | "ERROR">(
    "IDLE"
  );

  const onSubmit = async () => {
    const formValues = getValues() as Record<string, any>;
    const { serviceId, templateId, publicKey } = emailJS;
    const token = await recaptchaRef.current!.executeAsync();
    const params = { ...formValues, "g-recaptcha-response": token };

    emailjs.send(serviceId, templateId, params, publicKey).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setMessageStatus("SENT");
        reset();
        setTimeout(() => {
          setMessageStatus("IDLE");
        }, 5000);
      },
      (err) => {
        console.log("FAILED...", err);
        setMessageStatus("ERROR");
      }
    );
  };

  const handleRecaptcha = (value: any) => {
    console.log("working", value);
  };

  const handleFormReset = () => {
    if (messageStatus === "SENT") {
      // field empty
    }
  };

  return (
    <form
      className={style.contactWrapper}
      onSubmit={handleSubmit(onSubmit)}
      // onClick={handleFormReset}
    >
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
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey={recaptcha.siteKey}
        // onChange={handleRecaptcha}
        theme="light"
      />

      <SubmitButton
        disabled={!isDirty || !isValid}
        messageStatus={messageStatus}
      />
    </form>
  );
};

export default ContactForm;
