import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";

// eslint-disable-next-line react/prop-types
const App = ({ Name, age, isMarried }) => {

  return (
    <div>
      <Header />
      <Main />
      <ProductList />
      <h2>Name: {Name || "Not Provided"}</h2>
      <h3>Age: {age || "Not Provided"}</h3>
      <h4>Married: {isMarried ? "Yes" : "No"}</h4>
      <Footer />
    </div>
  );
};
export default App;
