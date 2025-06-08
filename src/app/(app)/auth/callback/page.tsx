// app/auth/callback/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import supabaseClient from '@/lib/supabase/client';

export default function CallbackPage() {
  const router = useRouter();
  const supabase = supabaseClient;

  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window !== 'undefined') {
      // Extract the token from the URL hash
      const hash = window.location.hash.substring(1);
      const params = new URLSearchParams(hash);
      const access_token = params.get('access_token');
      const refresh_token = params.get('refresh_token');
      const token_type = params.get('token_type');
      const expires_in = params.get('expires_in');

      if (access_token && refresh_token) {
        supabase.auth.setSession({
          access_token,
          refresh_token,
        }).then(({ error }) => {
          if (error) {
            console.error('Error setting session:', error);
            router.push('/auth/login?error=invalid_token');
          } else {
            // Successful login - redirect to home or previous page
            router.push('/');
          }
        });
      } else {
        // No tokens found - redirect to login
        router.push('/auth/login?error=missing_token');
      }
    }
  }, [router, supabase.auth]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* <Loader /> */}
      <p className="ml-2">Completing login...</p>
    </div>
  );
}