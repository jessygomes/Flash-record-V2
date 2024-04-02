import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faXTwitter,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Footer() {
  return (
    <div className="">
      <footer className="py-[2rem] px-[2rem] lg:px-[5rem] lg:py-[2rem] lg:mt-[3rem] flex flex-col justify-center items-center text-center gap-[2rem] text-white">
        <div className="w-[5rem] h-auto lg:w-[10rem] lg:h-auto lg:mb-[1rem]">
          <Image
            className=" object-contain"
            src="/Flash_Blanc_fondTransparent.png"
            width={500}
            height={500}
            alt="Fresque logo"
          />
        </div>

        <div>
          <div className="flex flex-wrap flex-row justify-center items-center gap-[1rem]">
            <Link href="https://www.instagram.com/flash.0ff?igshid=NGVhN2U2NjQ0Yg==">
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                className="hover:text-[#ee7124] transition-all duration-200 ease-in-out"
              />
            </Link>
            <Link href="https://www.youtube.com/@flashrecordsofficiel">
              <FontAwesomeIcon
                icon={faYoutube}
                size="2x"
                className="hover:text-[#ee7124] transition-all duration-200 ease-in-out"
              />
            </Link>
            <Link href="https://x.com/Flash0ff?t=JKXRmQq2isR0TZEUjo_MFA&s=09">
              <FontAwesomeIcon
                icon={faXTwitter}
                size="2x"
                className="hover:text-[#ee7124] transition-all duration-200 ease-in-out"
              />
            </Link>
            <Link href="https://www.tiktok.com/@flash.0ff?_t=8iLE0f0AL9E&_r=1">
              <FontAwesomeIcon
                icon={faTiktok}
                size="2x"
                className="hover:text-[#ee7124] transition-all duration-200 ease-in-out"
              />
            </Link>
          </div>
        </div>

        <div className="my-[1rem] lg:my-[0rem]">
          <div className="flex flex-col gap-[1rem]">
            <Link href="/mentions-legales">
              <h3 className=" font-walkway text-[1rem] hover:text-[#ee7124] transition-all duration-200 ease-in-out">
                Mentions Légales
              </h3>
            </Link>
            <Link href="/politique-de-confidentialite">
              <h3 className="font-walkway text-[1rem] hover:text-[#ee7124] transition-all duration-200 ease-in-out">
                Politique de confidentitalité
              </h3>
            </Link>
            <h3 className=" font-walkway text-[1rem] ">
              Website by :{" "}
              <Link
                href="https://inthegleam.com/"
                className="hover:text-[#ee7124] transition-all duration-200 ease-in-out"
              >
                InTheGleam
              </Link>
            </h3>
          </div>
        </div>
      </footer>
      <p className="text-[0.8rem] p-[1rem] font-walkway text-white text-center">
        Copyright © 2024 - Flash Records - All Rights Reserved
      </p>
    </div>
  );
}
