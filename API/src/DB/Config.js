const {GraphQLClient} = require("graphql-request")

  const endpoint = 'https://nameless-brook-300003.eu-central-1.aws.cloud.dgraph.io/graphql'

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: 'YmQ1MDgwZWRlMzEwNTkwYTBjYjdmN2UzNWY0NjY3OTQ=',
    },
  })

module.exports = graphQLClient;