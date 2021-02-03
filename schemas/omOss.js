export default {
    title: "Om Oss",
    name: "omOss",
    type: "document",
    fields: [
      {
        title: "Titel",
        name: "titel",
        type: "string",
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
        title: "Andra Titel",
        name: "andraTitel",
        type: "string",
      },
      {
        name: 'beskrivning2',
        type: 'array',
        title: 'Beskrivning2',
        of: [
          {
            type: 'block'
          }
        ]
      },
      {title: "Bild",
      name: "bild",
      type: "image"
    }
    ]
  }
  