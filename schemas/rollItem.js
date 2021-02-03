export default {
    title: "Specifika Roller",
    name: "rollItem",
    type: "object",
    fields: [
      {
        title: "Name",
        name: "name",
        type: "string",
      },
      {
          title: "Ikon",
          name: "ikon",
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
        title: "Link",
        name: "link",
        type: "string",
      },
    ]
  }
  