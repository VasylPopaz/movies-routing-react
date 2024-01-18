import { useEffect, useState } from 'react';

export const useHttp = (fn, param) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fn(param)
      .then(res => setData(res))
      .catch(({ response }) => setError(response.data.status_message))
      .finally(() => setIsLoading(false));
  }, [fn, param]);
  return { data, error, isLoading };
};
