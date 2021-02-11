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
      title: "Meny",
      name: "menu",
      type: "array",
      of: [{ type: "menuItem" }],
    },
  ],
}
