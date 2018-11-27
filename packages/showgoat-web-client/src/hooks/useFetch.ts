import { useState, useEffect } from 'react';

export default function useFetch<T>(url: string): [T | null, boolean, string] {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setLoading(false);
        setError('');
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    })();
  }, [url]);

  return [data, loading, error];
}
