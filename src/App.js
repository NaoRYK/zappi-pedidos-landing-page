
import './App.css';
import Categories from './Components/Categories/Categories';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Layout from './Components/Layout/Layout';
import Products from './Components/Products/Products';

function App() {
  return (
    <div className="App">
      <Header/>
      <Layout>
        <Hero></Hero>
        <Categories></Categories>
        <Products></Products>
      </Layout>
        <Footer></Footer>
    </div>
  );
}

export default App;
