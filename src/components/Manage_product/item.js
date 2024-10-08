// src/ProductGrid.js
import React,{useState,useEffect} from "react";
import "../Manage_product/item.css";
import { useAuth } from "../introduce/useAuth";
import ProductDetail from "./Product_detail"
const ProductGrid = ({ selectedCategory ,reload, searchTerm}) => {
  const { user ,loading} = useAuth();
  const[products,setProducts] = useState([])
  const[product,setProduct] = useState()
  const[x,setX] = useState()
    // Dữ liệu giả định cho các sản phẩm
    // const products = [
    //   { id: 1, name: 'Sản phẩm 1', category: 'Dấu',image:'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lvmsy4z9mq6p19.webp' },
    //   { id: 8, name: 'Sản phẩm 1', category: 'Dấu',image:'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lvmsy4z9mq6p19.webp' },
    //   { id: 9, name: 'Sản phẩm 1', category: 'Dấu',image:'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lvmsy4z9mq6p19.webp' },
    //   { id: 10, name: 'Sản phẩm 1', category: 'Dấu',image:'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lvmsy4z9mq6p19.webp' },
    //   { id: 11, name: 'Sản phẩm 1', category: 'Dấu',image:'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lvmsy4z9mq6p19.webp' },
    //   { id: 12, name: 'Sản phẩm 1', category: 'Dấu',image:'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lvmsy4z9mq6p19.webp' },
    //   { id: 13, name: 'Sản phẩm 1', category: 'Dấu',image:'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lvmsy4z9mq6p19.webp' },
    //   { id: 14, name: 'Sản phẩm 1', category: 'Dấu',image:'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lvmsy4z9mq6p19.webp' },
    //   { id: 15, name: 'Sản phẩm 1', category: 'Dấu',image:'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lvmsy4z9mq6p19.webp' },
    //   { id: 2, name: 'Sản phẩm 2', category: 'Hằng',image:'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lvmsy4z9mq6p19.webp' },
    //   { id: 3, name: 'Sản phẩm 3', category: 'Hạng',image:'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lvmsy4z9mq6p19.webp' },
    //   { id: 4, name: 'Sản phẩm 4', category: 'Nâng',image:'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lvmsy4z9mq6p19.webp' },
    //   { id: 5, name: 'Sản phẩm 5', category: 'Dẫn dắt',image:'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lvmsy4z9mq6p19.webp' },
    //   { id: 6, name: 'Sản phẩm 6', category: 'Đường',image:'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lvmsy4z9mq6p19.webp' },
    //   { id: 7, name: 'Sản phẩm 7', category: 'Dẫn vào',image:'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lvmsy4z9mq6p19.webp' },
    //   { id: 16, name: 'Sản phẩm 2', category: 'Hằng',image:'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lvmsy4z9mq6p19.webp' }
    // ];
    useEffect(() => {
      const fetchProducts = async () => {
        if (loading) { console.log("Loading user data.");
          return <div>Loading user data...</div>; // Hiển thị khi đang tải dữ liệu người dùng
        }
        try {console.log("render")
          const response = await fetch('http://localhost:5000/products/show', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              user:user,
            }),
          });
          
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
  
          const data = await response.json();
          let o=[]
          for(let i=0;i<data.length;i++) {
          if(!o.includes(data[i].category)){o=[...o,data[i].category]}
          }
          reload(o);
          setProducts(data);
        } catch (error) {
          console.error("Lỗi khi gọi API:", error);
        }
      };
  
      fetchProducts();
    }, [user,x]); // Thêm user vào dependency array
  
    const show=async (a)=>{
      console.log('http://localhost:5000/products/show/'+a)
      const response = await fetch('http://localhost:5000/products/show/'+a, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setProduct({...data})
    }
    const dlt=async (a)=>{
      const isConfirmed = window.confirm(`Bạn có chắc chắn muốn xóa sản phẩm "${a.name}" không?`);
      if (isConfirmed) {
        const response = await fetch('http://localhost:5000/products/deletes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user:user,
            product_delete:a
          }),
        });
        const data = await response.json();
        if(data.message=="Product deleted successfully") {alert(`Sản phẩm "${a.name}" đã được xóa thành công!`);setX("delete");}
        else{alert("Thất bại")}
      }
    }
    const onClose=()=>{
      console.log("onClose")
      setProduct(false);
    }
    let filteredProducts;
    if (selectedCategory) {
      filteredProducts = products.filter(product => product.category === selectedCategory);
    } else {
      filteredProducts = products;
    }
    if(searchTerm!=""){
      filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
    }
  const onUpdate=async(a)=>{
    console.log(a)
    const response = await fetch('http://localhost:5000/products/edit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user:user,
        product_edit:a
      }),
    });
    const data = await response.json();
    console.log(data)
    if(data.message=="success") {alert(`Sản phẩm "${a.name}" đã được cập nhật thành công!`);setX("edit");}
    else{alert("Thất bại")}
  }
    return (
      <>
      {product&& <ProductDetail product={product} onClose={onClose} onUpdate={onUpdate}/>}
      <div className="product-grid">
        {filteredProducts.map((product,index) => (
          <div className="item" key={index}>
            <div className="product-card">
              <img src={product.image} alt="Product Image" className="product-image" />
              <h3 className="product-name">{product.name}</h3>
              <div className="actions">
                <button className="action-button edit-button" onClick={()=>show(product._id)}>chi tiết</button>
                <button className="action-button delete-button" onClick={()=>dlt(product)}>Xóa</button>
              </div>
            </div>
          </div>
        ))}
        
      </div></>
    );
  };
  
  export default ProductGrid;