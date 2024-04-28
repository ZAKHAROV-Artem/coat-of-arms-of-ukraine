import { Intro } from "@/components/intro";
import Trident from "./../components/trident/trident";

export default function Home() {
  return (
    <>
      <Intro />
      <div className="flex flex-wrap justify-center gap-2 p-2 sm:gap-3 sm:p-3 md:gap-5 md:p-5">
        <Trident
          link="http://localhost:3000/api/v1/tridents/official?fill=fff&size=1"
          width={276}
          height={400}
          name="Offial"
        />
        <Trident
          link="http://localhost:3000/api/v1/tridents/pixel?fill=fff&size=1"
          width={276}
          height={400}
          name="Pixel"
        />
        <Trident
          link="http://localhost:3000/api/v1/tridents/simple?fill=fff&size=1"
          width={276}
          height={400}
          name="Simple"
        />
      </div>
    </>
  );
}
