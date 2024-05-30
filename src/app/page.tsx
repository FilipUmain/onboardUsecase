import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import RestaurantInfoContainer from "@/components/RestaurantInfoContainer";

export default async function Home() {
  return (
    <main className="bg-[#FAFAFA] flex min-h-screen w-[100vw] flex-col justify-between items-center">
      <MaxWidthWrapper>
        <RestaurantInfoContainer />
      </MaxWidthWrapper>
    </main>
  );
}
