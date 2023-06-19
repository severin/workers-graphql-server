const { gql } = require('apollo-server-cloudflare')

module.exports = gql`
  type Query {
    ping: String
    timestamp: String
  }
`
