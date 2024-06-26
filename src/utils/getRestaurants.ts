export const getRestaurants = async () => {
  const res = await fetch(
    "https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api/restaurants",
    {
      next: { revalidate: 30 },
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = res.json();
  return data;
};
