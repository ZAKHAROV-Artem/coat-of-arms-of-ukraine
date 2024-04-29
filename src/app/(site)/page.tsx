import { Intro } from "@/components/intro";
import Trident from "../../components/trident/trident";
import getTridents from "@/actions/get/getTridents";

export const revalidate = 300;
// export const revalidate = 0; for dev mode
export default async function Home() {
  const tridents = await getTridents();
  return (
    <>
      <Intro />
      <div className="flex flex-wrap justify-center gap-2 p-2 sm:gap-3 sm:p-3 md:gap-5 md:p-5">
        {tridents.map((trident) => (
          <Trident
            key={trident._id}
            link={`${process.env.NEXT_PUBLIC_URL}/api/v1/tridents/${trident.api.current}?fill=fff&size=1`}
            width={trident.width}
            height={trident.height}
            name={trident.name}
          />
        ))}
      </div>
    </>
  );
}
