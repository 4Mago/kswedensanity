export default {
    title: "Konsult",
    name: "konsult",
    type: "document",
    fields: [
      {
        title: "Namn",
        name: "namn",
        type: "string",
      },
      {
       title: "Bild",
       name: "bild",
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
        title: "Roller",
        name: "roller",
        type: "array",
        of: [{type: 'string' }]
      },
      {
        title: "Telefon",
        name: "telefon",
        type: "string"
      },
      {
        title: "Email",
        name: "email",
        type: "string"
      }
    ]
  }
  