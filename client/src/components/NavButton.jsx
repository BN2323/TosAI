import { Link } from "react-router-dom";

export function NavButton({ to, children, onClick }) {
  return (
    <Link to={to}>
        <button
        onClick={onClick}
        className="px-4 py-2 bg-white text-black my-1 text-2xl rounded-3xl w-65 h-15 cursor-pointer outline-2  hover:bg-[#62FFA3]"
        >
        {children}
        </button>
    </Link>
    
  );
}
