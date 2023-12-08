import { useForm } from "@formspree/react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { General } from "../../models";

const useRequestForm = () => {
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

  return { formikForm, state };
};

export default useRequestForm;
