import { useForm } from "@formspree/react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";

import online from "../../assets/images/questions/online.svg";
import { General } from "../../models";

const QuestionsBanner = () => {
  const [state, handleSubmit] = useForm("xyyarpqp");

  const valueFormValidationSchema = Yup.object().shape({
    full_name: Yup.string().required("This field is required"),
    email: Yup.string()
      .required("This field is required")
      .email("Invalid email"),
    phone: Yup.string()
      .required("This field is required")
      .min(9, "Minimum 9 digits"),
  });

  const formikForm = useFormik<General.Quote>({
    initialValues: {
      full_name: "",
      email: "",
      phone: "",
      text: "",
    },
    validationSchema: valueFormValidationSchema,
    onSubmit: async (values: any) => {
      handleSubmit(values);
    },
  });

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
          <div
            className="quest-banner-bottom-header"
            style={{
              border: "none",
            }}>
            <h4
              className="quest-banner-bottom-header__title"
              style={{
                marginBottom: "30px",
              }}>
              Do you have any questions?
            </h4>
            {/* <img
              src={mob_online}
              alt="mob_online"
              className="quest-banner-bottom-form-control-moblogo"
            /> */}
            <p className="quest-banner-bottom-header__desc">
              We will contact you as soon as possible and provide you with a
              free quote.
            </p>
          </div>
          <div className="quest-banner-bottom-wrapper">
            <form
              action="https://formspree.io/f/xyyarpqp"
              onSubmit={formikForm.handleSubmit}
              className="quest-banner-bottom-form">
              <div className="quest-banner-bottom-form-inputs">
                <label className="inp-wrapper">
                  <input
                    type="text"
                    placeholder="Name"
                    id="name"
                    {...formikForm.getFieldProps("full_name")}
                  />
                  {formikForm.errors.full_name &&
                    formikForm.errors.full_name && (
                      <p className="error-massage">
                        {formikForm.errors.full_name}
                      </p>
                    )}
                </label>
                <label className="inp-wrapper">
                  <input
                    type="number"
                    placeholder="Phone"
                    id="name"
                    {...formikForm.getFieldProps("phone")}
                  />
                  {formikForm.errors.phone && formikForm.errors.phone && (
                    <p className="error-massage">{formikForm.errors.phone}</p>
                  )}
                </label>
                <label className="inp-wrapper">
                  <input
                    type="text"
                    placeholder="E-mail*"
                    id="name"
                    {...formikForm.getFieldProps("email")}
                  />
                  {formikForm.errors.email && formikForm.errors.email && (
                    <p className="error-massage">{formikForm.errors.email}</p>
                  )}
                </label>
                <button
                  onClick={() =>
                    state.succeeded &&
                    toast("Thank you! We will get back to you shortly")
                  }
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
