"use server";
// IMPORTANT si veut débugger quelque chose qui utilise 'use server" alors quand va faire un console.log('zfezfz') pour print quelque chose et voir que le serveur a bien reçu l'ordre de print ça, on verra ce message de console.log dans le terminal, et plus spécifiquement ds le terminal qui run npm, et donc pas dans le browser

// on met use server ci-dessus parce qu'on veut que ça run sur le serveur et
// pas ds le browser pr des raisons de sécurité

import { cookies } from "next/headers";

// cf https://nextjs.org/docs/app/api-reference/functions/cookies

/* 

cf https://blog.logrocket.com/guide-cookies-next-js/ utile pr comprendre cookies
et comment ça marche avec next plus particulièrement.

Client-side vs. server-side cookies

One question a lot of people ask is if there are any differences between client and server-side cookies.

Cookies can be created from both client and server operations. Server-side cookies refer to cookies typically created and accessed via HTTP headers. Regardless of how you create them, cookies are still stored on the user’s browser and can be accessed directly on the client side.

However, there’s an exception for httpOnly cookies. If you create a cookie with the httpOnly attribute enabled, such cookies cannot be directly accessed via client-side operations, reducing the risk of XSS attacks. */

export async function handleLogin(
  userId: string,
  accessToken: string,
  refreshToken: string
) {
  // on va vouloir stocker chacun de ces trois paramètres ds des cookies
  const cookieStore = await cookies();

  cookieStore.set("session_userid", userId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // one week
    path: "/", //c'est lendroit ou les cookies seront stored
  });

  cookieStore.set("session_access_token", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60, // one hour
    path: "/", //c'est lendroit ou les cookies seront stored
  });

  cookieStore.set("session_refresh_token", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // one week
    path: "/", //c'est lendroit ou les cookies seront stored
  });
}

export async function resetAuthCookies() {
  const cookieStore = await cookies();

  cookieStore.set("session_userid", "");
  cookieStore.set("session_access_token", "");
  cookieStore.set("session_refresh_token", "");
}

//
// Get Data

export async function getUserId() {
  const cookieStore = await cookies();
  // si ne met pas get('session_userid')?.value un point d'interrogation,
  // alors typescript va indiquer que possible problème comme on est pas
  // sur que get retourne bien qq chose
  const userId = cookieStore.get("session_userid")?.value;
  // de même ici on indique ce qui se passe si on a pas d'userId, et ce bout
  // de code devient secure et ne risque pas de crash
  return userId ? userId : null;
}

export async function getAccessToken() {
  const cookieStore = await cookies();
  let accessToken = cookieStore.get("session_access_token")?.value;

  console.log(accessToken, "ACCESS TOKEN !!!");
  console.log("YOUHOUHOUHOUHOHUOHU!");

  return accessToken;
}
