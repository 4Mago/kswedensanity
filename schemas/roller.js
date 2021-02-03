export default {
    title: "Roller",
    name: "roller",
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
        title: "Roller",
        name: "roller",
        type: "array",
        of: [{type: 'rollItem'}]
      }
    ]
  }
  