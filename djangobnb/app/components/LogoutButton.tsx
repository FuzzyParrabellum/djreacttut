"use client";

// on utilise le router parce qu'on veut que ça redirgie direct vers la page
// d'acceuil

import { useRouter } from "next/navigation";

import { resetAuthCookies } from "../lib/actions";

import MenuLink from "./navbar/MenuLink";

const LogoutButton: React.FC = () => {
  const router = useRouter();

  const submitLogout = async () => {
    resetAuthCookies();

    router.push("/");
  };

  return <MenuLink label="Log out" onClick={submitLogout} />;
};

export default LogoutButton;
