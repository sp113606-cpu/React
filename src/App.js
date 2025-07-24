import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import ProductCategory from './Components/ProductCategory';
import Products from './Components/Products';
import { createBrowserRouter, Link, Outlet, RouterProvider } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import Counter from './Components/Counter';
import NewCounter from './Components/NewCounter';
import UseOfMemo from './Components/UseOfMemo';

function App() {
  let router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <NavBar />
          <h1>HOME PAGE</h1>
          <Link to={"product-category"}>Product Category</Link>
          {/* <Outlet /> */}
          <Footer />
        </>
      ),
      children: [
        {
          path: 'product-category',
          element: <ProductCategory />
        },
        {
          path: 'user',
          element: <h1>Hello User Profile Page</h1>
        },
        {
          path: 'register',
          element: <Register />
        },
        {
          path: 'login',
          element: <Login />
        },
      ]
    },

    {
      path: "/products",
      element: (
        <>
          <NavBar />
          <Products link="https://dummyjson.com/products" />
          <Footer />
        </>
      )
    },
     {
      path: "/NewCounter",
      element: (
        <>
          <NavBar />
          <NewCounter />
          <Footer />
        </>
      )
    },
     {
      path: "/memo",
      element: (
        <>
          <NavBar />
          <UseOfMemo/>
          <Footer />
        </>
      )
    },
    {
      path: "/counter",
      element: (
        <>
          <NavBar />
          <Counter />
          <Footer />
        </>
      )
    },
    
    {
      path: "/products/category/:categoryName",
      element: (
        <>
          <NavBar />
          <Products link="https://dummyjson.com/products/category/" />
          <Footer />
        </>
      )
    },
    /* App.css */


    // {
    //   path:"/products/category/furniture",
    //   element:(
    //     <>
    //     <NavBar />
    //     <Products link="https://dummyjson.com/products/category/furniture" />
    //     <Footer />
    //     </>
    //   )
    // },

    {
      path: "*",
      element: (
        <>404 Not Found</>
      )
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};


export default App;