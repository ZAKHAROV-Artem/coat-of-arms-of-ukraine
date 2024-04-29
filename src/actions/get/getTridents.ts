import { groq } from "next-sanity";
import { client } from "../../../sanity/lib/client";
import { Trident } from "@/types/sanity";

export default async function getTridents() {
  return await client.fetch<Trident[]>(groq`
  *[_type == "trident"] | order(_updatedAt desc) {...} 
  `);
}
