const fetchCurrentPage = () => {
  try {
    let data = localStorage.getItem("current-reactjsc-page");
    if (data) {
      console.log("it exists");
      return JSON.parse(data); // Assuming the value is always correctly stored as JSON string
    } else {
      const defaultPage = "Home";
      localStorage.setItem(
        "current-reactjsc-page",
        JSON.stringify(defaultPage)
      ); // Ensure consistency
      console.log("it does not exist, setting to Home");
      return defaultPage;
    }
  } catch (error) {
    console.error("Error parsing current page from localStorage:", error);
    return "Home";
  }
};

export { fetchCurrentPage };
