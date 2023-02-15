import React,{useState} from 'react';
import './style.css';
import Menu from "./menuApi";
import MenuCard from './MenuCard';
import Navbar from './Navbar';

let arr=(Menu.map((element)=>{
  return element.category;
})
)
//console.log("arr",new Set(arr)) //create set of 4 elements
//console.log("arr..",...new Set(arr))//...new set is use to create menu category in unique and proper manner
//console.log("arr",arr)


const uniqueList = [...new Set(arr),"All"];
//console.log("unique",uniqueList);


const Restaurant = () => {
  const[menuData,setMenuData] = useState(Menu); //creating use state for all the items show in menu//Use to initiallly show all the items in the menuapi
  const[menuList,setMenuList] = useState(uniqueList); //creating use state for particular category

  const filterItem = (category) => { //this function is use to filter items 
    if(category==="All"){
     setMenuData(Menu);
     return;

    }

  const updatedList = Menu.filter((element)=>{
    return element.category===category;   //this function is used if we add any new item is added //this element is use to to filter different datas
 });

 setMenuData(updatedList);
 setMenuList(uniqueList)
  };

  return (
    <>
    {/*passing filter item function as props */}
    <Navbar filterItem={filterItem} menuList={menuList} />  {/*sending props filter item and menu list to navbar */}
      <MenuCard menuData={menuData}/>  {/*sending props to menu card component */}
    </>

  )
};

export default Restaurant;
