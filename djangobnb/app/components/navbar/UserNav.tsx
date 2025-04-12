"use client";

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { useRouter } from "next/navigation";

import MenuLink from "./MenuLink";

import useLoginModal from "@/app/hooks/useLoginModal";
import useSignUpModal from "@/app/hooks/useSignUpModal";
import LogoutButton from "../LogoutButton";

interface UserNavProps {
  userId?: string | null;
}

const UserNav: React.FC<UserNavProps> = ({ userId }) => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const signupModal = useSignUpModal();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-2 relative inline-block border border rounded-full">
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center">
        <Image
          src="/burger_icon.png"
          alt="burger logo"
          width={16}
          height={16}
        />
        <Image
          src="/account_icon.png"
          alt="user account logo"
          width={16}
          height={16}
        />
      </button>

      {isOpen && (
        <div className="w-[220px] absolute top-[60px] right-0 bg-white border rounded-xl shadow-md flex flex-col cursor-pointer">
          {userId ? (
            <>
              <MenuLink
                label="My properties"
                onClick={() => {
                  setIsOpen(false);
                  router.push("/myproperties");
                }}
              />
              <MenuLink
                label="My reservations"
                onClick={() => {
                  setIsOpen(false);
                  router.push("/myreservations");
                }}
              />
              <MenuLink
                label="My favorites"
                onClick={() => {
                  setIsOpen(false);
                  router.push("/myfavorites");
                }}
              />
              <MenuLink
                label="Inbox"
                onClick={() => {
                  setIsOpen(false);
                  router.push("/inbox");
                }}
              />
              <LogoutButton />
            </>
          ) : (
            <>
              <MenuLink
                label="Log in"
                onClick={() => {
                  console.log("Clicked button log in");
                  loginModal.open();
                  setIsOpen(false); //le open du burger menu
                }}
              />
              <MenuLink
                label="Sign up"
                onClick={() => {
                  console.log("Clicked button sign up");
                  signupModal.open();
                  setIsOpen(false); //le open du burger menu
                }}
              />
            </>
          )}

          {/* <MenuLink
            label="Log in"
            onClick={() => {
              console.log("Clicked button log in");
              loginModal.open();
              setIsOpen(false); //le open du burger menu
            }}
          />
          <MenuLink
            label="Sign up"
            onClick={() => {
              console.log("Clicked button sign up");
              signupModal.open();
              setIsOpen(false); //le open du burger menu
            }}
          />
          <LogoutButton /> */}
        </div>
      )}
    </div>
  );
};

export default UserNav;
