import { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { SiteContext } from "../../Context/Context";

export const Navbar = () => {
  const { currentPage, setCurrentPage, menuItemsMD } = useContext(SiteContext);

  return (
    <div className="navbar">
      {menuItemsMD.map((link) => (
        <Link
          style={
            link.name === currentPage ? { textDecoration: "underline" } : {}
          }
          onClick={() => {
            setCurrentPage(link.name);
          }}
          key={link.id}
          to={link.link}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};
