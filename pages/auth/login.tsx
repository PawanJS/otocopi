import Head from "next/head";

import Login from "../../App/Auth/Login/login";

export default function Sign_in() {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login to animal social media" />
      </Head>
      <Login/>
    </>
  );
}
