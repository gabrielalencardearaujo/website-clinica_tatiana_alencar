'use client';
import Cookies from 'js-cookie';
import React from 'react';

type IUser = {
  statuCode: 200;
  authenticate: true;
  error: '';
  data: { name: string; email: string; id: string; role: string; iat: string };
};

export function useFetch() {
  const [data, setData] = React.useState<IUser | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const token = Cookies.get('access_token');
      try {
        const response = await fetch(`api/auth?access_token=${token}`, { cache: 'no-store' });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        if (error instanceof Error) setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}
