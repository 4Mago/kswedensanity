export default {
  title: "Kontakt",
  name: "contakt",
  type: "document",
  fields: [
    {
      title: "Rubrik",
      name: "title",
      type: "string",
    },
    {
      title: "Text",
      name: "text",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      title: "Email",
      name: "email",
      type: "string",
    },
    { title: "Telefon", name: "phone", type: "string" },
  ],
}
