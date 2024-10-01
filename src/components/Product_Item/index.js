import { Link } from "react-router-dom";
import './Product_item.css'

function Product_Item(props){
  return(
    <>
      <div class="inner-pro">
        <div class="img"> <img alt="" src={props.image_url} /></div>
        <div class="content">
            <div class="title"></div>
            <p class="desc">Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
            <div class="sale">
                <div class="price"></div>
                  <Link to="/">
                    <button class="btn">
                      <i class="fa-solid fa-cart-shopping"> </i>
                    </button>
                  </Link>
                </div>
        </div>
    </div>
    </>
  )
}

export default Product_Item;