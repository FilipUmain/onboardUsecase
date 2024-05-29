export const getFilters = async () => {
  const url = "https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api/filter/";

  const res = await fetch(url, {
    next: { revalidate: 30 },
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = res.json();
  return data;
};
