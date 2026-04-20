// Página de usuarios — Server Component.
// Responsabilidad única: ensamblar el layout con el Client Component del dominio.
// No contiene lógica de datos ni llamadas HTTP.

import { MainLayout } from '@/layouts/MainLayout';
import { UserList } from '@/features/users/UserList';

export default function UsersPage() {
  return (
    <MainLayout>
      <UserList />
    </MainLayout>
  );
}