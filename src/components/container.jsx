import SideBar from "./sidebar";
import Book from "./books";
import "./container_style.css";

function Container() {
  return (
    <div className="container">
      <SideBar />
      <Book />
    </div>
  );
}

export default Container;
