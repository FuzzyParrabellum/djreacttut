"use client";

import Modal from "./Modal";

import { useState } from "react";
import { useRouter } from "next/navigation";
import useLoginModal from "@/app/hooks/useLoginModal";
import CustomButton from "../forms/CustomButton";
import apiService from "@/app/services/apiService";
import { handleLogin } from "@/app/lib/actions";

const LoginModal = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  // cf voir SignUpModal.tsx pr explications communes
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  // Login functionality
  const submitLogin = async () => {
    // prof dit qu'on utilise pas le formData de base element javascript, mais
    // que l'appelle quand même comme ça parce qu'aime bien l'appeler comme ça
    const formData = {
      // a gauche en clé c'est le nom auquel le backend s'attend, à droite en
      // valeur c'est la variable email qu'on a définit un peu au-dessus genre
      // const [email, setEmail] = useState("");
      email: email,
      password: password,
    };

    const response = await apiService.post(
      "/api/auth/login/",
      JSON.stringify(formData)
    );

    // ici on s'attend à ce que la réponse ait une propriété "access", et donc
    // que tout soit ok
    if (response.access) {
      // Fonction handleLogin

      handleLogin(response.user.pk, response.access, response.refresh);
      // et effectivement on a en réponse l'object response, avec dedans
      // une clé access, une clé refresh, et une clé user qui a un dictionnaire
      // contenant l'email et le pk de l'utilisateur.

      loginModal.close();

      // Ici on redirige vers la page d'acceuil
      router.push("/");

      // alternative si on a pas de (response.access), donc si pas la réponse
      // qu'on attendait
    } else {
      setErrors(response.non_field_errors);
      // cf https://www.django-rest-framework.org/api-guide/exceptions/
      // Validation errors are handled slightly differently, and will include the field names as the keys in the response. If the validation error was not specific to a particular field then it will use the "non_field_errors" key, or whatever string value has been set for the NON_FIELD_ERRORS_KEY setting.
    }
  };

  const content = (
    <>
      <h2 className="mb-6 text-2xl">Welcome to Djangobnb, please Log in</h2>
      <form action="" className="space-y-4">
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-[54px] rounded-xl border border-gray-300 ps-4"
          placeholder="Your email adress..."
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full h-[54px] rounded-xl border border-gray-300 ps-4"
          placeholder="Your password..."
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
        <CustomButton label="Submit" onClick={submitLogin} />
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
