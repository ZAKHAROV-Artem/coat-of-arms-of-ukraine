import { Intro } from "@/components/intro";

export default function Home() {
  return (
    <>
      <Intro />
      <div className="text-6xl text-white">
        <img src="http://localhost:3000/api/v1/tridents/official?fill=fff&size=1" />
      </div>
    </>
  );
}
