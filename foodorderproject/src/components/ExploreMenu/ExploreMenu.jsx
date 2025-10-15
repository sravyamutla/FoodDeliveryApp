import React from 'react'
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>
        The Explore Menu in a food order app lets users discover a variety of cuisines, dishes, 
        and restaurants in one place. It showcases popular items, trending meals, categories like 
        vegetarian or fast food, and personalized recommendations, making it easy to browse, 
        choose, and satisfy cravings quickly.
      </p>
      
      <div className='explore-menu-list'>
        {menu_list.map((item, index) => {
          return (
            <div  onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}key={index} className='explore-menu-list-item'>
              <img className={category===item.menu_name?"active":""}src={item.menu_image} alt={item.menu_name} />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr/>
    </div>
  )
}

export default ExploreMenu;
