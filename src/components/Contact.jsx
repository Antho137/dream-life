import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegistration = (data) => console.log(data);
  return (
    <div className="relative mt-20 py-6 bg-slate-300 flex flex-col justify-center items-center mx-auto lg:px-20 xl:px-40 min-h-dvh">
      <h1 className="text-blue-900 text-3xl lg:text-4xl font-medium">
      Contact Us
      </h1>
      <p className="text-lg mt-4 mb-6 px-10 md:px-40 lg:text-xl">
        To get more information about us, feel free to fill the
        contact form bellow. Please, all cases are required!
      </p>
      <form
        className="bg-green-600 p-10 mb-10 rounded-lg"
        autoComplete="off"
        onSubmit={handleSubmit(handleRegistration)}
      >
        <div className="block pb-2">
          <label className="block mb-1 text-left" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-80 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Tony Full"
            {...register("name", {
              required: "Name is required.",
              pattern: {
                value: /^[a-zA-Z\s]+$/,
                message: "Name is not valid.",
              },
            })}
          />
          <small className="text-red-500 font-semibold">
            {errors.name && <p className="errorMsg">{errors.name.message}</p>}
          </small>
        </div>
        <div className="block pb-2">
          <label className="block mb-1 text-left" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-80 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="tonyfull@dreamlife.org"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid.",
              },
            })}
          />
          <small className="text-red-500 font-semibold">
            {errors.email && <p className="errorMsg">{errors.email.message}</p>}
          </small>
        </div>
        <div className="block pb-2">
          <label htmlFor="message" className="block mb-1 text-left">
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            rows="6"
            {...register("message", {
              required: "message is required.",
              pattern: {
                value: /^[a-zA-Z]$/,
                message: "Message is not valid.",
              },
            })}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Leave your message here..."
          ></textarea>
          <small className="text-red-500 font-semibold">
            {errors.message && (
              <p className="errorMsg">{errors.message.message}</p>
            )}
          </small>
        </div>
        <div className="block pt-2">
          <label></label>
          <button
            className="w-80 text-white bg-blue-900 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
