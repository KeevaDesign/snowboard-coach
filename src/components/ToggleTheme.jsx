import { FaMoon, FaSun } from "react-icons/fa";

const ToggleTheme = ({ theme, setTheme }) => {
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className="toggle_theme" onClick={switchTheme}>
      {theme === "light" ? <FaSun /> : <FaMoon />}
    </div>
  );
};

export default ToggleTheme;
