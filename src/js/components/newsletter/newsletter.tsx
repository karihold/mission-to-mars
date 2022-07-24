import React, { FormEvent, ReactElement, useEffect, useState } from "react";

import { validateEmail } from "@utils/validation";

import "./newsletter.scss";

enum NewsletterInputs {
  fullName = "fullName",
  email = "email",
  weeklyNewsletter = "weeklyNewsletter",
  termsAndConditions = "termsAndConditions",
}

enum InputErrorType {
  empty = "empty",
  format = "format",
  "not-checked" = "not-checked",
  "no-error" = "no-error",
}

interface NewsletterFormValues {
  [NewsletterInputs.fullName]: string;
  [NewsletterInputs.email]: string;
  [NewsletterInputs.weeklyNewsletter]: boolean;
  [NewsletterInputs.termsAndConditions]: boolean;
}

interface NewsletterFormErrors {
  [NewsletterInputs.fullName]: InputErrorType;
  [NewsletterInputs.email]: InputErrorType;
  [NewsletterInputs.termsAndConditions]: InputErrorType;
}

const initialNewsletterFormErrors: NewsletterFormErrors = {
  [NewsletterInputs.fullName]: InputErrorType["no-error"],
  [NewsletterInputs.email]: InputErrorType["no-error"],
  [NewsletterInputs.termsAndConditions]: InputErrorType["no-error"],
};

const initialNewsletterFormValues: NewsletterFormValues = {
  [NewsletterInputs.fullName]: "",
  [NewsletterInputs.email]: "",
  [NewsletterInputs.weeklyNewsletter]: false,
  [NewsletterInputs.termsAndConditions]: false,
};

const Timeline = (): ReactElement => {
  const [showSubsriptionMessage, setShowSubsriptionMessage] = useState<boolean>(false);
  const [errors, setErrors] = useState<NewsletterFormErrors>(initialNewsletterFormErrors);
  const [values, setValues] = useState<NewsletterFormValues>(initialNewsletterFormValues);
  const [hasFormValidated, setHasFormValidated] = useState<boolean>(false);

  useEffect(() => {
    if (hasFormValidated && formHasNoErrors()) setShowSubsriptionMessage(true);
    setHasFormValidated(false);
  }, [hasFormValidated]);

  useEffect(() => {
    if (showSubsriptionMessage) {
      resetForm();
      setTimeout(() => {
        setShowSubsriptionMessage(false);
      }, 2500);
    }
  }, [showSubsriptionMessage]);

  function onSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    validateForm(event);
    setHasFormValidated(true);
  }

  function onReset(event: React.MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    resetForm();
  }

  function resetForm(): void {
    setErrors(initialNewsletterFormErrors);
    setValues(initialNewsletterFormValues);
  }

  function formHasNoErrors(): boolean {
    const errorKeys = Object.getOwnPropertyNames(errors);

    return errorKeys.every((errorKey) => errors[errorKey] === InputErrorType["no-error"]);
  }

  function validateForm(formEvent: FormEvent<HTMLFormElement>): void {
    const form = formEvent.currentTarget;
    const formInputs = Array.from(form.elements).filter((element) => element.tagName === "INPUT") as HTMLInputElement[];

    const updatedErrorState = formInputs.reduce(updateErrorStates, {} as NewsletterFormErrors);
    setErrors(updatedErrorState);
  }

  function updateErrorStates(errorStates: NewsletterFormErrors, input: HTMLInputElement): NewsletterFormErrors {
    const { required, name, type, value, checked } = input;

    if (!required) return errorStates;

    if (type === "text") {
      errorStates = { ...errorStates, [name]: !value ? InputErrorType.empty : InputErrorType["no-error"] };
      return errorStates;
    }
    if (type === "email") {
      const isValidFormat = validateEmail(value);

      errorStates = {
        ...errorStates,
        [name]: !isValidFormat ? InputErrorType.format : !value ? InputErrorType.empty : InputErrorType["no-error"],
      };
      return errorStates;
    }
    if (type === "checkbox") {
      errorStates = { ...errorStates, [name]: !checked ? InputErrorType["not-checked"] : InputErrorType["no-error"] };
      return errorStates;
    }

    return errorStates;
  }

  function onCheck(event: React.ChangeEvent<HTMLInputElement>): void {
    const input = event.currentTarget;

    setValues({ ...values, [input.name]: input.checked });
  }

  function onEmailChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const input = event.currentTarget;

    const isValidFormat = validateEmail(input.value);

    setErrors({
      ...errors,
      [input.name]: !isValidFormat && input.value ? InputErrorType.format : InputErrorType["no-error"],
    });

    setValues({ ...values, [input.name]: input.value });
  }

  function onTextChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const input = event.currentTarget;

    setValues({ ...values, [input.name]: input.value });
  }

  return (
    <>
      {showSubsriptionMessage ? (
        <p className="subscription-message">Thanks for subscribing to our newsletter!</p>
      ) : (
        <form className="newsletter-form" onSubmit={onSubmit} noValidate>
          <section className="form-header">
            <h2 className="form-title">Subscribe to our Newsletter</h2>
            <p className="form-headline">No spam, we promise</p>
          </section>
          <div className="form-inputs-container">
            <label className="form-label">
              Full Name{" "}
              {errors.fullName !== InputErrorType["no-error"] && (
                <span className="validation-message">This field can not be empty</span>
              )}
              <input
                type="text"
                placeholder="Name"
                name={NewsletterInputs.fullName}
                className="form-input"
                value={values[NewsletterInputs.fullName]}
                onChange={onTextChange}
                required
              />
            </label>
            <label className="form-label">
              Email{" "}
              {errors.email !== InputErrorType["no-error"] && (
                <span className="validation-message">
                  {errors.email === InputErrorType.format ? "Invalid email format" : "This field can not be empty"}
                </span>
              )}
              <input
                type="email"
                placeholder="Email address"
                className="form-input"
                name={NewsletterInputs.email}
                value={values[NewsletterInputs.email]}
                onChange={onEmailChange}
                required
              />
            </label>
            <section className="radio-button-section">
              <label className="form-checkbox-label">
                <input
                  type="checkbox"
                  name={NewsletterInputs.weeklyNewsletter}
                  className="form-checkbox"
                  checked={values[NewsletterInputs.weeklyNewsletter]}
                  onChange={onCheck}
                />
                Weekly Newsletter
              </label>
              <label className="form-checkbox-label">
                <input
                  type="checkbox"
                  name={NewsletterInputs.termsAndConditions}
                  className="form-checkbox"
                  required
                  checked={values[NewsletterInputs.termsAndConditions]}
                  onChange={onCheck}
                />
                Agree to terms and conditions
              </label>
            </section>
          </div>
          <section className="form-buttons-container">
            <button type="submit" className="form-submit-button">
              SUBSCRIBE
            </button>
            <button className="form-cancel-button" onClick={onReset}>
              NO THANKS
            </button>
          </section>
        </form>
      )}
    </>
  );
};

export default Timeline;
