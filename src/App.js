import { useState } from 'react';
import './App.css';
import { Footer, Header } from './components';
import AppLayout from './layouts/AppLayout';
import { About, Home, NotFound, ProductDetail,ProductId, Products, Profile, Reviews , Login, Register} from './routes';
import { DarkThemeContextProvider } from './context/DarkThemeContext';
import StarRatingLayer from './components/StarRating/StarRatingLayer';
import SidebarLayout from './components/Sidebar/SidebarLayout';
import { NavLink, Outlet, Route, Routes } from 'react-router-dom';
import ProductsLayout from './layouts/ProductsLayout';
import MakeupLayout from './layouts/MakeupLayout';
import { MakeupContextProvider } from './context/MakeupContextReducer';
import Makeup from './routes/Makeup';
import MakeupDetail from './routes/MakeupDetail';
import MakeupReviews from './routes/MakeupReviews';

import Count from './routes/Count';

import { BoardContextProvider } from './context/BoardContext';
import BoardLayout from './layouts/BoardLayout';
import Board from './routes/board/Board';
import EditBoard from './routes/board/EditBoard';
import WriteBoard from './routes/board/WriteBoard';
import Counter from './routes/useReducer/Counter';
import FetchReducer from './routes/useReducer/FetchReducer';
import VideoPlayer from './routes/VideoPlayer';
import InputRef from './routes/InputRef';

// 3. 
function App() { 
  return (
    <DarkThemeContextProvider>
        <AppLayout>
            <Header/>
            <Routes>
              {/* 
                localhost:3000/
                localhost:3000/home
                localhost:3000/about
                localhost:3000/profile
              */}
              <Route path="/"  element={<Home />} />
              <Route path="/home"  element={<Home />} />

              <Route path="/input"  element={<InputRef />} />
              <Route path="/video"  element={<VideoPlayer />} />
              <Route path="/counter"  element={<Counter />} />
              <Route path="/fetch"  element={<FetchReducer />} />
              {/* <Route path="/count"  element={<Count />} /> */}
              {/* 
                  localhost:3000/products
                  localhost:3000/products/:id
                  localhost:3000/products/productDetail
                  localhost:3000/products/reviews
                  http://localhost:3000/products/reviews?name=kim&age=30
              */}
              <Route  path="/products" element={ <ProductsLayout /> }>
                  <Route index  element={<Products />} />
                  <Route path=":id"  element={<ProductId />} />
                  <Route path="productDetail"  element={<ProductDetail />} />
                  <Route path="reviews"  element={<Reviews />} />
              </Route>

              <Route path="makeup" element={
                <MakeupContextProvider>
                    <MakeupLayout/ >
                </MakeupContextProvider>
              }>
                  <Route index element={<Makeup /> } />
                  <Route path=":id" element={<MakeupDetail /> } />
                  <Route path="reviews" element={<MakeupReviews /> } />
              </Route>

              <Route path="/board"  element={
                  <BoardContextProvider>
                      <BoardLayout />
                  </BoardContextProvider>
              }>
                    <Route index element={ <Board /> } />
                    <Route path="edit_board" element={ <EditBoard /> } />
                    <Route path="write_board" element={ <WriteBoard /> } />
              </Route>

              {/* localhost:3000/product/reviews?name=kim&age=30
              https://cafe.naver.com/jemicom?amout=30&pager=2   */}

              <Route path="/login"  element={<Login />} />
              <Route path="/register"  element={<Register />} />
              <Route path="/about"  element={<About />} />
              <Route path="/profile"  element={<Profile />} />
              <Route path="*"  element={<NotFound />} />
            </Routes>
            <Footer />
        </AppLayout>
    </DarkThemeContextProvider> 
  );
}

// 2. 
// function App() {
//   const [ isDark, setIsDark ] = useState(false);

//   return (
//     <DarkThemeContext.Provider value={{ isDark, setIsDark }}>
//         <AppLayout>
//           <Header/>
//           <Home >
//               <h1> 한글은 </h1>
//               <p> 아름다운 </p>
//               <div> 글입니다. </div>
//           </Home>
//           <Footer />
//         </AppLayout>
//     </DarkThemeContext.Provider>

//   );
// }

// 1. props
// function App() {
//   const [ isDark, setIsDark ] = useState(false);

//   return (
//         <AppLayout>
//           <Header isDark={isDark} setIsDark={setIsDark}/>
//           <Home  isDark={isDark} >
//               <h1> 한글은 </h1>
//               <p> 아름다운 </p>
//               <div> 글입니다. </div>
//           </Home>
//           <Footer isDark={isDark} />
//         </AppLayout>
//   );
// }

export default App;
