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
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide
          style={{
            width: "100%",
            maxWidth: "400px",
            height: "auto",
            position: "relative",
            borderRadius: "10px",
            objectFit: "cover",
            overflow: "hidden",
          }}
        >
          <Image
            alt="BVNX"
            src="/assets/Shooting/bvnx-min.jpg"
            width={500}
            height={700}
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: "100%",
            maxWidth: "450px",
            height: "auto",
            position: "relative",
            borderRadius: "10px",
            overflow: "hidden",
            objectFit: "cover",
          }}
        >
          <Image
            alt="CLESON"
            src="/assets/Shooting/CLESON-562-min.jpg"
            width={500}
            height={700}
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: "100%",
            maxWidth: "450px",
            height: "auto",
            position: "relative",
            borderRadius: "10px",
            overflow: "hidden",
            objectFit: "cover",
          }}
        >
          <Image
            alt="DYZE"
            src="/assets/Shooting/dyze.jpg"
            width={500}
            height={700}
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: "100%",
            maxWidth: "450px",
            height: "auto",
            position: "relative",
            borderRadius: "10px",
            overflow: "hidden",
            objectFit: "cover",
          }}
        >
          <Image
            alt="XS"
            src="/assets/Shooting/EXPORT-XS-41-2-min.jpg"
            width={500}
            height={700}
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: "100%",
            maxWidth: "450px",
            height: "auto",
            position: "relative",
            borderRadius: "10px",
            overflow: "hidden",
            objectFit: "cover",
          }}
        >
          <Image
            alt="PARTYMORE"
            src="/assets/Shooting/pm.jpg"
            width={500}
            height={700}
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: "100%",
            maxWidth: "450px",
            height: "auto",
            position: "relative",
            borderRadius: "10px",
            overflow: "hidden",
            objectFit: "cover",
          }}
        >
          <Image
            alt="LEONE"
            src="/assets/Shooting/image00023-min.jpeg"
            width={500}
            height={700}
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: "100%",
            maxWidth: "450px",
            height: "auto",
            position: "relative",
            borderRadius: "10px",
            overflow: "hidden",
            objectFit: "cover",
          }}
        >
          <Image
            alt="YEND"
            src="/assets/Shooting/YEND-758-min.jpg"
            width={500}
            height={700}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
