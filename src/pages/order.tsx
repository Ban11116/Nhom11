// CheckoutPage.tsx
import React from "react";

const Order = () => {
  return (
    <div className="bg-white p-6 max-w-7xl mx-auto">
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <span className="material-icons">Thông Tin Nhận Hàng</span> 
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <input className="col-span-1 border p-2" placeholder="Họ và tên*" />
            <input className="col-span-1 border p-2" placeholder="Số điện thoại*" />
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <select className="border p-2" defaultValue="">
              <option value="" disabled>Chọn Tỉnh / Thành phố*</option>
            </select>
            <select className="border p-2" defaultValue="">
              <option value="" disabled>Chọn Quận / Huyện*</option>
            </select>
            <select className="border p-2" defaultValue="">
              <option value="" disabled>Chọn Phường / Xã*</option>
            </select>
          </div>
          <input className="w-full border p-2 mt-4" placeholder="Địa chỉ*" />
          <div className="grid grid-cols-2 gap-4 mt-4">
            <input className="border p-2" placeholder="Email" />
            <select className="border p-2">
              <option>Giao trong giờ hành chính</option>
            </select>
          </div>
          <br />
           <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <span className="material-icons">Thông Tin Quà Tặng</span> 
          </h2>
          <div className="flex items-center mt-4">
           
            <input type="checkbox" id="gift" className="mr-2" />
            <label htmlFor="gift" className="text-sm">Gửi quà tặng đến bạn bè, người thân (30.000₫ bao gồm phí gới quà và thiệp)</label>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <span className="material-icons">Mã Giảm Giá</span> 
          </h2>
          <div className="flex gap-2">
            <input className="flex-1 border p-2 border-black-500" placeholder="Nhập mã khuyến mãi" />
            <button className="bg-black text-white px-4 py-2">ÁP DỤNG</button>
          </div>
          <div className="mt-6 border-t pt-4 text-sm">
            <div className="flex justify-between mb-2">
              <span>Tạm tính:</span>
              <span>2.088.000 ₫</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Vận chuyển:</span>
              <span className="text-gray-500">Vui lòng nhập địa chỉ</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Điểm tích luũy:</span>
              <span>20.880</span>
            </div>
            <div className="flex justify-between font-bold text-red-600 text-base">
              <span>Tiền phải trả:</span>
              <span>2.088.000 ₫</span>
            </div>
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          </h2>
            <p className="text-xs italic mt-1 text-gray-600">
              (Giá này đã bao gồm thuế GTGT, phí đóng gói, phí vận chuyển và các chi phí phát sinh khác)
            </p>
          </div>

          <div className="flex justify-between items-center mt-6">
            <span className="text-sm">Tiền phải trả: <strong className="text-red-600">1.598.000 ₫</strong></span>
            <div className="flex gap-2">
              <button className="border px-4 py-2">&lt; QUAY LẠI</button>
              <button className="bg-black text-white px-4 py-2">TIẾP TỤC</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Order;
