import React from "react";

const Cart = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="text-xl font-bold flex items-center gap-2 mb-6 text-gray-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-orange-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6h13m-11 0a1 1 0 001 1h6a1 1 0 001-1m-8 0h8"
          />
        </svg>
        Giỏ hàng của bạn
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full border text-sm text-left min-w-[600px]">
          <thead className="bg-gray-100 font-semibold">
            <tr>
              <th className="p-3">SẢN PHẨM</th>
              <th className="p-3">GIÁ</th>
              <th className="p-3">SỐ LƯỢNG</th>
              <th className="p-3">THÀNH TIỀN</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-3 flex items-center gap-2">
                <img
                  src="/product.jpg"
                  alt="sp"
                  className="w-16 h-16 object-cover"
                />
                Nước hoa CK One 100ml
              </td>
              <td className="p-3">850.000 ₫</td>
              <td className="p-3">
                <input type="number" value={1} className="w-16 border px-2" />
              </td>
              <td className="p-3">850.000 ₫</td>
            </tr>
          </tbody>
        </table>
      </div>


      <div className="mt-6 text-right">
        <span className="font-bold text-lg text-red-600">
          Tạm tính: 1.050.000 ₫
        </span>
        <button className="ml-4 bg-black text-white px-4 py-2">MUA NGAY</button>
      </div>

      <div className="mt-10">
        <h2 className="text-lg font-semibold mb-4">Sản phẩm bạn đã xem</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="border p-4 text-sm text-center rounded shadow-sm hover:shadow-md transition"
            >
              <img
                src="/product.jpg"
                alt={`sp-${i}`}
                className="mx-auto w-full h-40 object-cover rounded"
              />
              <p className="mt-3 font-medium">Nước hoa demo</p>
              <p className="text-red-600 font-bold">999.000 ₫</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
