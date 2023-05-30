/// <reference types="vite/client" />

export type ProjectObj = {
  name: string
  description: string
  image?: string
  link: string,
  colorAccent: string
}

interface ImportMetaEnv {
  VITE_EMAILJS_SERVICEID: string
  VITE_EMAILJS_TEMPLATEID: string
  VITE_EMAILJS_PUBLICKEY: string
}