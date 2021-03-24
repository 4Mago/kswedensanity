export default {
  title: "Navigation",
  name: "navigation",
  type: "document",
  fields: [
    {
      title: "Logga",
      name: "logo",
      type: "image",
    },
    {
      title: "Logga 2",
      name: "logo2",
      type: "image",
    },
    {
      title: "Logga 3",
      name: "logo3",
      type: "image",
    },
    {
      title: "Meny",
      name: "menu",
      type: "array",
      of: [{ type: "menuItem" }],
    },
  ],
}
