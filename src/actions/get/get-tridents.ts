import { client } from "../../../sanity/lib/client";
import { Trident } from "@/types/sanity";

export default async function getTridents() {
  return await client.fetch<Trident[]>(
    `
  *[_type == "trident"] | order(_updatedAt desc) {...} 
  `,
    {},
    {
      next: {
        revalidate: 3600, // look for updates to revalidate cache every hour
      },
    },
  );
}
