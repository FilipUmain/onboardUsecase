export const getPriceRange = async (id: string) => {
  const url =
    "https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api/price-range/" + id;

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
