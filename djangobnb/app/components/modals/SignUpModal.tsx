"use client";

import Modal from "./Modal";

import { useState } from "react";
import useSignUpModal from "@/app/hooks/useSignUpModal";
import CustomButton from "../forms/CustomButton";

const SignUpModal = () => {
  const signupModal = useSignUpModal();
  const content = (
    <>
      <h2 className="mb-6 text-2xl">Welcome to Djangobnb, please Sign Up</h2>
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
        <input
          type="password"
          className="w-full h-[54px] rounded-xl border border-gray-300 ps-4"
          placeholder="Repeat password..."
        />
        <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
          The error message
        </div>
        <CustomButton
          label="Submit"
          onClick={() => console.log("Test bouton submit sign up")}
        />
      </form>
    </>
  );

  return (
    <Modal
      isOpen={signupModal.isOpen}
      close={signupModal.close}
      label="Sign up"
      content={content}
    />
  );
};

export default SignUpModal;
