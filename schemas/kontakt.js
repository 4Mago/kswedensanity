export default {
    title: "Kontakt",
    name: "kontakt",
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
        title: "Email",
        name: "email",
        type: "string"
      },
      {title: "Telefon",
      name: "telefon",
      type: "string"
    }
    ]
  }
  