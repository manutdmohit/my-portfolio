'use client';

import { useFormik } from 'formik';
import * as Yup from 'yup';

const Contact: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      message: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="mt-5 mb-5">
      <h2 className="text-3xl font-bold text-center mb-4">Contact Me</h2>
      <section className="flex flex-col md:flex-row justify-center items-center md:items-start text-left py-12 border-2 shadow-lg">
        <div className="md:w-1/2 p-4">
          <p className="mt-4 text-lg">
            If you have any questions, feel free to reach out to me. I am
            available via email or phone, and I look forward to connecting with
            you.
          </p>
        </div>
        <div className="md:w-1/2 p-4">
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className="mt-1 p-2 w-full border rounded"
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-500 text-sm">{formik.errors.name}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="mt-1 p-2 w-full border rounded"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
            <div>
              <label htmlFor="message" className="block">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                className="mt-1 p-2 w-full border rounded h-32"
              />
              {formik.touched.message && formik.errors.message ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.message}
                </div>
              ) : null}
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
