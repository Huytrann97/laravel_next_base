/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Cookies from "js-cookie";
import DropDownButton from "@/app/components/dropdownBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

type IHeader = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  hasAccessToken: string;
  setHasAccessToken: React.Dispatch<React.SetStateAction<string>>;
};
const Header = ({
  isOpen,
  setIsOpen,
  hasAccessToken,
  setHasAccessToken,
}: IHeader) => {
  React.useEffect(() => {
    const accessToken = Cookies.get("accessToken") || "";
    setHasAccessToken(accessToken);
  }, []);

  return (
    <>
      <header
        className="h-[7vh] w-full flex items-center bg-gray-50 "
        style={{ position: "absolute", zIndex: 20 }}
      >
        {!hasAccessToken && (
          <div className="flex ">
            <img src="/logo.png" alt="Logo" className="pl-12" />

            <div className=" text-black text-lg font-bold pl-6 py-auto">
              Attendance
            </div>
          </div>
        )}

        <div className=" w-full p-0 mx-2 lg:mx-12">
          {hasAccessToken && (
            <div className="w-full flex justify-between">
              <div className="lg:flex w-2/5 hidden ">
                <img src="/logo.png" alt="Logo" />

                <div className=" text-black text-lg ml-8">
                  Attendance System
                </div>
              </div>
              <div
                className="lg:hidden text-3xl cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                <FontAwesomeIcon icon={faBars} />
              </div>
              <img src="/logo.png" alt="Logo" className="p-0 block lg:hidden" />

              <DropDownButton />
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
