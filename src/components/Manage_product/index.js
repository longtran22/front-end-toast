import React, { useState, useRef } from "react";
import "../Manage_product/index.css"; // Để tạo kiểu
import ProductGrid from "./item.js";
import ProductForm from '../../components/Manage_product/ProductForm';
import History from "../../components/Manage_product/history.js"
const ProductManager = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [unselectedCategory, unsetSelectedCategory] = useState('');
  const [a, setA] = useState(false);
  const [b, setB] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("default"); // Mặc định

  const categoriesRef = useRef(null);
  const scrollAmount = 125 * 3;

  const handleScrollLeft = () => {
    if (categoriesRef.current) {
      categoriesRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleScrollRight = () => {
    if (categoriesRef.current) {
      categoriesRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const turnonA = () => {
    setA(true);
  };
  const turnonB = () => {
    setB(true);
  }
  const turnoffA = () => {
    setA(false);
  };
  const turnoffB = () => {
    setB(false);
  };
  const reload_categorie = (a) => {
    setCategories(a);
  };

  return (
    <div className="product-manager">
      {a && <ProductForm turnoff={turnoffA} />}
      {b && <History turnoff={turnoffB} />}
      <div className="x">
              <div className="filter-bar">
        <button className="scroll-button" onClick={handleScrollLeft}>◀</button>
        <div className="scrollable-categories" ref={categoriesRef}>
          {categories.map((category) => (
            <button
              style={{ width: "115px", marginRight: "9px" }}
              key={category}
              className={`category-button ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => {
                if (unselectedCategory !== category) {
                  unsetSelectedCategory(category);
                  setSelectedCategory(category);
                } else {
                  unsetSelectedCategory('');
                  setSelectedCategory('');
                }
              }}
            >
              {category}
            </button>
          ))}
        </div>
        <button className="scroll-button" onClick={handleScrollRight}>▶</button>
        <button className="create-button" onClick={turnonA}>Add</button>
        
      </div>
      <div className="extended-filter-bar">
        <input
          type="text"
          placeholder="Tìm kiếm..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <select 
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="sort-select"
        >
          <option value="default">Sắp xếp theo</option>
          <option value="price">Giá</option>
          <option value="name">Tên</option>
          {/* Thêm các tùy chọn khác nếu cần */}
        </select>
        <button className="history-button" onClick={turnonB}>Xem lịch sử</button>
      </div>
      </div>

      {/* Mở rộng thanh điều khiển để chứa tìm kiếm, sắp xếp và xem lịch sử */}


      {/* Hiển thị grid sản phẩm */}
      <ProductGrid selectedCategory={selectedCategory} reload={reload_categorie} searchTerm={searchTerm} sortBy={sortBy} />
    </div>
  );
};

export default ProductManager;
