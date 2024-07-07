import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { basicSchema } from '../schemas';
import { UserContext } from '../store/auth-context';

const onSubmit = async (values, actions, setUser) => {
  try {
    const response = await axios.post(
      'https://api.realworld.io/api/users/login',
      {
        user: {
          email: values.email,
          password: values.password,
        },
      }
    );

    const data = response.data;

    if (response.status === 200) {
      console.log('Login successful:', data);
      setUser(data.user);
    }
  } catch (error) {
    console.error(
      'Login failed:',
      error.response ? error.response.data : error.message
    );
  }

  actions.resetForm();
};

const LogIn = () => {
  const { user, setUser } = useContext(UserContext);

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
        <div>
          <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Log in to blo
            </h2>
            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              validationSchema={basicSchema}
              onSubmit={(values, actions) => onSubmit(values, actions, setUser)}
            >
              {({ isSubmitting }) => (
                <Form className="mt-8 space-y-6 p-3">
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
                  <div className="flex items-start">
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
                  </div>
                  <button
                    type="submit"
                    className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                    disabled={isSubmitting}
                  >
                    Submit
                  </button>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    Not registered yet?
                    <Link
                      className="text-blue-600 hover:underline dark:text-blue-500"
                      to="/signup"
                    >
                      Create account
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

export default LogIn;
