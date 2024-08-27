import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




// import CartItem from './components/CartItem'
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import AboutCompany from './components/AboutCompany';
import AboutTeam from './components/AboutTeam';
import axios from 'axios';


function App() {

  const [items, setItem] = useState([])

  const [searchVal, setSearchVal] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:3000/products");
        setItem(data);
    };
    fetchData();
  }, []);

//searchVal

  const handleInc = (item) => {
    const cpyItems = [...items];
    const index = cpyItems.findIndex((i) => i.name === item.name)
    cpyItems[index].count +=1;
    setItem(cpyItems);
  };

  const handleDec = (item) => {
    const cpyItems = [...items];
    const index = cpyItems.findIndex((i) => i.name === item.name);
    if(cpyItems[index].count == 0){
        cpyItems[index].count = 0;
        setItem(cpyItems);
    }else{
        cpyItems[index].count -=1;
        setItem(cpyItems);
    }        
  };

  const handleDel = (delItem) =>{
    let cpyItems = [...items];
    cpyItems = cpyItems.filter((i)=> i.name !== delItem.name)
    setItem(cpyItems);  
  }

  const handleToggleAddToCart = (toToggleItem) => {
    console.log(toToggleItem);
    // clone
    let cpyItems = [...items];
    // edit
    cpyItems = cpyItems.map((item) => ({
      ...item,
      isInCart: toToggleItem.id === item.id ? !item.isInCart : item.isInCart,
    }));
    // set state
    setItem(cpyItems);
  };

  const handleReset = ()=>{
    const cpyItems = [...items];
    cpyItems.map((i)=> i.count = 0)
    setItem(cpyItems);
  }


  // const handleSearching = (value)=>{
  //   //invalid hook
  //   useEffect(() => {
  //     const fetchProducts= async () => {
  //       const { data } = await axios.get("http://localhost:3000/products");
  //       const filteredData = data.filter((i)=>{
  //         i.name == value;
  //         console.log(i)
  //       })
  //       // setItem(data);
  //       filteredData("burger")
  //     };
  //     // fetchProducts()
  //     // fetchData();
  //   }, [value])
    
  // }

  const handleSearch = (searchVal)=>{
    setSearchVal(searchVal);
  }

  // Search Logic
  console.log({
    searchVal,
    items
  });
  let cpyItems = !searchVal ? items : items.filter((i)=>i.name.toLowerCase().includes(searchVal.toLowerCase()) )

  return (   
    <>
    <Navbar cartItemsCount={items.filter((item) => item.isInCart).length}></Navbar>
    <Routes>
      <Route path='/' element={<Home items={items}></Home>}></Route>
      <Route path='/menu' element={
        <Menu
          items = {cpyItems}
          handleToggleAddToCart = {handleToggleAddToCart}
          handleSearch = {handleSearch}
          // handleSearching = {handleSearching}
          // searchVal = {searchVal}
        >
        </Menu>}></Route>
      <Route path='/cart' element={
        <Cart 
          items={items.filter((item)=> item.isInCart)} 
          handleInc = {handleInc}
          handleDec = {handleDec}
          handleDel = {handleToggleAddToCart}
        />  
      }>
      </Route>
      <Route path='/about' element={<About></About>}>
        <Route path='aboutcompany' element={<AboutCompany></AboutCompany>}/>
        <Route path='aboutteam' element={<AboutTeam></AboutTeam>}/>
      </Route>
    </Routes>
    {items.length == 0 && <p>No items here</p>}
    </>
  )
}

export default App
