import React from 'react'

const Navbar = ({filterItem, menuList}) => {
  //console.log("fl",filterItem)
  //console.log("ml",menuList)
  return (
    <>
      <nav className='navbar'>
       <div className='btn-group'>
        {//for particular element of menulist
        //passing category in filter function
            menuList.map((element)=>{  //function for partucular menu list 
                return(
                    <button className='btn-group__item' onClick={()=>filterItem(element)}>{element}</button>
                );

            })
        }
       
  
       </div>

    </nav>
    </>
  )
}

export default Navbar
