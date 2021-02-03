export default {
    title: "Navigation",
    name: "navigation",
    type: "document",
    fields: [
      {
        title: "Logga",
        name: "logga",
        type: "image",
      },
      {
        title: "Meny",
        name: "meny",
        type: "array",
        of: [{type: 'menyItem'}]
      }
    ]
  }
  