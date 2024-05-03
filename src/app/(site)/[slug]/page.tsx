import getTridentBySlug from "@/actions/get/getTridentBySlug";

export const revalidate = 3600;
type Props = {
  params: { slug: string };
};
export default async function TridentDetails({ params: { slug } }: Props) {
  const trident = await getTridentBySlug(slug);
  console.log(trident);
  return <div>{trident.name}</div>;
}
