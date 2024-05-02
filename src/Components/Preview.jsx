import React from "react";

function Preview({ product, request }) {
  return (
    <div className="w-full max-w-md p-6 border rounded-xl bg-white shadow-lg">
      <h2 className="text-lg font-semibold mb-4">Sipariş Önizleme</h2>
      <div>
        <p>
          <span className="font-semibold">Adı:</span> {request.name}
        </p>
        <p>
          <span className="font-semibold">Soyadı:</span> {request.surname}
        </p>
        <p>
          <span className="font-semibold">Telefon No:</span> {request.phone}
        </p>
        <p>
          <span className="font-semibold">Teslim Alınacak Saat:</span>{" "}
          {request.teslimSaati}
        </p>
        <h3 className="text-lg font-semibold mt-4">Sipariş Detayı</h3>
        <div className="mt-4">
          {product.map((item, index) => (
            <div key={index} className="border rounded-md p-4 mb-4">
              <p className="font-semibold">Ürün Adı: {item.Ürün}</p>
              <p className="font-semibold">Adet: {item.Kilo}</p>
              <p className="font-semibold">Fiyat: {item.ToplamTutar}</p>
            </div>
          ))}
        </div>
        <p className="font-semibold bg-yellow-200 border rounded-md flex justify-center">
          Fiyatlarımız ortalama olarak hesaplanmıştır.
        </p>
      </div>
    </div>
  );
}

export default Preview;
