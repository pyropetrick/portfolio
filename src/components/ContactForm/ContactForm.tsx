"use client";

import dynamic from "next/dynamic";
import { Suspense, useEffect, useState } from "react";
import { SubmitHandler, useController, useForm } from "react-hook-form";
import { ContainedButton, Input } from "..";
import FocusLock from "react-focus-lock";

const Portal = dynamic(() => import("../Portal/Portal"));

type ContactFormType = Record<"email" | "name" | "message", string>;

const ContactForm = () => {
  const { control, handleSubmit } = useForm<ContactFormType>();
  const {
    field,
    formState: { errors },
  } = useController({ control, name: "message", rules: {required: "*Required"} });
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const onSubmit: SubmitHandler<ContactFormType> = (data) => {
    console.log(data);
  };

  useEffect(() => {
    const body = document.body;
    if (isVisible) {
      body.classList.add("overflow-hidden");
    }

    return () => {
      body.classList.remove("overflow-hidden");
    };
  }, [isVisible]);

  return (
    <Suspense>
      <ContainedButton onClick={() => setIsVisible(true)}>Contact with me</ContainedButton>
      {isVisible && (
        <Portal target="modal">
          <FocusLock>
            <div
              onClick={() => setIsVisible(false)}
              aria-labelledby="modal-title"
              role="dialog"
              aria-modal="true"
              className="fixed z-10 top-0 left-0 w-screen h-screen bg-backdrop backdrop-blur-sm"
            ></div>
            <div className="fixed z-20 top-2/4 left-1/2 translate-x-center translate-y-center bg-white py-6 px-10 rounded-lg dark:bg-primary">
              <form className="flex flex-col space-y-8" onSubmit={handleSubmit(onSubmit)}>
                <h3 className="font-medium text-lg">
                  Напишите мне на почту и я отвечу в течении 1-2 дней
                </h3>
                <div className="flex flex-col space-y-5">
                  <Input
                    placeholder="Your name"
                    type="text"
                    label="name"
                    control={control}
                    name="name"
                  />
                  <Input
                    placeholder="email@gmail.com"
                    type="email"
                    label="email"
                    control={control}
                    name="email"
                  />
                  <label className="flex flex-col capitalize">
                    Message
                    <textarea
                      placeholder="Write what interests you..."
                      onChange={field.onChange}
                      className="form-textarea rounded-lg text-black mt-2 h-20"
                      maxLength={150}
                    />
                    {errors?.message && <p className="text-error">{errors.message.message}</p>}
                  </label>
                </div>
                <ContainedButton type="submit" className="dark:bg-white dark:text-primary py-3">
                  Submit
                </ContainedButton>
                <div className="border-t border-divide pt-3 flex flex-col items-center">
                  <p className="text-sm font-medium mb-2">или свяжитесь через</p>
                  <ul className="flex items-center space-x-8">
                    <li className="font-medium text-sm dark:hover:text-blue delay-300 hover:shadow-lg ease-in-out">
                      <a target="_blank" href="https://t.me/pyropetrick">
                        Telegram
                      </a>
                    </li>
                    <li className="font-medium text-sm dark:hover:text-blue delay-300 hover:shadow-lg ease-in-out">
                      <a target="_blank" href="https://instagram.com/pyropetrick">
                        Instagram
                      </a>
                    </li>
                    <li className="font-medium text-sm dark:hover:text-blue delay-300 hover:shadow-lg ease-in-out">
                      <a target="_blank" href="https://www.linkedin.com/in/pyropetrick/">
                        Linkedin
                      </a>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </FocusLock>
        </Portal>
      )}
    </Suspense>
  );
};

export default ContactForm;
