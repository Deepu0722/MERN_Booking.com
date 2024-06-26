import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/Appcontext";

const SignOutBtn = () =>{
    const {showToast} = useAppContext();
    const queryClient = useQueryClient();
    const mutation = useMutation(apiClient.signOut, {
        onSuccess: async() =>{
            await queryClient.invalidateQueries('validateToken');
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