'use client'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from '../../../styles/forms/FormShipment.module.scss';

// Esquema de validación con Yup
const ShipmentSchema = Yup.object().shape({
  recipientName: Yup.string().required("Recipient name is required"),
  address: Yup.string().required("Address is required"),
  country: Yup.string().required("Country is required"),
  city: Yup.string().required("City is required"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Phone must be a number")
    .required("Phone is required"),
});

function ShipmentForm() {
  return (
    <Formik
      initialValues={{
        recipientName: "",
        address: "",
        country: "",
        city: "",
        phone: "",
      }}
      validationSchema={ShipmentSchema}
      onSubmit={(values) => {
        // Manejar la sumisión del formulario
        console.log(values);
      }}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="recipientName">Recipient Name</label>
            <Field
              type="text"
              name="recipientName"
              className={styles.inputField}
            />
            <ErrorMessage
              name="recipientName"
              component="div"
              className={styles.error}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="address">Address</label>
            <Field type="text" name="address" className={styles.inputField} />
            <ErrorMessage name="address" component="div" className={styles.error} />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="country">Country</label>
            <Field type="text" name="country" className={styles.inputField} />
            <ErrorMessage name="country" component="div" className={styles.error} />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="city">City</label>
            <Field type="text" name="city" className={styles.inputField} />
            <ErrorMessage name="city" component="div" className={styles.error} />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone</label>
            <Field type="text" name="phone" className={styles.inputField} />
            <ErrorMessage name="phone" component="div" className={styles.error} />
          </div>

          <button type="submit" disabled={isSubmitting} className={styles.submitBtn}>
            Use Profile
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default ShipmentForm;
