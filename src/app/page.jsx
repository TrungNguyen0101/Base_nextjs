/* eslint-disable no-dupe-keys */

'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import RelateItem from '@/components/RelateItem';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

SwiperCore.use([Navigation, Pagination]);
function Home() {
  const data = useMemo(
    () => ({
      id: 1,
      name: 'Laptop ASUS VivoBook 14 A412FA-EK734T (14" FHD/i5-10210U/8GB/512GB SSD/Intel UHD)',
      image:
        'https://lh3.googleusercontent.com/OPNIaDml5ZTh9653Gqtxc8BaWFqHZmSjaMs0ou321y3YWNR_68HybgMlVsflBN147gok7WxnsmrB7rKq9Z4a1mhnaS2lSYUPMA=rw-w300',
      price: 25800000,
      discountPercent: 10,
      seller: 'Xiaomi',
      relatedProducts: [
        {
          id: 2,
          name: 'Laptop Lenovo (14" 4GB/128GB SSD/Intel UHD)',
          image:
            'https://lh3.googleusercontent.com/TvxcE7fes0NtPyjDUqmvVlbdgj63tujZtJCroBtrrMXu1j-MC1Rns56ia6z2USjinoa5gp_GfbthX5BRThBHEdBXFbWXBQ4K=rw-w300',
          discountPercent: '',
          availableQuantity: 3,
          price: 12000000,
          discountPercent: 5,
        },
        {
          id: 3,
          name: 'Apple Macbook Pro 16 inch Retina display',
          image:
            'https://lh3.googleusercontent.com/TsvY9ecw4JYAwF0Ez-M5h_xc1qtX2bwLS21Zc_CbKy_qgIB0OEkbSnEREiXqxZEgnaPCyhLvSh04q7Z1GQlRFeyh5sprWto=rw-w300',
          discountPercent: '',
          availableQuantity: 4,
          price: 15190000,
        },
        {
          id: 4,
          name: 'Laptop Dell (16" 8GB/256GB SSD/Intel UHD)',
          image:
            'https://lh3.googleusercontent.com/awNX33cUhBXFLT7Wv9aNBfKo9wiwiwLgPi2JfNgZKHGWTmYZ1N5AMQNE4HZT2AuZMZ1zX2Exk7UwQ0d-irm_sjcUwClzZTlW=rw-w300',
          discountPercent: '',
          availableQuantity: 3,
          price: 19000000,
        },
      ],
    }),
    []
  );
  const breakpointsSwiper = useMemo(
    () => ({
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 10,
      },
      1457: {
        slidesPerView: 7,
        spaceBetween: 10,
      },
    }),
    []
  );
  function formatNumber(number) {
    const nf = new Intl.NumberFormat();
    const value = number?.toString().replace(/\$|,|\./g, '');

    return nf.format(value, 10);
  }

  return (
    <section>
      <div className="max-w-[300px] mb-[20px]">
        <div className="">
          <Image
            alt=""
            src={data.image}
            fill
            className="relative object-cover "
          />
        </div>
        <div className="mt-[10px] px-[10px] mb-[5px]">
          <span className="text-[24px] font-bold text-red-500">
            {formatNumber(data.price)}đ
          </span>
          <div className="flex gap-x-[8px] text-[14px] mb-[10px]">
            <span className="text-[#828080] font-medium line-through">
              {formatNumber((data.price * (100 - data.discountPercent)) / 100)}
            </span>
            <span className="text-red-500">-{data.discountPercent}%</span>
          </div>
          <p className="font-medium break-all">{data.name}</p>
          <span className="font-medium text-blue-600">
            <span className="text-[#828080] mr-[5px] font-normal">By</span>
            Xiaomi
          </span>
        </div>
      </div>
      <span className="font-semibold text-[24px] mb-[18px] inline-block">
        Sản phẩm liên quan
      </span>
      <Swiper
        spaceBetween={10}
        shouldSwiperUpdate
        className="overflow-visible"
        breakpoints={breakpointsSwiper}
      >
        {data.relatedProducts.length > 0 &&
          data.relatedProducts.map((item) => (
            <SwiperSlide key={item.name} className="h-auto ">
              <RelateItem item={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
}

export default Home;
