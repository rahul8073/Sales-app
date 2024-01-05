
// import router using react router dom library
import { BrowserRouter, Routes,Route  } from 'react-router-dom';
// import navbar component
import Navbars from './components/navbar';
// import addsale page
import AddSales from './pages/AddSales';
import Top_5 from './pages/top_5';
import Total_revenue from './pages/total_revenue';
import Login from './pages/login';
import Registration from './pages/registration';


function App() {
  return (
    <BrowserRouter>
    <Navbars/>
      <Routes>
        <Route path='/' element={<></>}/> 
        <Route path='/addsales' element={<AddSales/>}/> 
        <Route path='/top5' element={<Top_5/>}/> 
        <Route path='/totalRevenue' element={<Total_revenue/>}/> 
        <Route path='/login' element={<Login/>}/> 
        <Route path='/registration' element={<Registration/>}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
