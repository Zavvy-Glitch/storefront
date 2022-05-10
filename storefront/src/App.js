import './App.css';
import CategoriesList from './component/products/CategoriesList';
import ProductList from './component/products/ProductsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CategoriesList />
        <ProductList />
      </header>
    </div>
  );
}

export default App;
