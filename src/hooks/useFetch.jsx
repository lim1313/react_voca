import { useEffect, useState } from "react";

export default function useFetch(setData, url) {
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  };

  useEffect(() => fetchData(), []);

  return loading;
}
