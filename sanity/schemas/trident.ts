import { defineType, defineField, defineArrayMember } from "sanity";

export const trident = defineType({
  name: "trident",
  title: "Trident",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Trident name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "api",
      title: "Api name",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "name",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) => input.toLowerCase().replace(/\s+/g, "-"),
      },
    }),
    defineField({
      name: "width",
      title: "Width",
      type: "number",
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: "height",
      title: "Height",
      type: "number",
      initialValue: 400,
      validation: (Rule) => Rule.required().positive(),
    }),
  ],
});
