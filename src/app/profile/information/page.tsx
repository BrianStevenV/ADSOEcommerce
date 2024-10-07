'use client'

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Image from "next/image";

import styles from '../../../../styles/profile/ProfileInformationPage.module.scss';

const ProfileInformationSchema = Yup.object().shape({
    country: Yup.string().required("Country is required"),
    region: Yup.string().required("Region is required"),
    addresses: Yup.string().required("Addresses are required"),
    birthday: Yup.string().required("Birthday is required"),
    phone: Yup.string().required("Phone is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
});

function ProfileInformationPage() {
    return (
        <div className={styles.container}>
            <section className={styles.formSection}>
                <Formik
                    initialValues={{
                        country: "",
                        region: "",
                        addresses: "",
                        birthday: "",
                        phone: "",
                        email: "",
                        password: ""
                    }}
                    validationSchema={ProfileInformationSchema}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {() => (
                        <Form className={styles.form}>
                            <div className={styles.formField}>
                                <label htmlFor="country">COUNTRY</label>
                                <Field type="text" name="country" />
                                <ErrorMessage name="country" component="div" className={styles.error} />
                            </div>

                            <div className={styles.formField}>
                                <label htmlFor="region">REGION</label>
                                <Field type="text" name="region" />
                                <ErrorMessage name="region" component="div" className={styles.error} />
                            </div>

                            <div className={styles.formField}>
                                <label htmlFor="addresses">ADDRESSES</label>
                                <Field type="text" name="addresses" />
                                <ErrorMessage name="addresses" component="div" className={styles.error} />
                            </div>

                            <div className={styles.formField}>
                                <label htmlFor="birthday">BIRTHDAY</label>
                                <Field type="date" name="birthday" />
                                <ErrorMessage name="birthday" component="div" className={styles.error} />
                            </div>

                            <div className={styles.formField}>
                                <label htmlFor="phone">PHONE</label>
                                <Field type="text" name="phone" />
                                <ErrorMessage name="phone" component="div" className={styles.error} />
                            </div>

                            <div className={styles.formField}>
                                <label htmlFor="email">EMAIL</label>
                                <Field type="email" name="email" />
                                <ErrorMessage name="email" component="div" className={styles.error} />
                            </div>

                            <div className={styles.formField}>
                                <label htmlFor="password">PASSWORD</label>
                                <Field type="password" name="password" />
                                <ErrorMessage name="password" component="div" className={styles.error} />
                            </div>

                            <button type="submit" className={styles.submitButton}>Change</button>
                        </Form>
                    )}
                </Formik>
            </section>

            <section className={styles.profileSection}>
                <div className={styles.profileImage}>
                    <Image src="/user 2.png" alt="Profile" width={300} height={300} />
                </div>
                <div className={styles.profileInfo}>
                    <h1>Test Test Test Test</h1>
                    <p>Admin | Customer | ...</p>
                </div>
            </section>
        </div>
    );
}

export default ProfileInformationPage;