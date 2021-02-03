export default {
    title: "Uppdrag",
    name: "uppdrag",
    type: "document",
    fields: [
      {
        title: "Titel",
        name: "titel",
        type: "string",
      },
      {
        title: "Länk",
        name: "link",
        type: "url",
      },
      {
        title: "Logga",
        name: "logga",
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
      }
    ]
  }
  