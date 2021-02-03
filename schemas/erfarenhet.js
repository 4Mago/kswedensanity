export default {
    title: "Erfarenhet",
    name: "erfarenhet",
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
      }
    ]
  }
  