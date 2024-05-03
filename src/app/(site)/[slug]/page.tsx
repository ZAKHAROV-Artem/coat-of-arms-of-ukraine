import getTridentBySlug from "@/actions/get/getTridentBySlug";
import { TridentDetails } from "./_components/trident-details";

export const revalidate = 3600;
type Props = {
  params: { slug: string };
};
export default async function TridentDetailsPage({ params: { slug } }: Props) {
  const trident = await getTridentBySlug(slug);
  return <TridentDetails trident={trident} />;
}
