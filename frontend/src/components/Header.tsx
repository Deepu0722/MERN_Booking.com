import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/Appcontext";
import SignOutBtn from "./SignOutBtn";
const Header = () => {
    const { isLoggedIn } = useAppContext();
    return (
        <div className="bg-blue-800 py-6">
            <div className="container bg-blue-800 mx-auto flex justify-between">
                <span className="text-3xl text-white fonr-bold tracking-tight">
                    <Link to="/"> MernHolidays.com</Link>
                </span>
                <span className="flex space-x-2">
                    {isLoggedIn
                        ? (<>
                            <Link to="/my-bookings"> My Bookings</Link>
                            <Link to="/my-hotels"> My hotels</Link>
                            <SignOutBtn></SignOutBtn>
                        </>)
                        : (<Link to="/sign-in" className="flex items-center bg-gray-100 text-blue-600 px-3 font-bold hover:bg-gray-100 hover:text-green-500">
                            Sing In
                        </Link>)
                    }
                </span>
            </div>
        </div>

    );
}
export default Header;