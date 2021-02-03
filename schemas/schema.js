// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import navigation from './navigation.js'
import menyItem from './menyItem.js'
import artikel from './artikel.js'
import konsult from './konsult.js'
import kontakt from './kontakt.js'
import uppdrag from './uppdrag.js'
import omOss from './omOss'
import rollItem from './rollItem'
import roller from './roller'
import erfarenhet from './erfarenhet.js'
import erfarenhetHeader from './erfarenhetHeader.js'
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
   navigation,
   menyItem,
   artikel,
   konsult,
   kontakt,
   uppdrag,
   omOss,
   rollItem,
   roller,
   erfarenhet,
   erfarenhetHeader
  ])
})
