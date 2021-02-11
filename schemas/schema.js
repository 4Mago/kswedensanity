// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator"

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type"

import navigation from "./navigation.js"
import menuItem from "./menuItem.js"
import services from "./services.js"
import team from "./team.js"
import contact from "./contact.js"
import clients from "./clients.js"
import about from "./about.js"
import slider from "./slider.js"
import qualificationItem from "./qualificationItem"
import colorScheme from "./colorScheme.js"
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    navigation,
    menuItem,
    services,
    team,
    contact,
    clients,
    about,
    slider,
    qualificationItem,
    colorScheme,
  ]),
})
