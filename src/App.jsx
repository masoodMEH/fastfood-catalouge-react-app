import "./App.css";
import CategoryList from "./components/CategoryList/categoryList";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="wrapper bg-faded-dark">
      <Header></Header>
      <CategoryList></CategoryList>
    </div>
  );
};

export default App;
