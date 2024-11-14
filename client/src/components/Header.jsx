import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-100 h-[48px] text-white p-4 flex items-center border-b-[1px] border-customDark shadow">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-lg font-bold text-black"
        >
          Panel0
        </Link>
        <nav>
          
              <Link
                to="/login"
                className="px-4 py-2 hover:bg-blue-600 rounded border border-customDark bg-blue-500 mr-2"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 hover:bg-green-600 rounded bg-green-500"
              >
                Register
              </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
