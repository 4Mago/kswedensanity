export default {
  title: "Slider",
  name: "slider",
  type: "document",
  fields: [
    {
      title: "Hero Text",
      name: "heroText",
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
      title: "Datum (används för sortering)",
      name: "date",
      type: "date",
    },
  ],
}
