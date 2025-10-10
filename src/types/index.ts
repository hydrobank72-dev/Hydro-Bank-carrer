export interface Job {
  id: number;
  title: string;
  image: string;
  link: string;
}

export type NavLink = {
  title: string;
  href: string;
};

export interface Application {
  name: string;
  email: string;
  whatsapp: string;
  role: string;
  skills: string;
  portfolio: string;
  message: string;
  nda: string;
  submittedAt: string;
}

export interface FormData {
  name: string;
  email: string;
  whatsapp: string;
  role: string;
  skills: string;
  portfolio: string;
  message: string;
  nda: boolean;
  resume?: File | null;
}
