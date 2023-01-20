import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function Contact() {
    const schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required(),
        message: yup.string().required()
    }).required();
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
      mode: "onBlur",
      resolver: yupResolver(schema)
    });

    function contactSubmit(data) {
      // handle submitting the form
      console.log(data);
    }
    return (
        <div className="flex-grow flex w-full max-w-3xl mx-auto mb-16">
            <div className="flex flex-col items-center w-5/6 max-h-[48rem] mx-auto lg:ml-auto">
                <div className="w-full">
                    <h1 className="text-xl font-made font-bold text-center p-8">CONTACT US</h1>
                    <form onSubmit={handleSubmit(contactSubmit)}>
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block font-normal text-sm mb-1"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className={`block w-full bg-transparent outline outline-1 py-2 px-4 placeholder-purple-500 focus:bg-purple-600 ${
                                errors.name
                                    ? "outline-red border-red"
                                    : "text-purple-200 border-purple-400"
                                }`}
                                {...register('name')}
                            />
                            {errors.name && (
                                <p className="text-red text-sm mt-2">
                                    This field is required.
                                </p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block font-normal text-sm mb-1"
                            >
                                Email
                            </label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                className={`block w-full bg-transparent outline outline-1 py-2 px-4 placeholder-purple-500 focus:bg-purple-600 ${
                                errors.email
                                    ? "outline-red border-red"
                                    : "text-purple-200 border-purple-400"
                                }`}
                                {...register('email')}
                            />
                            {errors.email && (
                                <p className="text-red text-sm mt-2">
                                    Invalid email address.
                                </p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="message"
                                className="block font-normal text-sm mb-1"
                            >
                                Message
                            </label>
                            <textarea
                                type="text"
                                rows="4"
                                name="message"
                                id="message"
                                className={`block w-full bg-transparent outline outline-1 py-2 px-4 placeholder-purple-500 focus:bg-purple-600 ${
                                errors.message
                                    ? "outline-red border-red"
                                    : "text-purple-200 border-purple-400"
                                }`}
                                {...register('message')}
                            />
                            {errors.message && (
                                <p className="text-red text-sm mt-2">
                                    This field is required.
                                </p>
                            )}
                        </div>
                        <button className="inline-block bg-yellow-500 text-yellow-800 shadow py-2 px-5 text-sm">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}