// ProductDetail.js
import React, { useState } from 'react';
import '../Manage_product/Product_detail.css';

const ProductDetail = ({ product, onClose, onUpdate }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editData, setEditData] = useState({ ...product });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditData({
            ...editData,
            [name]: value
        });
    };

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        // Gọi hàm onUpdate để cập nhật sản phẩm
        onUpdate(editData);
        setIsEditing(false);
    };

    return (
        <div className="product-detail-overlay">
            <div className="product-detail-container">
                <span className="close-button" onClick={onClose}>&times;</span>
                {!isEditing ? (
                    <div className="product-info">
                        <h2>{product.name}</h2>
                        <p><strong>Category:</strong> {product.category}</p>
                        <p><strong>Brand:</strong> {product.brand}</p>
                        <p><strong>SKU:</strong> {product.sku}</p>
                        <p><strong>Price:</strong> ${product.price}</p>
                        <p><strong>Stock:</strong> {product.stock}</p>
                        <p><strong>Reorder Level:</strong> {product.reorderLevel}</p>
                        <p><strong>Supplier:</strong> {product.supplier}</p>
                        <p><strong>Purchase Date:</strong> {new Date(product.purchaseDate).toLocaleDateString()}</p>
                        <p><strong>Location:</strong> {product.location}</p>
                        <p><strong>Status:</strong> {product.status}</p>
                        <p><strong>Unit:</strong> {product.unit}</p>
                        <p><strong>Purchase Price:</strong> ${product.purchasePrice}</p>
                        <p><strong>Notes:</strong> {product.notes}</p>
                        <button className="edit-button-detail" onClick={handleEditToggle}>Edit</button>
                    </div>
                ) : (
                    <div className="product-edit-form">
                        <h2>Edit Product</h2>
                        <form onSubmit={handleUpdate}>
                            <div className="form-group">
                                <label htmlFor="name">Name *</label>
                                <input type="text" id="name" name="name" value={editData.name} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="category">Category *</label>
                                <input type="text" id="category" name="category" value={editData.category} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="brand">Brand</label>
                                <input type="text" id="brand" name="brand" value={editData.brand} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="sku">SKU *</label>
                                <input type="text" id="sku" name="sku" value={editData.sku} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="price">Price *</label>
                                <input type="number" id="price" name="price" value={editData.price} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="purchasePrice">Purchase Price</label>
                                <input type="number" id="purchasePrice" name="purchasePrice" value={editData.purchasePrice} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="stock">Stock</label>
                                <input type="number" id="stock" name="stock" value={editData.stock} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="reorderLevel">Reorder Level</label>
                                <input type="number" id="reorderLevel" name="reorderLevel" value={editData.reorderLevel} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="supplier">Supplier</label>
                                <input type="text" id="supplier" name="supplier" value={editData.supplier} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="purchaseDate">Purchase Date</label>
                                <input type="date" id="purchaseDate" name="purchaseDate" value={editData.purchaseDate} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="location">Location</label>
                                <input type="text" id="location" name="location" value={editData.location} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="status">Status</label>
                                <select id="status" name="status" value={editData.status} onChange={handleChange}>
                                    <option value="in_stock">In Stock</option>
                                    <option value="low_stock">Low Stock</option>
                                    <option value="out_of_stock">Out of Stock</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="unit">Unit</label>
                                <input type="text" id="unit" name="unit" value={editData.unit} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="notes">Notes</label>
                                <textarea id="notes" name="notes" value={editData.notes} onChange={handleChange}></textarea>
                            </div>
                            <div className="submit-row">
                                <button type="submit" className="save-button">Save</button>
                                <button type="button" className="cancel-button" onClick={handleEditToggle}>Cancel</button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductDetail;
