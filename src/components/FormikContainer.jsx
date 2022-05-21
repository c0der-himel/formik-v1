import { Formik, Form } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import FormikControl from './FormikControl';
import moment from 'moment';

const FormikContainer = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const professionOptions = [
    { key: 'Select an option', value: '' },
    { key: 'Student', value: 'student' },
    { key: 'Engineer', value: 'engineer' },
  ];

  const genderOptions = [
    { key: 'Female', value: 'female' },
    { key: 'Male', value: 'male' },
  ];

  const techStackOptions = [
    { key: 'React', value: 'react' },
    { key: 'Node', value: 'node' },
    { key: 'MongoDb', value: 'mongodb' },
  ];

  const foodOptions = [
    { value: 'chocolate', label: '🍫Chocolate' },
    { value: 'strawberry', label: '🍓Strawberry' },
    { value: 'pizza', label: '🍕Pizza' },
  ];

  const initialValues = {
    username: '',
    age: '',
    email: '',
    bio: '',
    professionOption: '',
    genderOption: '',
    techStackOption: [],
    date: '',
    foodOption: selectedOption,
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Required'),
    age: Yup.number().integer().positive().nullable().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    bio: Yup.string().required('Required'),
    professionOption: Yup.string().required('Required'),
    genderOption: Yup.string().required('Required'),
    techStackOption: Yup.array().min(2, 'Check at least 2 items'),
    date: Yup.date().required('Required'),
    foodOption: Yup.array()
      .min(2, 'select at least 2 options')
      .nullable()
      .required('Required'),
  });

  const onSubmit = (values) => {
    console.log('values: ', values);
    console.log('date: ', moment(values.date._d).format('DD-MM-YYYY HH:mm:ss'));
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-6 offset-3">
            <div className="form-content rounded-3 shadow-lg m-5 p-5">
              <div className="row">
                <div className="col">
                  <div className="title text-center mb-4">
                    <h3>Developer Profile</h3>
                    <hr />
                  </div>
                </div>
              </div>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {({ errors, touched, isValid }) => (
                  <Form>
                    <div className="row">
                      <div className="col-12">
                        <FormikControl
                          control="input"
                          type="text"
                          label="Username"
                          required={true}
                          name="username"
                          errors={errors.username}
                          touched={touched.username}
                        />
                      </div>
                      <div className="col-12">
                        <FormikControl
                          control="input"
                          type="number"
                          label="Age"
                          required={true}
                          name="age"
                          errors={errors.age}
                          touched={touched.age}
                        />
                      </div>
                      <div className="col-12">
                        <FormikControl
                          control="radio"
                          label="Gender"
                          required={true}
                          name="genderOption"
                          errors={errors.genderOption}
                          touched={touched.genderOption}
                          options={genderOptions}
                        />
                      </div>
                      <div className="col-12">
                        <FormikControl
                          control="date"
                          label="Date of birth"
                          required={true}
                          name="date"
                          errors={errors.date}
                          touched={touched.date}
                        />
                      </div>
                      <div className="col-12">
                        <FormikControl
                          control="input"
                          type="email"
                          label="Email"
                          required={true}
                          name="email"
                          errors={errors.email}
                          touched={touched.email}
                        />
                      </div>
                      <div className="col-12">
                        <FormikControl
                          control="select"
                          as="select"
                          label="Profession"
                          required={true}
                          name="professionOption"
                          errors={errors.professionOption}
                          touched={touched.professionOption}
                          options={professionOptions}
                        />
                      </div>
                      <div className="col-12">
                        <FormikControl
                          control="checkbox"
                          label="Tech Stack"
                          required={true}
                          name="techStackOption"
                          errors={errors.techStackOption}
                          touched={touched.techStackOption}
                          options={techStackOptions}
                        />
                      </div>
                      <div className="col-12">
                        <FormikControl
                          control="multiSelect"
                          label="Food option"
                          required={true}
                          name="foodOption"
                          errors={errors.foodOption}
                          touched={touched.foodOption}
                          options={foodOptions}
                          setSelectedOption={setSelectedOption}
                        />
                      </div>
                      <div className="col-12">
                        <FormikControl
                          control="textarea"
                          as="textarea"
                          rows="4"
                          label="Bio"
                          required={true}
                          name="bio"
                          errors={errors.bio}
                          touched={touched.bio}
                        />
                      </div>
                      <div className="col-12">
                        <div className="button mt-3">
                          <button
                            type="submit"
                            disabled={!isValid}
                            className="btn btn-dark px-5 py-2"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormikContainer;
