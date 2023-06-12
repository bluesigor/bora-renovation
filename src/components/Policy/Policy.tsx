import { useEffect } from "react";
import { useForm } from "@formspree/react";

import { useAppContext } from "../../context/AppContext";

import online from "../../assets/images/questions/online-dark.svg";

import { goToTop } from "../../core/helpers/goToTop";

const Policy = () => {
  const [state, handleSubmit] = useForm("mqkoqvra");
  const { setIsModalOpen, setModalType } = useAppContext();

  useEffect(() => {
    goToTop();
  }, []);

  return (
    <section className="policy">
      <div className="policy-head">
        <h5 className="policy-head__title">
          Privacy Policy
          <br />
          for Bora Renovation, LLC
        </h5>
        <p className="policy-head__subtitle">
          Last updated January 01, 2022 At Bora Renovation, LLC accessible from{" "}
          <a
            target="_blank"
            href="https://bora-renovation.netlify.app/"
            rel="noreferrer"
            className="policy-head__subtitle-link">
            https://bora-renovation.netlify.app/
          </a>{" "}
          , one of our main priorities is the privacy of our visitors. We are
          committed to protecting your personal information and your right to
          privacy. If you have additional questions or require more information
          about our Privacy Policy, do not hesitate to contact us at{" "}
          <a
            className="policy-head__subtitle-link"
            href="mailto:info@borarenovation.com">
            info@borarenovation.com
          </a>{" "}
          .
        </p>
      </div>
      <div className="policy-comunicate">
        <button
          onClick={() => {
            setModalType("quote");
            setIsModalOpen(true);
          }}
          className="policy-comunicate__btn">
          <span className="policy-comunicate__btn-txt">
            Get more information
          </span>
        </button>
      </div>
      <main className="policy-main">
        <p className="policy-main__first">
          Please read this privacy notice carefully, as it will help you
          understand how we might use your information if you visit our website
          at www.borarenovation.com and provide us with certain personally
          identifiable information that can be used to contact or identify you.
        </p>
        <div className="policy-main__second">
          <h6 className="policy-main__second-title">
            WHAT INFORMATION DO WE COLLECT?
          </h6>
          <p className="policy-main__second-txt">
            We collect personal information that you voluntarily provide to us
            directly via the website when you fill out forms or subscribe to our
            newsletter. <br /> The personal information we collect may include
            the following:
          </p>
          <ul className="policy-main__second-list">
            <li className="policy-main__second-list__item">
              First name and last name,
            </li>
            <li className="policy-main__second-list__item">Phone number,</li>
            <li className="policy-main__second-list__item">Email address,</li>
            <li className="policy-main__second-list__item">
              Contact preferences.{" "}
            </li>
          </ul>
          <p className="policy-main__second-txt">
            We may also collect device information like your browser type and
            language, hardware model, and operating system. But we will treat
            this information as personal information. <br /> Like any other
            website, Bora Renovation, LLC uses ‘cookies’. Cookies allow us to
            recognize your device while you are on our website and help
            customize our web page content based on visitors’ browser type
            and/or other information, make your experience better, such as
            making it faster, easier, and more efficient. Most web browsers
            (such as Microsoft Internet Explorer, Google Chrome, Firefox and
            Apple Safari) accept cookies by default. You can instruct your
            browser, by changing its settings, to decline or delete cookies. If
            you use multiple browsers on your device, you will need to instruct
            each browser separately. For more general information on cookies,
            please read the “What Are Cookies” article on Cookie Consent
            website.
          </p>
        </div>
        <div className="policy-main__third">
          <h6 className="policy-main__second-title">
            HOW DO WE USE YOUR INFORMATION?
          </h6>
          <p className="policy-main__second-txt">
            Bora Renovation, LLC use personal information collected via our
            website for a variety of business purposes described below:
          </p>
          <ul className="policy-main__second-list">
            <li className="policy-main__second-list__item">
              Reply to your questions,
            </li>
            <li className="policy-main__second-list__item">
              Provide you with a quote,
            </li>
            <li className="policy-main__second-list__item">
              Provide customer support,
            </li>
            <li className="policy-main__second-list__item">
              Schedule service,
            </li>
            <li className="policy-main__second-list__item">
              Provide you with the requested service,
            </li>
            <li className="policy-main__second-list__item">
              Offer you discounts,
            </li>
            <li className="policy-main__second-list__item">
              Contact you with promotional materials and other information.
            </li>
          </ul>
        </div>
        <div className="policy-main__second">
          <h6 className="policy-main__second-title">
            WILL YOUR INFORMATION BE SHARED WITH ANYONE?
          </h6>
          <p className="policy-main__second-txt">
            We will ensure that your data is treated securely and in accordance
            with this Privacy Policy. We never sell, trade or rent your personal
            or non-personal information to any other companies or persons. Your
            personal information is only saved on our database.
          </p>
        </div>
        <div className="policy-main__second">
          <h6 className="policy-main__second-title">CHILDREN'S PRIVACY</h6>
          <p className="policy-main__second-txt">
            Our website is directed toward and designed for use by persons aged
            18 or older. We encourage parents and guardians to observe,
            participate in and guide their online activity. Bora Renovation, LLC
            does not knowingly collect any Personal Identifiable Information
            from children under the age of 16. If you think that your child
            provided this kind of information on our website you may request
            that the child's information be corrected or deleted from our files
            by contacting us.
          </p>
        </div>
        <div className="policy-main__second">
          <h6 className="policy-main__second-title">CONTACT US</h6>
          <p className="policy-main__second-txt">
            This Privacy Policy applies only to our online activities and is
            valid for visitors to our website with regards to the information
            that they shared in Bora Renovation. This policy is not applicable
            to any information collected offline or via channels other than this
            website. By using our website, you consent to our Privacy Policy.{" "}
            <br />
            If you have questions or comments about this Privacy Policy, please
            contact us:
          </p>
          <ul className="policy-main__second-list">
            <li className="policy-main__second-list__item">
              Via Website:{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://bora-renovation.netlify.app/">
                https://bora-renovation.netlify.app/
              </a>
            </li>
            <li className="policy-main__second-list__item">
              Via Email:{" "}
              <a href="mailto:info@borarenovation.com">
                info@borarenovation.com
              </a>
            </li>
          </ul>
        </div>
        <div className="policy-main-form">
          <div className="quest-banner-bottom-header">
            <img
              src={online}
              alt="mob_online"
              className="quest-banner-bottom-form-control-moblogo"
            />
            <h4 className="policy-main-form__title">Do you have questions?</h4>
            <p className="policy-main-form__sub">
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
                <input
                  type="text"
                  placeholder="Name"
                  id="name"
                  name="Name"
                  className="policy-main-form__input"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  id="name"
                  name="Phone"
                  className="policy-main-form__input"
                />
                <input
                  type="text"
                  placeholder="E-mail*"
                  id="name"
                  name="Email"
                  className="policy-main-form__input"
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

                  <button
                    className="quest-banner-bottom-form-control__submit"
                    type="submit">
                    <span>Submit</span>
                  </button>
                </div>
                <span className="policy-main-form-mob__sub">
                  We will contact you as soon as possible and provide you with a
                  free quote.
                </span>
              </div>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Policy;
