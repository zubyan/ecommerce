import React from 'react';

const Contact = () => {
  return (
    <section className="text-gray-600 body-font relative p-3">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Contact us in case of any queires.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <h3>Phone Number</h3>
              <p className="leading-normal my-3">+92-300-1234567</p>
              <span className="inline-flex"> </span>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <h3>Email</h3>
              <p className="leading-normal my-3">abc@gmail.com</p>
              <span className="inline-flex"> </span>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <h3>Address</h3>
              <p className="leading-normal my-3">
                49 Smith St. <br />
                Saint Cloud, MN 56301
              </p>
              <span className="inline-flex"> </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
