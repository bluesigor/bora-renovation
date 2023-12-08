import { toast } from "react-hot-toast";
import classNames from "classnames";

import { useAppContext } from "../../context/AppContext";

import useRequestForm from "../../core/hooks/useRequestForm";

import close from "../../assets/images/quote/close-icon.svg";

const QuotePopup = () => {
  const { formikForm, state } = useRequestForm();

  const { isModalOpen, closeModal, modalType } = useAppContext();

  if (isModalOpen && modalType === "quote") {
    if (state.succeeded) {
      return null;
    }
    return (
      <div className="quote-modal">
        <div className="quote-modal-content">
          <div className="quote-modal-content-top">
            <button
              type="button"
              onClick={closeModal}
              className="quote-modal-content-top__btn-close">
              <img src={close} alt="close" />
            </button>
          </div>
          <div className="quote-modal-content-head">
            <p className="quote-modal-content-head__title">Get a quote</p>
            <p className="quote-modal-content-head__desc">
              We will get in touch with you shortly.
            </p>
          </div>
          <form
            action="https://formspree.io/f/xyyarpqp"
            onSubmit={formikForm.handleSubmit}
            className="quote-modal-content__modal-form modal-form">
            <div className="modal-form-inputs">
              <label className="inp-wrapper">
                <input
                  id="name"
                  type="text"
                  placeholder="First Name"
                  className="modal-form-inputs__item"
                  {...formikForm.getFieldProps("full_name")}
                />
                {formikForm.errors.full_name && formikForm.errors.full_name && (
                  <p className="error-msg">{formikForm.errors.full_name}</p>
                )}
              </label>
              <label className="inp-wrapper">
                <input
                  id="number"
                  type="number"
                  placeholder="Phone number"
                  className="modal-form-inputs__item"
                  {...formikForm.getFieldProps("phone")}
                />
                {formikForm.errors.phone && formikForm.errors.phone && (
                  <p className="error-msg">{formikForm.errors.phone}</p>
                )}
              </label>
              <label className="inp-wrapper">
                <input
                  id="email"
                  type="email"
                  placeholder="e-mail"
                  className="modal-form-inputs__item"
                  {...formikForm.getFieldProps("email")}
                />
                {formikForm.errors.email && formikForm.errors.email && (
                  <p className="error-msg">{formikForm.errors.email}</p>
                )}
              </label>
            </div>
            <textarea
              id="message"
              className="modal-form__review"
              placeholder="MESSAGE..."
              {...formikForm.getFieldProps("text")}
            />
            <div className="modal-form__submit-block">
              <button
                onClick={() =>
                  state.succeeded &&
                  toast("Thank you! We will get back to you shortly")
                }
                disabled={state.submitting}
                type="submit"
                className={classNames({
                  "modal-form__submit-block-btn": true,
                  "modal-form__submit-block-btn-not-active":
                    !formikForm.isValid,
                })}>
                <span className="modal-form__submit-block-btn-txt">
                  Get a qoute
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return null;
};

export default QuotePopup;
