import React, { useState } from "react";
import "./ProductForm.css";
import { useAuth } from "../introduce/useAuth";
const ProductForm = ({turnoff}) => {
    const { user,loading} = useAuth();
    const [error,setError]=useState('');
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    brand: "",
    description: "",
    sku: "",
    price: "",
    stock: 0,
    reorderLevel: 10,
    supplier: "",
    purchaseDate: "",
    location: "",
    status: "in_stock",
    unit: "pcs",
    purchasePrice: "",
    notes: "",
  });

  const handleChange = (e) => {setError("")
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
user:user,
newPr:{...formData}
    };
    console.log(JSON.stringify(body));
    fetch("http://localhost:5000/products/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message)
      if(data.message==="Success"){turnoff();  alert("Sản phẩm đã được thêm thành công!");window.location.reload();}
      else{setError("SKUD bạn điền đã xuất hiện ở sản phẩm khác")}
      })
      .catch((error) => {
        console.log("Lỗi:", error);
      });
  };

  return (
    <div className="form-container">
        <span className="close-button" onClick={turnoff}>&times;</span> {/* Dấu X để tắt form */}
    <h2>Product Entry Form</h2>
    <form onSubmit={handleSubmit}>
        <div className="form-row">
            <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="category">Category *</label>
                <input type="text" id="category" name="category" value={formData.category} onChange={handleChange} required />
            </div>
        </div>

        <div className="form-row">
            <div className="form-group">
                <label htmlFor="brand">Brand</label>
                <input type="text" id="brand" name="brand" value={formData.brand} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="sku">SKU *</label>
                <input type="text" id="sku" name="sku" value={formData.sku} onChange={handleChange} required />
            </div>
        </div>

        <div className="form-row">
            <div className="form-group">
                <label htmlFor="price">Price *</label>
                <input type="text" id="price" name="price" value={formData.price} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="purchasePrice">Purchase Price</label>
                <input type="text" id="purchasePrice" name="purchasePrice" value={formData.purchasePrice} onChange={handleChange} />
            </div>
        </div>

        <div className="form-row">
            <div className="form-group">
                <label htmlFor="stock">Stock</label>
                <input type="number" id="stock" name="stock" value={formData.stock} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="reorderLevel">Reorder Level</label>
                <input type="number" id="reorderLevel" name="reorderLevel" value={formData.reorderLevel} onChange={handleChange} />
            </div>
        </div>

        <div className="form-row">
            <div className="form-group">
                <label htmlFor="supplier">Supplier</label>
                <input type="text" id="supplier" name="supplier" value={formData.supplier} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="purchaseDate">Purchase Date</label>
                <input type="date" id="purchaseDate" name="purchaseDate" value={formData.purchaseDate} onChange={handleChange} />
            </div>
        </div>

        <div className="form-row">
            <div className="form-group">
                <label htmlFor="location">Location</label>
                <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="status">Status</label>
                <select id="status" name="status" value={formData.status} onChange={handleChange}>
                    <option value="in_stock">In Stock</option>
                    <option value="low_stock">Low Stock</option>
                    <option value="out_of_stock">Out of Stock</option>
                </select>
            </div>
        </div>

        <div className="form-row">
            <div className="form-group">
                <label htmlFor="unit">Unit</label>
                <input type="text" id="unit" name="unit" value={formData.unit} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="notes">Notes</label>
                <textarea id="notes" name="notes" value={formData.notes} onChange={handleChange}></textarea>
            </div>
        </div>
        <p style={{color:"red"}}>{error}</p>
        <div className="submit-row">
            <div className="submit-group">
                <input type="submit" value="Submit" />
            </div>
        </div>
    </form>
</div>
  );
};

export default ProductForm;
