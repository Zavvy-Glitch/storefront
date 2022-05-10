import './App.css';
import CategoriesList from './component/categories/CategoriesList';
import ProductList from './component/products/ProductsList';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <CategoriesList />
        <ProductList />
        <Footer />
    </div>
  );
}

export default App;
