import logo from './logo.svg';
import './App.css';
import { Navigate, Route, Routes,useNavigate } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import CartPage from './pages/CartPage';
import  Login  from './components/Login';
import SignUp from './components/SignUp';
import ProtectedRoute from './components/ProtectedtRoute';
import { useEffect, useState } from 'react';
import SubtotalSection from './components/SubtotalSection';
import CheckoutContainer from './components/CheckoutContainer';
import { Box, Center, Text } from '@chakra-ui/react';
import NotFound from './components/NotFound';
import SuccessPage from './components/SuccessPage';
import Success from './components/Success';

function App() {
  
  const navigate = useNavigate()
  const [user,setUser] = useState(JSON.parse(localStorage.getItem("userInfo")))



    const locationArr = window.location.href.split("/")

    useEffect(() => {

      if(!user?.email && !locationArr?.includes("signUp")){
        navigate("/login")
      }
    },[user])


    const location = window.location.href.indexOf("cart") != -1
  return (
    <>
    <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
    {/* Protected LayoutRoute */}
    {/* <Route path="/" element={<LayoutRoute />}> */}
      <Route index element={<HomeScreen />} />
      {/* <Route path="/product/:id" element={ <HomeScreen />} /> */}
      <Route path="/cart/:id" element={<CartPage />} />
      <Route path='/cart' element={<CheckoutContainer/>}/>
      <Route path="/checkout-success" element={<Success/>}/>
    {/* </Route> */}

     <Route path="*" element={<NotFound/>}/>
  </Routes>
  <Box bg="black" zIndex={10} display={location ? "none" :"block"} position={"fixed"} bottom="0" left="0" right="0" color="white" p="4">
          <Center>
            <Text>&copy; 2023 Shivkrupa insense. All Rights Reserved.</Text>
          </Center>
  </Box>
  </>
  );
}

export default App;
