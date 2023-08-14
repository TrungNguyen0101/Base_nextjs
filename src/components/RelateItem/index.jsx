import React from 'react';
import Image from 'next/image';

function RelateItem({ item }) {
  function formatNumber(number) {
    const nf = new Intl.NumberFormat();
    const value = number?.toString().replace(/\$|,|\./g, '');

    return nf.format(value, 10);
  }
  console.log('file: index.jsx:4 ~ RelateItem ~ props:', item);
  return (
    <div className="flex flex-col p-[10px] border-white border-[2px] h-full">
      <div className="max-h-[200px] ">
        <Image alt="" src={item.image} fill className="relative object-cover" />
      </div>
      <span className="text mt-[10px] font-normal mb-[5px]">{item.name}</span>
      <span className="font-medium text-yellow-500 mb-[15px]">{`Còn ${item.availableQuantity} sản phẩm`}</span>
      <span className="text-[20px] text-red-500 font-bold">
        {formatNumber(item.price)}đ
      </span>
      {item.discountPercent !== '' && (
        <div className="flex gap-x-[8px] text-[14px] mb-[10px]">
          <span className="text-[#828080] font-medium line-through">
            {formatNumber((item.price * (100 - item.discountPercent)) / 100)}
          </span>
          <span className="text-red-500">-{item.discountPercent}%</span>
        </div>
      )}
      <button
        className="w-full mt-auto border-[2px] text-red-500 border-red-500 py-[5px] rounded-lg hover:text-white hover:bg-red-500 
        hover:border-white duration-300 "
        type="button"
      >
        Thêm vào giỏ hàng
      </button>
    </div>
  );
}

export default RelateItem;
