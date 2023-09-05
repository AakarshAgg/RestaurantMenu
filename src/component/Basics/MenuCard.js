import React from 'react'

function sayHello() { //function on click sayhello
    alert('Thank you for Ordering!');
  }

const MenuCard = ({ menuData }) => { //props have been passed from Restaurant
    
    // console.log(menuData)
    return (
        
        <>
            <section className='main-card--cointainer'>
                {menuData.map((element,index) => {
//mapping of all the json elemets
                   // const{id,name,image,description}=curElem;
                    return (
                        <>
                            <div className="card-container " key={index}>
                                <div className="card">
                                    <div className="card-body">
                                        <span className="card-number card-circle subtle">{index+1}</span>
                                        <span className='card-author subtle' >{element.name}</span>
                                        <h2 className='card-title' >{element.name}</h2>
                                        <span className='card-description subtle'>{element.description}</span>
                                        <div className='card-read'> Read </div>
                                        </div>
                                    <img src={element.image} alt="images" className="card-media" />
                                </div>
                                <button type="submit" className='card-tag' onClick={sayHello}>Order now</button>
                                
                            </div>
                        </>
                    );
                })}
            </section>


        </>
    );
};

export default MenuCard
