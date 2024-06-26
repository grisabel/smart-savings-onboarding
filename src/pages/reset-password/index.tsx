import Head from "next/head";

import MainLayout from "@/components/stories/templates/LayoutMain/LayoutMain";
import ResetPasswordDesktop from "@/components/pages/resetPassword/resetPassword/layouts/ResetPasswordDesktop";
import ResetPasswordMobile from "@/components/pages/resetPassword/resetPassword/layouts/ResetPasswordMobile";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function ResetPassword() {
  return (
    <>
      <Head>
        <title>Smart Savings</title>
        <meta name="description" content="Smart Savings home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <MainLayout
        desktop={<ResetPasswordDesktop />}
        mobile={<ResetPasswordMobile />}
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale = 'es' }) => {
  return {
    props: {
      ...await serverSideTranslations(locale, ['common'])
    },
  };
}
