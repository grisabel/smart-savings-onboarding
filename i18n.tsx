import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "loginButtonLabel": "Log In",
        "registerButtonLabel": "I want to sign up!",
        "btn-back" : "Back",
        "btn-next" : "Continue",

        "input-email-label" : "Email",
        "input-email-placeholder" : "Enter your email",
        "input-password-label" : "Password",
        "input-password-placeholder" : "Enter your password",
        "input-text-name-label" : "Name",
        "input-text-name-placeholder" : "Enter your name",
        "input-text-lastname-label" : "Last name",
        "input-text-lastname-placeholder" : "Enter your last names",
        "input-text-birthday-label" : "Date of birth",
        "input-text-birthday-placeholder" : "dd/mm/aaaa",

        "login now": "Log in now",
        "better financial control": "Take a step towards better financial control!",
        "forgotPassword": "Forgot your password?",
        "achieve-goals" : "We help you to achieve your goals!",
        "create-account" : "Create an account",
        "welcome": "Welcome!",
        "about-yourself": "Tell us about youself.",
        "forgot-your-password" : "Forgot your password?",
        "give-your-data" : "Provide us with the following details and we will send you a link to reset your password.",
        "sent-email" : "An email has been sent to",
        "sent-email-success" : "You have successfully completed the registration process.",
        "take-control" : "Start taking control of your income and expenses today"

      },
    },
    es: {
      translation: {
        "loginButtonLabel": "Iniciar Sesión",
        "registerButtonLabel": "¡Quiero darme de alta!",
        "btn-back" : "Atrás",
        "btn-next" : "Continuar",

        "input-email-label" : "Email",
        "input-email-placeholder" : "Introduzca su email",
        "input-password-label" : "Contraseña",
        "input-password-placeholder" : "Introduzca su contraseña",
        "input-text-name-label" : "Nombre",
        "input-text-name-placeholder" : "Introduzca su nombre",
        "input-text-lastname-label" : "Apellidos",
        "input-text-lastname-placeholder" : "Introduzca sus apellidos",
        "input-text-birthday-label" : "Fecha de nacimiento",
        "input-text-birthday-placeholder" : "dd/mm/aaaa",

        "login now": "Inicia sesión ahora.",
        "better financial control": "¡Da un paso hacia un mejor control financiero!",
        "forgotPassword": "¿Olvidaste la contraseña?",
        "achieve-goals" : "¡Te ayudamos a conseguir tus metas!",
        "create-account" : "Créate una cuenta",
        "welcome" : "¡Bienvenido!",
        "about-yourself" : "Cuéntanos un poco sobre ti.",
        "forgot-your-password" : "¿Olvidaste tu contraseña?",
        "give-your-data" : "Facilítanos los siguientes datos y te enviaremos un enlace para restablecer tu contraseña.",
        "sent-email" : "Se ha enviado un email a",
        "sent-email-success" : "Has completado con éxito el proceso de registro.",
        "take-control": "Comienza a tomar el control de tus ingresos y gastos hoy mismo."
      },
    },
  },
  lng: "es",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
