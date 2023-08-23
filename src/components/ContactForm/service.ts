type ContactFormType = Record<"email" | "name" | "message", string>;

export const sendEmail = async (formValues: ContactFormType) =>
  await fetch("/api/send", {
    method: "POST",
    body: JSON.stringify({
      name: formValues.name,
      email: formValues.email,
      message: formValues.message,
    }),
  });
