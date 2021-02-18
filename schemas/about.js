export default {
  title: "Om oss",
  name: "about",
  type: "document",
  fields: [
    {
      title: "Rubrik",
      name: "title",
      type: "string",
    },
    {
      title: "Beskrivning",
      name: "description",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      title: "Bild",
      name: "image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      title: "Prio?",
      name: "prio",
      type: "boolean",
    },
  ],
}
