/**
 * graphql.config.js
 *
 * Specifies graphql schema configuration(s)
 */

const config = {
  schema: ['./schema.graphql'],
  documents: ['./src/**/*.{ts,graphql}'],
}

module.exports = config
