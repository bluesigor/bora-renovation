import { useAppContext } from "../../context/AppContext";

import close from "../../assets/images/quote/close-icon.svg";
import google from "../../assets/images/reviews/google.svg";
import facebook from "../../assets/images/reviews/facebook.svg";

const LeaveReview = () => {
  const { isModalOpen, modalType, closeModal } = useAppContext();

  return (
    <>
      {modalType === "review" && isModalOpen && (
        <div className="leave-review">
          <div className="leave-review-content">
            <div className="leave-review-content-top">
              <button
                onClick={closeModal}
                className="quote-modal-content-top__btn-close">
                <img src={close} alt="close" />
              </button>
            </div>
            <div className="leave-review-content-header">
              <p className="leave-review-content-header__main">
                Bora Renovations
              </p>
              <p className="leave-review-content-header__sub">
                has more than 60+ reviews <br /> left by highly satisfied <br />
                customers
              </p>
            </div>
            <div className="leave-review-content-desc">
              <p className="leave-review-content-desc__text">
                Leave a review on one of <br /> the platforms that is most{" "}
                <br />
                convenient for you
              </p>
            </div>
            <div className="leave-review-content-social">
              <a href="https://www.google.com/search?q=bora+renovation&oq=bora+&aqs=chrome.1.69i59l2j35i19i39j69i60j69i61j69i60l3.3632j0j4&sourceid=chrome&ie=UTF-8#lrd=0x89c6e39f182ef821:0xa085e036b2fe82ef,1,,,">
                <img src={google} alt="google" />
              </a>
              <a href="https://www.facebook.com/BoraRenovations">
                <img src={facebook} alt="facebook" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LeaveReview;
