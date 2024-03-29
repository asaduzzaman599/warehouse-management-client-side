import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import PageTitle from './Components/Shared/PageTitle/PageTitle';
import Home from './Components/Home/Home';
import Additem from './Components/AddItem/Additem';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ManageItem from './Components/ManageItems/ManageItem';
import Myitems from './Components/Myitems/Myitems';
import UpdateStock from './Components/UpdateStock/UpdateStock';
import Login from './Components/Auth/Login/Login';
import Register from './Components/Auth/Register/Register';
import PrivateRoute from './Components/Auth/PrivateRoute/PrivateRoute';
import Blogs from './Components/Blogs/Blogs';
import NotFound from './Components/Shared/NotFound/NotFound';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App bg-blue-50 min-h-screen flex flex-col justify-between">

      <Header></Header>
      <ToastContainer />
      <Routes>

        <Route path='/' element={
          <PageTitle title={"Home"}>
            <Home></Home>
          </PageTitle>
        }></Route>

        <Route path='/add' element={
          <PrivateRoute>
            <PageTitle title={"Add Item"}>
              <Additem></Additem>
            </PageTitle>
          </PrivateRoute>
        }></Route>

        <Route path='/manage' element={
          <PageTitle title={"Manage Items"}>
            <ManageItem></ManageItem>
          </PageTitle>
        }></Route>

        <Route path='/myitems' element={
          <PageTitle title={"My Items"}>
            <Myitems></Myitems>
          </PageTitle>
        }></Route>

        <Route path='inventory/:id' element={
          <PrivateRoute>
            <PageTitle title={"Items Stock"}>
              <UpdateStock></UpdateStock>
            </PageTitle>
          </PrivateRoute>
        }></Route>

        <Route path='/login' element={
          <PageTitle title={"Login"}>
            <Login></Login>
          </PageTitle>
        }></Route>

        <Route path='/register' element={
          <PageTitle title={"Register"}>
            <Register></Register>
          </PageTitle>
        }></Route>

        <Route path='/blogs' element={
          <PageTitle title={"Blogs"}>
            <Blogs></Blogs>
          </PageTitle>
        }></Route>

        <Route path='/contact' element={
          <PageTitle title={"Contact"}>
            <Contact></Contact>
          </PageTitle>
        }></Route>

        <Route path='*' element={
          <PageTitle title={"Error 404"}>
            <NotFound></NotFound>
          </PageTitle>
        }></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
