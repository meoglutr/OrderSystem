import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";

function Orders({ ordersData }) {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedQuantity, setSelectedQuantity] = useState("");
  const [selectedSpice, setSelectedSpice] = useState("");
  const products = [
    { name: "Kanat", price: 180 },
    { name: "But", price: 120 },
    { name: "Sarma", price: 150 },
  ];

  const handleProductChange = (event) => {
    setSelectedProduct(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setSelectedQuantity(event.target.value);
  };

  const handleSpiceChange = (event) => {
    setSelectedSpice(event.target.value);
  };

  const handleAddProduct = () => {
    if (selectedProduct && selectedQuantity) {
      const selectedProductInfo = selectedProduct.split("-");
      const productName = selectedProductInfo[0];
      const productPrice = parseInt(selectedProductInfo[1]);
      const quantity = parseInt(selectedQuantity);
      const spice = selectedSpice;

      const newProduct = {
        Ürün: productName,
        Kilo: quantity,
        Baharat: spice,
        ToplamTutar: quantity * productPrice,
      };

      setSelectedProducts([...selectedProducts, newProduct]);

      setSelectedProduct("");
      setSelectedQuantity("");
      setSelectedSpice("");
    }
  };

  useEffect(() => {
    ordersData(selectedProducts);
  }, [selectedProducts]);

  const handleRemoveProduct = (index) => {
    const updatedSelectedProducts = [...selectedProducts];
    updatedSelectedProducts.splice(index, 1);
    setSelectedProducts(updatedSelectedProducts);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label htmlFor="product" className="mb-2">Ürün</label>
          <select
            id="product"
            name="ürün"
            className="w-full p-3 border rounded-md"
            value={selectedProduct}
            onChange={handleProductChange}
          >
            <option value="">Ürün Seçiniz</option>
            {products.map((item, index) => (
              <option value={`${item.name}-${item.price}`} key={index}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="quantity" className="mb-2">Miktar</label>
          <select
            id="quantity"
            name="miktar"
            className="w-full p-3 border rounded-md"
            value={selectedQuantity}
            onChange={handleQuantityChange}
          >
            <option value="">Miktar Seçiniz</option>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((quantity, index) => (
              <option value={quantity} key={index}>
                {quantity} kg
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="spice" className="mb-2">Baharat</label>
          <select
            id="spice"
            name="baharat"
            className="w-full p-3 border rounded-md"
            value={selectedSpice}
            onChange={handleSpiceChange}
          >
            <option value="">Baharat Seçiniz</option>
            <option value="baharatlı">Baharatlı</option>
            <option value="baharatsız">Baharatsız</option>
          </select>
        </div>
        <div className="flex items-end justify-end">
          <button
            onClick={handleAddProduct}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Ekle
          </button>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-bold mb-4">Seçilen Ürünler</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {selectedProducts.map((product, index) => (
            <li
              key={index}
              className="bg-white shadow-md rounded-md p-4 flex justify-between items-center"
            >
              <span>
                {product.Ürün} - {product.Kilo} kg -{" "}
                {product.Baharat && `${product.Baharat} - `}{" "}
                {product.ToplamTutar} TL
              </span>
              <button
                onClick={() => handleRemoveProduct(index)}
                className="text-red-500"
              >
                <MdDeleteForever className="w-6 h-6" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Orders;
