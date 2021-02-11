export default {
  title: "Tjänster",
  name: "services",
  type: "document",
  fields: [
    {
      title: "Rubrik",
      name: "title",
      type: "string",
    },
    {
      title: "Bild",
      name: "thumbnail",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      name: "description",
      type: "array",
      title: "Beskrivning",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      title: "Datum (används för sortering)",
      name: "date",
      type: "date",
    },
  ],
}
