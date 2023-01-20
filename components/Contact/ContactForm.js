import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
export default function ContactForm() {
    const schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required(),
        message: yup.string().required()
    });
    const { register, handleSubmit, watch, errors } = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema)
      });
    
      function contactSubmit(data) {
        // handle submitting the form
        console.log(data);
      }
    
      console.log(watch("email"));
    
      console.log(errors);
    return (
        <div className="flex-grow flex w-3/6 max-w-5xl mx-auto mb-16">
            <div className="flex flex-col items-center w-3/6 max-h-[48rem] mx-auto lg:ml-auto">
                <div className="w-3/6">
                    <h1 className="text-xl font-made font-bold text-center p-8">CONTACT US</h1>
                    <form onSubmit={handleSubmit(contactSubmit)}>
                        <div className="mb-8">
                            <label
                                htmlFor="email"
                                className={`block text-sm ${
                                errors.email ? "text-red" : "text-purple-400"
                                }`}
                            >
                                Email
                            </label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                className={`block w-full border-b-2 py-2 px-4  placeholder-purple-500 focus:bg-purple-600 ${
                                errors.email
                                    ? "text-red-300 border-red-400"
                                    : "text-purple-200 border-purple-400"
                                }`}
                                ref={register}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-2">
                                A valid email is required.
                                </p>
                            )}
                        </div>

                        <div className="mb-8">
                            <label
                                htmlFor="password"
                                className={`block font-bold text-sm mb-2 ${
                                errors.password ? "text-red-400" : "text-purple-400"
                                }`}
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4 text-purple-200 focus:bg-purple-600 placeholder-purple-500 ${
                                errors.password ? "border-red-400" : "border-purple-400"
                                }`}
                                ref={register()}
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-2">
                                Your password is required.
                                </p>
                            )}
                        </div>

                        <button className="inline-block bg-yellow-500 text-yellow-800 rounded shadow py-2 px-5 text-sm">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}