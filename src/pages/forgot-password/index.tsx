import Head from "next/head";
import MainLayout from "@/components/stories/templates/LayoutMain/LayoutMain";
import RetrievePasswordLayoutDesktop from "@/components/pages/forgotPassword/forgotPassword/layouts/RetrievePasswordLayoutDesktop";
import RetrievePasswordLayoutMobile from "@/components/pages/forgotPassword/forgotPassword/layouts/RetrievePasswordLayoutMobile";

export default function ForgotPassword() {
  return (
    <>
      <Head>
        <title>Smart Savings</title>
        <meta name="description" content="Smart Savings home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <MainLayout
        desktop={<RetrievePasswordLayoutDesktop />}
        mobile={<RetrievePasswordLayoutMobile />}
      />
    </>
  );
}
