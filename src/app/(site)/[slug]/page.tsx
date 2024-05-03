import getTridentBySlug from "@/actions/get/getTridentBySlug";
import Image from "next/image";

export const revalidate = 3600;
type Props = {
  params: { slug: string };
};
export default async function TridentDetails({ params: { slug } }: Props) {
  const { api, width, height, name } = await getTridentBySlug(slug);
  return (
    <div className="container my-10">
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl">{name}</h1>

      <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-[1.5fr,1fr]">
        <div className="mx-auto w-full sm:w-fit">
          <Image
            className="max-h-[300px] w-full object-contain lg:max-h-[400px]"
            src={`${process.env.NEXT_PUBLIC_URL}/api/v1/tridents/${api.current}?fill=fff&size=2`}
            alt={name}
            width={width}
            height={height}
          />
        </div>
        <div className="h-full w-full rounded-2xl border border-wheat bg-primary p-5">
          <div className="flex">
            <div className="h-10 w-10 bg-red-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
