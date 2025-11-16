"use client";

import Spinner from '@/components/spinner';
import { HOME_ROUTE, LOGIN_ROUTE } from '@/constants/routes';
import { allowedAdminRoles } from '@/helpers/auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const AdminLayout = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
console.log("➡️ Full user object:", user);
console.log("➡️ user.roles type:", Array.isArray(user?.roles) ? 'array' : typeof user?.roles);
console.log("➡️ has access?", allowedAdminRoles(user?.roles));
  const router = useRouter();

  // ✅ Compute access ONCE
  const hasAdminAccess = allowedAdminRoles(user?.roles);

  useEffect(() => {
    if (!user) {
      router.push(LOGIN_ROUTE);
    } else if (!hasAdminAccess) {
      router.push(HOME_ROUTE);
    }
  }, [user, hasAdminAccess, router]);

  // 🔁 Loading state: if user is still being fetched, show spinner
  if (!user || !hasAdminAccess) {
    return (
      <div className='flex justify-center py-20'>
        <Spinner className='h-12 w-12 fill-gray-400' />
      </div>
    );
  }


  return (
    <div>
      I am admin sir go away.
      {children}
    </div>
  );
};

export default AdminLayout;