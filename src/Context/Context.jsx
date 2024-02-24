import { createContext, useEffect, useState } from "react";
import { fetchCurrentPage } from "./MiscFunctions";

export const SiteContext = createContext({});

// eslint-disable-next-line react/prop-types
export const SiteContextProvider = ({ children }) => {
  const fetchedCurrentPage = fetchCurrentPage();
  const [currentPage, setCurrentPage] = useState(fetchedCurrentPage);

  const menuItemsMD = [
    { id: 1, name: "Home", link: "/", status: "all" },
    { id: 2, name: "Login", link: "/login", status: "all" },
    { id: 3, name: "Components", link: "/components", status: "all" },
    { id: 4, name: "About", link: "/about", status: "guest" },
    { id: 5, name: "Documentation", link: "/documentation", status: "user" },
    { id: 6, name: "Updates", link: "/Updates", status: "user" },
  ];

  useEffect(() => {
    // Correctly stringify currentPage when setting it in localStorage
    localStorage.setItem("current-page", JSON.stringify(currentPage));
  }, [currentPage]);

  return (
    <SiteContext.Provider
      value={{
        menuItemsMD,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};
