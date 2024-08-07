import { useEffect, useState } from "react";

import "./App.css";
import CategoryList from "./components/CategoryList/categoryList";
import Header from "./components/Header/Header";
import axios from "./axios";
import Loading from "./components/Loading/loading";
import FastFoodList from "./components/FastFoodList/fastFoodList";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [fastFoodItems, setFastFoods] = useState([]);

  const fetchData = async (categoryId = null) => {
    setLoading(true);
    const response = await axios.get(
      `/FastFood/list/${categoryId ? "?categoryId=" + categoryId : ""}`
    );
    setLoading(false);
    setFastFoods(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <Loading theme="dark" />;
    }

    return <FastFoodList fastFoodItems={fastFoodItems} />;
  };

  return (
    <div className="wrapper bg-faded-dark">
      <Header></Header>
      <CategoryList></CategoryList>
      <div className="container mt-4">{renderContent()}</div>
    </div>
  );
};

export default App;
