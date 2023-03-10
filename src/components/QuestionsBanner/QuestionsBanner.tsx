import { useForm } from "@formspree/react";

import online from "../../assets/images/questions/online.svg";
import mob_online from "../../assets/images/questions/mob-online.svg";

const QuestionsBanner = () => {
  const [state, handleSubmit] = useForm("mqkoqvra");

  return (
    <section className="quest">
      <div className="quest-banner">
        <div className="quest-banner-top">
          <div className="quest-banner-top__card">
            <h1 className="quest-banner-top__card-title">5+</h1>
            <p className="quest-banner-top__card-desc">
              years of relevant experience
            </p>
          </div>
          <div className="quest-banner-top__card">
            <h1 className="quest-banner-top__card-title">60+</h1>
            <p className="quest-banner-top__card-desc">five-star reviews</p>
          </div>
          <div className="quest-banner-top__card">
            <h1 className="quest-banner-top__card-title">300+</h1>
            <p className="quest-banner-top__card-desc">
              highly satisfied customers
            </p>
          </div>
        </div>
        <div className="quest-banner-bottom">
          <div className="quest-banner-bottom-header">
            <h4 className="quest-banner-bottom-header__title">
              Do you have questions?
            </h4>
            <p className="quest-banner-bottom-header__desc">
              We will contact you as soon as possible and provide you with a
              free quote.
            </p>
          </div>
          <div className="quest-banner-bottom-wrapper">
            <form
              action="https://formspree.io/f/mqkoqvra"
              onSubmit={handleSubmit}
              className="quest-banner-bottom-form">
              <div className="quest-banner-bottom-form-inputs">
                <input type="text" placeholder="Name" id="name" name="Name" />
                <input type="text" placeholder="Phone" id="name" name="Phone" />
                <input
                  type="text"
                  placeholder="E-mail*"
                  id="name"
                  name="Email"
                />
                <button
                  disabled={state.submitting}
                  type="submit"
                  className="quest-banner-bottom-form-inputs__submit-mob">
                  <span>Submit</span>
                </button>
              </div>
              <div className="quest-banner-bottom-form-wrapper">
                <div className="quest-banner-bottom-form-control">
                  <img
                    src={online}
                    alt="online"
                    className="quest-banner-bottom-form-control-logo"
                  />
                  <img
                    src={mob_online}
                    alt="mob_online"
                    className="quest-banner-bottom-form-control-moblogo"
                  />
                  <button
                    className="quest-banner-bottom-form-control__submit"
                    type="submit">
                    <span>Submit</span>
                  </button>
                </div>
                <span className="quest-banner-bottom-form-wrapper-txt">
                  We will contact you as soon as possible and provide you with a
                  free quote.
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionsBanner;
