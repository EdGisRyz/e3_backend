// Página raíz — redirige inmediatamente a /users.
// Next.js App Router no tiene un equivalente a <Navigate> de React Router.
// La redirección se hace con la función redirect() del servidor.

import { redirect } from 'next/navigation';

export default function RootPage() {
  redirect('/users');
}