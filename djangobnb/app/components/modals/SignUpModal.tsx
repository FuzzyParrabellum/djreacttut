"use client";

import Modal from "./Modal";

import { useState } from "react";
import { useRouter } from "next/navigation";
import apiService from "@/app/services/apiService";
import useSignUpModal from "@/app/hooks/useSignUpModal";
import CustomButton from "../forms/CustomButton";
import { handleLogin } from "@/app/lib/actions";

const SignUpModal = () => {
  //
  // Variables
  const router = useRouter();
  const signupModal = useSignUpModal();
  // On veut également keep track de de l'email password et des errurs donc :
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState<string[]>([]); // on spécifie un array de string

  //
  // Submit functionnality

  const submitSignUp = async () => {
    // prof dit qu'on utilise pas le formData de base element javascript, mais
    // que l'appelle quand même comme ça parce qu'aime bien l'appeler comme ça
    const formData = {
      // a gauche en clé c'est le nom auquel le backend s'attend, à droite en
      // valeur c'est la variable email qu'on a définit un peu au-dessus genre
      // const [email, setEmail] = useState("");
      email: email,
      password1: password1,
      password2: password2,
    };

    const response = await apiService.post(
      "/api/auth/register/",
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

      signupModal.close();

      // Ici on redirige vers la page d'acceuil
      router.push("/");

      // alternative si on a pas de (response.access), donc si pas la réponse
      // qu'on attendait
    } else {
      // ci-dessous on s'attend à un array de strings:  string[]
      // on va vouloir loop à travers toutes les valeurs de la response avec
      // Object.values()
      const tmpErrors: string[] = Object.values(response).map((error: any) => {
        return error;
      });

      setErrors(tmpErrors);
    }
  };

  const content = (
    <>
      <h2 className="mb-6 text-2xl">Welcome to Djangobnb, please Sign Up</h2>
      <form action={submitSignUp} className="space-y-4">
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
        {/* <CustomButton
          label="Submit"
          onClick={() => console.log("Test bouton submit sign up")}
        /> */}
        <CustomButton label="Submit" onClick={submitSignUp} />
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
