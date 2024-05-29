export const getOpen = async (id: string) => {
  const url =
    "https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api/open/" + id;

  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = res.json();
  return data;
};
