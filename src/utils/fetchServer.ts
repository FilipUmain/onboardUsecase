export const fetchServer = async () => {
  const url = "http://localhost:3000/api";

  const res = await fetch(url, {
    cache: "no-cache",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = res.json();
  return data;
};
