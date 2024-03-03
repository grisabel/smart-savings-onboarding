import Head from "next/head";
import MainLayout from "@/components/stories/templates/LayoutMain/LayoutMain";
import SuccessResetPasswordDesktop from "@/components/pages/resetPassword/resetPasswordSuccess/layouts/desktop";
import SuccessResetPasswordMobile from "@/components/pages/resetPassword/resetPasswordSuccess/layouts/mobile";

export default function Success() {
  return (
    <>
      <Head>
        <title>Smart Savings</title>
        <meta name="description" content="Smart Savings home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <MainLayout
        desktop={<SuccessResetPasswordDesktop />}
        mobile={<SuccessResetPasswordMobile />}
      />
    </>
  );
}