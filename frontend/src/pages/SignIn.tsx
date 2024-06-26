import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/Appcontext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export type SignInFormData = {
    email: string;
    password: string;
};
const SignIn = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { showToast } = useAppContext();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInFormData>();

    const mutation = useMutation(apiClient.signIn, {
        onSuccess: async () => {
            //console.log("user has signed in !");
            //TODO : showToast
            showToast({ message: "Sign In Successful!", type: "SUCCESS" });
            queryClient.invalidateQueries('validateToken');
            //TODO: Navigate to home
            navigate("/");
        }, onError: (error: Error) => {
            showToast({ message: error.message, type: "ERROR" });
        }
    });

    const onSubmit = handleSubmit((data) => {
        mutation.mutate(data);
    });

    return (
        <form className="flex flex-col gap-5" onSubmit={onSubmit}>
            <h2 className="tex-3xl font-bold">Sign In</h2>
            <label className="text-gray-700 text-sm font-bold flex-1">
                email
                <input type="email" className="border rounded w-full py-1 px-2 font-normal"
                    {...register("email", { required: "This field is required" })}>
                </input>
                {errors.email && (
                    <span className="text-red-500"> {errors.email.message}</span>
                )}
            </label>
            <label className="text-gray-700 text-sm font-bold flex-1">
                Password
                <input type="password" className=" border rounded w-full py-1 px-2 font-normal"
                    {...register("password",
                        {
                            required: "This field is required",
                            minLength: {
                                value: 6,
                                message: "Password must be atleast 6 characters"
                            }
                        })} />
            </label>
            {errors.password && (
                <span className="text-red-500">{errors.password.message} </span>
            )}
            <span className="flex items-center justify-between">
                <span className="text-sm">
                    Not Registered?  <Link className="hover:text-orange-500 underline" to="/register" > Create a Account here?</Link>
                </span>
                <button
                    type="submit"
                    className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-xl">
                    Login
                </button>
            </span>

        </form>
    );
}
export default SignIn;