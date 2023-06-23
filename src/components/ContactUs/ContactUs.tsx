import instagram from "../../assets/images/contact/inst.svg";
import facebook from "../../assets/images/contact/facebook.svg";
import location from "../../assets/images/contact/location.svg";
import mail from "../../assets/images/contact/mail.svg";
import phone from "../../assets/images/contact/phone.svg";

const ContactUs = () => {
  return (
    <section className="contact">
      <div className="contact-wrapper">
        <div className="contact-wrapper-form">
          <div className="contact-wrapper-form-header">
            <h5 className="contact-wrapper-form-header__txt">Contact us</h5>
          </div>
          <div className="contact-wrapper-form-main">
            <div className="contact-wrapper-form-main__item">
              <img src={location} alt="location" />
              <a
                href="https://goo.gl/maps/qFxRCSwNnWgHyHBJ9"
                rel="noreferrer"
                target="_blank">
                Chester County, PA <br />
                Delaware County, PA <br />
                New Castle County, DE
              </a>
            </div>
            <div className="contact-wrapper-form-main__item">
              <img src={mail} alt="mail" />
              <a href="mailto:info@borarenovation.com">
                info@borarenovation.com
              </a>
            </div>
            <div className="contact-wrapper-form-main__item">
              <img src={phone} alt="phone" />
              <a href="tel:+13022441338">302-244-1338</a>
            </div>
          </div>
          <div className="contact-wrapper-form__footer">
            {/* <h6 className="contact-wrapper-form__footer-title">Follow us!</h6> */}
            <div className="contact-wrapper-form__footer-social">
              <a
                href="https://instagram.com/bora_renovation?igshid=MzRlODBiNWFlZA=="
                rel="noreferrer"
                target="_blank">
                <img src={instagram} alt="instagram" />
              </a>
              <a
                href="https://www.facebook.com/BoraRenovation?mibextid=LQQJ4d"
                rel="noreferrer"
                target="_blank">
                <img src={facebook} alt="facebook" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
