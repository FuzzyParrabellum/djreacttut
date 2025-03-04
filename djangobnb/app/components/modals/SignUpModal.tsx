"use client";

import Modal from "./Modal";

import { useState } from "react";
import { useRouter } from "next/navigation";
import useSignUpModal from "@/app/hooks/useSignUpModal";
import CustomButton from "../forms/CustomButton";

const SignUpModal = () => {
  const router = useRouter();
  const signupModal = useSignUpModal();
  // On veut également keep track de de l'email password et des errurs donc :
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState<string[]>(["cocdzndc"]); // on spécifie un array de string

  const content = (
    <>
      <h2 className="mb-6 text-2xl">Welcome to Djangobnb, please Sign Up</h2>
      <form action="" className="space-y-4">
        <input
          // ci-dessous le e dans onChange={(e) correspond à l'event
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-[54px] rounded-xl border border-gray-300 ps-4"
          placeholder="Your email adress..."
        />
        <input
          type="password"
          onChange={(e) => setPassword1(e.target.value)}
          className="w-full h-[54px] rounded-xl border border-gray-300 ps-4"
          placeholder="Your password..."
        />
        <input
          type="password"
          onChange={(e) => setPassword2(e.target.value)}
          className="w-full h-[54px] rounded-xl border border-gray-300 ps-4"
          placeholder="Repeat password..."
        />
        {errors.map((error, index) => {
          return (
            // chaque error doit avoir une unique key, donc :
            <div
              key={`error_${index}`}
              className="p-5 bg-airbnb text-white rounded-xl opacity-80"
            >
              {error}
            </div>
          );
        })}
        {/* <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
          The error message
        </div> */}
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
