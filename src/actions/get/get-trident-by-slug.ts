import { client } from "../../../sanity/lib/client";
import { Trident } from "@/types/sanity";

export default async function getTridentBySlug(slug: string) {
  return await client.fetch<Trident>(
    `
  *[_type == "trident" && api.current == $slug] {...} [0]
  `,
    { slug },
    {
      next: {
        revalidate: 3600, // look for updates to revalidate cache every hour
      },
    },
  );
}
