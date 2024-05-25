import { useMutation } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/Appcontext";

const SignOutBtn = () =>{
    const {showToast} = useAppContext();
    const mutation = useMutation(apiClient.signOut, {
        onSuccess: () =>{
            showToast({message: "Signed Out Successfully!", type:"SUCCESS"})
        },
        onError: (error: Error) =>{
            showToast({message: error.message, type:"ERROR"});
        }
      
    });
    const handleClick = () =>{
        mutation.mutate();
    }
    return(
        <>
        <button onClick={handleClick} className="text-blue-600 bg-white px-3 font-bold hover:bg-gray-200">Sign Out</button>
        </>
    )
}
export default SignOutBtn;