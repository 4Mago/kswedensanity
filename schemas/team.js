export default {
  title: "Team",
  name: "team",
  type: "document",
  fields: [
    {
      title: "Namn",
      name: "name",
      type: "string",
    },
    {
      title: "Roll",
      name: "role",
      type: "string",
    },
    {
      title: "Kompetenser",
      name: "qualifications",
      type: "array",
      of: [{ type: "qualificationItem" }],
    },
    {
      title: "Beskrivning",
      name: "description",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      title: "Email",
      name: "email",
      type: "string",
    },
    {
      title: "Telefon",
      name: "phone",
      type: "string",
    },
    {
      title: "Område",
      name: "profession",
      type: "string",
      options: {
        list: ["management", "specialist", "team"], // <-- predefined values
        layout: "dropdown", // <-- defaults to 'dropdown'
      },
    },
  ],
}
