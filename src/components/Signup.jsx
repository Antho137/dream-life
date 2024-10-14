import { useForm } from "react-hook-form";

function Signup() {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    return (
        <div className="mb-20 px-10 md:px-20">
            <div className="bg-blue-900 py-2 px-3 text-white rounded-lg">
                <h5 className="text-green-400 text-xl mb-3 lg:text-2xl font-medium">Sign up for the newsletter</h5>
                <p className="text-center xl:px-4">Be well informed about how environment protection matters, and get monthly updates.</p>
                <form onSubmit={handleSubmit()} autoComplete="off">
                    <div className="block pb-2">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="bg-gray-50 mx-auto my-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-60 sm:w-80 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                    <div className="mb-3">
                        <button 
                            type="submit"
                            className="w-60 sm:w-80 text-white uppercase bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-normal rounded-lg text-sm py-1 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                Sign me up
                        </button>
                    </div>
                </form>    
            </div>
        </div>
    );
}

export default Signup;