import getTridentBySlug from "@/actions/get/get-trident-by-slug";
import { TridentDetails } from "./_components/trident-details";
import { notFound } from "next/navigation";

export const revalidate = 3600;
type Props = {
  params: { slug: string };
};
export default async function TridentDetailsPage({ params: { slug } }: Props) {
  const trident = await getTridentBySlug(slug);
  if (!trident) notFound();
  return <TridentDetails trident={trident} />;
}
