export default {
  title: "Uppdrag",
  name: "clients",
  type: "document",
  fields: [
    {
      title: "Titel",
      name: "title",
      type: "string",
    },
    {
      title: "Logga",
      name: "logo",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
  ],
}
