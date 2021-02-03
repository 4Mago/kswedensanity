export default {
    title: "Artikel eller Tjänst",
    name: "artikel",
    type: "document",
    fields: [
    {
        title: "Titel",
        name: "titel",
        type: "string",
        },
      {
        title: "thumbnail",
        name: "thumbnail",
        type: "image",
      },
      {
        title: "focused thumbnail",
        name: "focusedThumbnail",
        type: "image"
      },
      {
        name: 'beskrivning',
        type: 'array',
        title: 'Beskrivning',
        of: [
          {
            type: 'block'
          }
        ]
      },
      {
        title: "Datum",
        name: "datum",
        type: "date"
      },
      {
        title: "Tjänster?",
        name: "tjanster",
        type: "boolean"
      },
      {
        title: "Slider",
        name: "slider",
        type: "boolean"
      },
      {
        title: "Nyhet?",
        name: "nyhet",
        type: "boolean"
      }
    ]
  }
  