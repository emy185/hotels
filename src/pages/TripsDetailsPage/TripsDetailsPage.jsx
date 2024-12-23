import React from "react";
import style from "./TripsDetails.module.css";
import DistinationHeader from "../../Components/DistinationHeader/DistinationHeader";
import { Container, Row, Col } from "react-bootstrap";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import data from "../../assets/data/Data.json";



const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters long"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  title: Yup.string().required("Title is required"),
  comment: Yup.string().required("Comment is required"),
});

const TripsDetailsPage = () => {
  const trip = data.tripPosts[2];

  if (!trip) {
    return <div>Trip not found</div>;
  }
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);

    resetForm();
    toast.success("Form submitted successfully!");
  };

  return (
    <>
      <DistinationHeader title={trip.title} subtitle={trip.description} />
      <div className={style.container}>
        <div className={style.mainContant}>
          <Container>
            <Row>
              <Col>
                <h2>The Brazen Bash</h2>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ratione, quidem voluptate consequuntur ad excepturi quia in sed qui laborum id corporis eveniet iste ipsa explicabo, recusandae hic officia ex quod dignissimos expedita rerum aliquam. Iure excepturi placeat odio inventore commodi quas repellat. Eligendi iure at voluptas nobis quam magnam assumenda ea blanditiis minima. </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <ul>
                  <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                  <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                  <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                  <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                </ul>
              </Col>
            </Row>
            <Row className={style.note}>
              <Col lg={1} className="pb-lg-5">
                <i class="fa-solid fa-quote-left"></i>
              </Col>
              <Col lg={11} >
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nulla animi voluptatum pariatur cumque temporibus quasi mollitia labore quam exercitationem. Autem nulla animi voluptatum pariatur cumque temporibus quasi mollitia labore quam exercitationem."</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ratione, quidem voluptate consequuntur ad excepturi quia in sed qui laborum id corporis eveniet iste ipsa explicabo, recusandae hic officia ex quod dignissimos expedita rerum aliquam. Iure excepturi placeat odio inventore commodi quas repellat. Eligendi iure at voluptas nobis quam magnam assumenda ea blanditiis minima. </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p> Error magni eveniet blanditiis vitae. Rem, atque, provident culpa harum dicta aperiam suscipit doloribus quo in sit tenetur! Ratione dolor, perspiciatis eius animi expedita commodi iure quae soluta, quis rem voluptatem nisi, quaerat non. Ipsum libero quibusdam ipsa totam exercitationem doloremque commodi. </p>
              </Col>
            </Row>
            <Row className={style.tripImges}>
              <Col lg={6} className={style.tripImg}>
                <img src={require(`../../assets/images/${trip.detailsImage1}`)} alt="Trip image1" />
                <p>Lorem ipsum dolor sit amet.</p>
              </Col>
              <Col lg={6} className={style.tripImg}>
                <img src={require(`../../assets/images/${trip.detailsImage2}`)} alt="Trip image2" />
                <p>Lorem ipsum dolor sit amet.</p>
              </Col>
            </Row>

            <Row>
              <Col>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eius nulla minima mollitia doloribus est vel officiis, ad in, culpa ab ipsum ducimus eos. Recusandae numquam nihil neque unde ipsa quibusdam harum pariatur tempore. Ex, aperiam, deleniti officia qui fugit placeat molestiae excepturi optio repudiandae numquam maxime non! Distinctio magnam voluptates ad. Magni assumenda facere reiciendis asperiores rerum impedit placeat sunt. Culpa sapiente cupiditate, necessitatibus iusto tempora debitis quia non veniam reiciendis nostrum, recusandae iure, incidunt optio. Doloremque facilis assumenda fuga, quidem corrupti, nobis in aliquid voluptatibus vitae atque corporis id. Voluptas ea repellendus distinctio quas saepe exercitationem ratione unde. </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p> Error magni eveniet blanditiis vitae. Rem, atque, provident culpa harum dicta aperiam suscipit doloribus quo in sit tenetur! Ratione dolor, perspiciatis eius animi expedita commodi iure quae soluta, quis rem voluptatem nisi, quaerat non. Ipsum libero quibusdam ipsa totam exercitationem doloremque commodi. </p>
              </Col>
            </Row>
            <Row className={`${style.social} d-flex justify-content-between align-items-center`}>
              <Col lg={6} className={`${style.icons} d-flex justify-content-start `}>
                <Col lg={1}>
                  <div className={style.icon}>
                    <i class="fa-brands fa-facebook-f"></i>
                  </div>
                </Col>
                <Col lg={1}>
                  <div className={style.icon}>
                    <i class="fa-brands fa-twitter"></i>
                  </div>
                </Col>
                <Col lg={1}>
                  <div className={style.icon}>
                    <i class="fa-brands fa-instagram"></i>
                  </div>
                </Col>
                <Col lg={1}>
                  <div className={style.icon}>
                    <i class="fa-brands fa-linkedin"></i>
                  </div>
                </Col>
              </Col>
              <Col lg={6} className={`${style.skills} d-flex justify-content-end`}>
                <Col lg={3}>
                  <div className={`${style.adv} text-center`}>
                    <a href="#s">Culture</a>
                  </div>
                </Col>
                <Col lg={3}>
                  <div className={`${style.adv} text-center`} center>
                    <a href="#s">Nature</a>
                  </div>
                </Col>
                <Col lg={3}>
                  <div className={`${style.adv} text-center`}>
                    <a href="#s">Advanture</a>
                  </div>
                </Col>
              </Col>
            </Row>
            <hr className={style.hr} />
            <Formik
              initialValues={{ name: "", email: "", title: "", comment: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isValid, dirty }) => (
                <FormikForm>
                  <Row className="mb-3">
                    <Col lg={6}>
                      <Field
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="form-control"
                      />
                      <ErrorMessage name="name" component="div" className="text-danger" />
                    </Col>
                    <Col lg={6}>
                      <Field
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-danger"
                      />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col>
                      <Field
                        type="text"
                        name="title"
                        placeholder="Title"
                        className="form-control"
                      />
                      <ErrorMessage name="title" component="div" className="text-danger" />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col>
                      <Field
                        as="textarea"
                        name="comment"
                        placeholder="Comment"
                        rows={4}
                        className="form-control"
                      />
                      <ErrorMessage
                        name="comment"
                        component="div"
                        className="text-danger"
                      />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col lg={3}>
                      <button
                        type="submit"
                        className={`${style.btnSubmit} btn w-100`}
                        disabled={!(dirty && isValid)}
                      >
                        Post Comment <i className="fa-solid fa-arrow-up-long"></i>
                      </button>
                    </Col>
                  </Row>
                </FormikForm>
              )}
            </Formik>

            <ToastContainer />
          </Container>

        </div>

      </div>
    </>
  );
};

export default TripsDetailsPage;
