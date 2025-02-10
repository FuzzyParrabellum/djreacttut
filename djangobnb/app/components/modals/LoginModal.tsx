"use client";

import Modal from "./Modal";

import { useState } from "react";
import useLoginModal from "@/app/hooks/useLoginModal";
import CustomButton from "../forms/CustomButton";

const LoginModal = () => {
  const loginModal = useLoginModal();
  const content = (
    <>
      <h2 className="mb-6 text-2xl">Welcome to Djangobnb, please Log in</h2>
      <form action="" className="space-y-4">
        <input
          type="email"
          className="w-full h-[54px] rounded-xl border border-gray-300 ps-4"
          placeholder="Your email adress..."
        />
        <input
          type="password"
          className="w-full h-[54px] rounded-xl border border-gray-300 ps-4"
          placeholder="Your password..."
        />
        <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
          The error message
        </div>
        <CustomButton
          label="Submit"
          onClick={() => console.log("Test bouton submit")}
        />
      </form>
    </>
  );

  return (
    <Modal
      isOpen={loginModal.isOpen}
      close={loginModal.close}
      label="Log in"
      content={content}
    />
  );
};

export default LoginModal;
