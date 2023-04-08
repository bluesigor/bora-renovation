import { useForm } from "@formspree/react";

import { useAppContext } from "../../context/AppContext";
import close from "../../assets/images/quote/close-icon.svg";

const QuotePopup = () => {
  const [state, handleSubmit] = useForm("mqkoqvra");
  const { isModalOpen, closeModal, modalType } = useAppContext();

  if (isModalOpen && modalType === "quote") {
    if (state.succeeded) {
      return <p>Thanks for joining!</p>;
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
            <p className="quote-modal-content-head__desc">Estimate request</p>
          </div>
          <form
            action="https://formspree.io/f/mqkoqvra"
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
              placeholder="Write your message..."
            />
            <div className="modal-form__submit-block">
              <button
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
