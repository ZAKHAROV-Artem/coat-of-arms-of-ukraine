import Trident from "@/components/trident/trident";
import getTridents from "@/actions/get/getTridents";

export const revalidate = 3600;
// export const revalidate = 0; for dev mode
export default async function Home() {
  const tridents = await getTridents();
  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 p-2 sm:gap-3 sm:p-3 md:gap-5 md:p-5">
        {tridents.map((trident) => (
          <Trident key={trident._id} trident={trident} />
        ))}
      </div>
    </>
  );
}
