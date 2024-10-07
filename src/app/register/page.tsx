'use client'

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import styles from '../../../styles/register/RegisterPage.module.scss'; // Asegúrate de que la ruta sea correcta

const RegisterUserSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    firstSurname: Yup.string().required("First surname is required"),
    lastSurname: Yup.string().required("Last surname is required"),
    country: Yup.string().required("Country is required"),
    region: Yup.string().required("Region is required"),
    addresses: Yup.string().required("Addresses are required"),
    birthday: Yup.string().required("Birthday is required"),
    phone: Yup.string().required("Phone is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], "Passwords must match")
        .required("Confirm password is required"),
});

function RegisterPage() {
    return (
        <div className={styles.container}>
            <section className={styles.formSection}>
                <h1>Create Account</h1>
                <Formik
                    initialValues={{
                        firstName: "",
                        lastName: "",
                        firstSurname: "",
                        lastSurname: "",
                        country: "",
                        region: "",
                        addresses: "",
                        birthday: "",
                        phone: "",
                        email: "",
                        password: "",
                        confirmPassword: "",
                    }}
                    validationSchema={RegisterUserSchema}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {() => (
                        <Form className={styles.form}>
                            <div className={styles.formField}>
                                <label htmlFor="firstName">First Name</label>
                                <Field type="text" name="firstName" />
                                <ErrorMessage name="firstName" component="div" className={styles.error} />
                            </div>

                            <div className={styles.formField}>
                                <label htmlFor="lastName">Last Name</label>
                                <Field type="text" name="lastName" />
                                <ErrorMessage name="lastName" component="div" className={styles.error} />
                            </div>

                            <div className={styles.formField}>
                                <label htmlFor="firstSurname">First Surname</label>
                                <Field type="text" name="firstSurname" />
                                <ErrorMessage name="firstSurname" component="div" className={styles.error} />
                            </div>

                            <div className={styles.formField}>
                                <label htmlFor="lastSurname">Last Surname</label>
                                <Field type="text" name="lastSurname" />
                                <ErrorMessage name="lastSurname" component="div" className={styles.error} />
                            </div>

                            <div className={styles.formField}>
                                <label htmlFor="country">Country</label>
                                <Field type="text" name="country" />
                                <ErrorMessage name="country" component="div" className={styles.error} />
                            </div>

                            <div className={styles.formField}>
                                <label htmlFor="region">Region</label>
                                <Field type="text" name="region" />
                                <ErrorMessage name="region" component="div" className={styles.error} />
                            </div>

                            <div className={styles.formField}>
                                <label htmlFor="addresses">Addresses</label>
                                <Field type="text" name="addresses" />
                                <ErrorMessage name="addresses" component="div" className={styles.error} />
                            </div>

                            <div className={styles.formField}>
                                <label htmlFor="birthday">Birthday</label>
                                <Field type="date" name="birthday" />
                                <ErrorMessage name="birthday" component="div" className={styles.error} />
                            </div>

                            <div className={styles.formField}>
                                <label htmlFor="phone">Phone</label>
                                <Field type="text" name="phone" />
                                <ErrorMessage name="phone" component="div" className={styles.error} />
                            </div>

                            <div className={styles.formField}>
                                <label htmlFor="email">Email</label>
                                <Field type="email" name="email" />
                                <ErrorMessage name="email" component="div" className={styles.error} />
                            </div>

                            <div className={styles.formField}>
                                <label htmlFor="password">Password</label>
                                <Field type="password" name="password" />
                                <ErrorMessage name="password" component="div" className={styles.error} />
                            </div>

                            <div className={styles.formField}>
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <Field type="password" name="confirmPassword" />
                                <ErrorMessage name="confirmPassword" component="div" className={styles.error} />
                            </div>

                            <button type="submit" className={styles.submitButton}>Register</button>
                        </Form>
                    )}
                </Formik>
            </section>

            <figure className={styles.imageSection}>
                <Image
                    src="/register.png"
                    alt="Register"
                    width={800} // Ajusta el ancho como necesites
                    height={100}
                    objectFit="cover"
                />
            </figure>
        </div>
    );
}

export default RegisterPage;
