"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";
import styles from "./Carrousel.module.css";

export default function Carrousel() {
  return (
    <div className={styles.carrouselContainer}>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 50,
          depth: 300,
          modifier: 2,
          slideShadows: false,
        }}
        loop={true}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide
          style={{
            width: "500px",
            height: "600px",
            position: "relative",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <Image
            alt="BVNX"
            src="/assets/Shooting/bvnx-min.jpg"
            layout="fill"
            objectFit="cover"
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: "500px",
            height: "600px",
            position: "relative",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <Image
            alt="CLESON"
            src="/assets/Shooting/CLESON-562-min.jpg"
            layout="fill"
            objectFit="cover"
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: "500px",
            height: "600px",
            position: "relative",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <Image
            alt="DYZE"
            src="/assets/Shooting/DYZE-40-min.jpg"
            layout="fill"
            objectFit="cover"
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: "500px",
            height: "600px",
            position: "relative",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <Image
            alt="XS"
            src="/assets/Shooting/EXPORT-XS-41-2-min.jpg"
            layout="fill"
            objectFit="cover"
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: "500px",
            height: "600px",
            position: "relative",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <Image
            alt="PARTYMORE"
            src="/assets/Shooting/pm-min.jpg"
            layout="fill"
            objectFit="cover"
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: "500px",
            height: "600px",
            position: "relative",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <Image
            alt="LEONE"
            src="/assets/Shooting/image00023-min.jpeg"
            layout="fill"
            objectFit="cover"
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: "500px",
            height: "600px",
            position: "relative",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <Image
            alt="YEND"
            src="/assets/Shooting/YEND-758-min.jpg"
            layout="fill"
            objectFit="cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
