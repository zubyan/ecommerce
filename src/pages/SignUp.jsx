import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { basicSchema } from '../schemas';
import axios from 'axios';

const SignUp = () => {
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    try {
      const response = await axios.post('https://api.realworld.io/api/users', {
        user: {
          username: values.name,
          email: values.email,
          password: values.password,
        },
      });

      console.log('submitted', response.data);
      actions.resetForm();

      if (response.status === 201) {
        localStorage.setItem('user-info', JSON.stringify(response.data));
        navigate('/');
      }
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
        <div>
          <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Register yourself to blo
            </h2>
            <Formik
              initialValues={{
                name: '',
                email: '',
                password: '',
              }}
              validationSchema={basicSchema}
              onSubmit={onSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="mt-8 space-y-6 p-3">
                  <fieldset>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your Name
                    </label>
                    <Field
                      type="text"
                      name="name"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="John Wick"
                      required
                    />
                    <ErrorMessage
                      name="name"
                      component="p"
                      className="text-red-500"
                    />
                  </fieldset>
                  <fieldset>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required
                    />
                    <ErrorMessage
                      name="email"
                      component="p"
                      className="text-red-500"
                    />
                  </fieldset>
                  <fieldset>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your password
                    </label>
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                    <ErrorMessage
                      name="password"
                      component="p"
                      className="text-red-500"
                    />
                  </fieldset>
                  <fieldset className="flex items-start">
                    <div className="flex items-center h-5">
                      <Field
                        id="remember"
                        aria-describedby="remember"
                        name="remember"
                        type="checkbox"
                        className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                        required
                      />
                    </div>
                    <div className="ms-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="font-medium text-gray-500 dark:text-gray-400"
                      >
                        Remember this device
                      </label>
                    </div>
                    <Link
                      to="#"
                      className="ms-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                      Lost Password?
                    </Link>
                  </fieldset>
                  <button
                    type="submit"
                    className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                    disabled={isSubmitting}
                  >
                    Submit
                  </button>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    Already have account?
                    <Link
                      className="text-blue-600 hover:underline dark:text-blue-500"
                      to="/login"
                    >
                      Log In
                    </Link>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
