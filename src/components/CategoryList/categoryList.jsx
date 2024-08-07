import { useEffect, useState } from "react";
import axios from "../../axios";
import Loading from "../Loading/loading";
import SearchBar from "../SearchBar/searchBar";

const CategoryList = ({ filterItems }) => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get("/FoodCategory/categories");
      setCategories(response.data);
      setLoading(false);
    };

    fetchCategories();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    }
    return (
      <div className="ps-3 w-100 d-flex align-content-center justify-content-between gap-5">
        <ul className="nav">
          <li className="nav-item" onClick={() => filterItems()}>
            <a href="#" className="nav-link">
              همه فست فود ها
            </a>
          </li>
          {categories.map((category) => (
            <li
              className="nav-item"
              key={category.id}
              onClick={() => filterItems(category.id)}
            >
              <a href="#" className="nav-link">
                {category.name}
              </a>
            </li>
          ))}
        </ul>
        <SearchBar />
      </div>
    );
  };

  return (
    <nav className="container mt-n5">
      <div className="d-flex align-items-center bg-white rounded-3 shadow-xl py-4 h-[80px]">
        {renderContent()}
      </div>
    </nav>
  );
};

export default CategoryList;
