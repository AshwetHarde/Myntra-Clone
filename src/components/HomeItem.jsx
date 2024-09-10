import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { FaCartPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";


const HomeItem = ({item}) => {

  const dispatch = useDispatch();
  const bagItems= useSelector(store => store.bag);
  const elementFound = bagItems.indexOf(item.id) >= 0;

 const handelAddToBag = () =>{
  dispatch(bagActions.addToBag(item.id))
 };

 const handelRemove = () =>{
  dispatch(bagActions.removeFromBag(item.id))
 };

  return <>
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image"/>
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>

      {elementFound ?  
      
      <button type="button" className="btn btn-add-bag btn-danger"onClick={handelRemove}><MdDelete /> <span style={{ marginRight: '1px' }}></span>
      Remove</button>: 
      
      <button type="button" className="btn btn-add-bag btn-success "onClick={handelAddToBag}><FaCartPlus /> <span style={{ marginRight: '2px' }}></span>
      Add to Bag</button> }

      
     


    </div>
  </>
}

export default HomeItem;