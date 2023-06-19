import { useForm } from "@formspree/react";

import { useAppContext } from "../../context/AppContext";
import close from "../../assets/images/quote/close-icon.svg";
import { toast } from "react-hot-toast";

const QuotePopup = () => {
  const [state, handleSubmit] = useForm("xyyarpqp");
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
            onSubmit={handleSubmit}
            className="quote-modal-content__modal-form modal-form">
            <div className="modal-form-inputs">
              <input
                id="name"
                name="First Name"
                type="text"
                placeholder="First Name"
                className="modal-form-inputs__item"
              />
              <input
                id="number"
                name="Phone number"
                type="text"
                placeholder="Phone number"
                className="modal-form-inputs__item"
              />
              <input
                id="email"
                name="email"
                type="email"
                placeholder="e-mail"
                className="modal-form-inputs__item"
              />
            </div>
            <textarea
              id="message"
              name="message"
              className="modal-form__review"
              placeholder="MESSAGE..."
            />
            <div className="modal-form__submit-block">
              <button
                onClick={() =>
                  toast("Thank you! We will get back to you shortly")
                }
                disabled={state.submitting}
                type="submit"
                className="modal-form__submit-block-btn">
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
