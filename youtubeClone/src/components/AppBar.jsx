import SearchBar from "./SearchBar";
import SignInButton from "./SignInButton";
import YouTubeLogo from "./YouTubeLogo";

function AppBar(){

    return <div className="flex justify-between w-full items-center border-b-2 border-t-2">
        <div>
            <YouTubeLogo/>
        </div>
        <div className="w-1/3">
            <SearchBar/>
        </div>
        <div>
            <SignInButton/>
        </div>
    </div>
}

export default AppBar;