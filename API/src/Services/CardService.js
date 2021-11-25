const { gql } = require("graphql-request");
const graphQLClient = require("../DB/Config");

class CardService {

    async getCards (filter) {
        const query = gql`
            query getCreditcards {
                queryCreditcard {
                    id
                    name
                    url
                    texts {
                        bonusText
                        creditText
                        insuranceText
                    }
                    specifics
                    information {
                        key
                        value
                    }
                    show
                    requirments
                    rating
                    order
                    insurances {
                        text
                        available
                    }
                    img
                    description
                    properties {
                        text
                        type
                    }
                }
            }

        `
        const response = await graphQLClient.request(query)
        return response.queryCreditcard;
    }

    async getCard (name) {
        const query = gql`
            query getCreditcard($name: String) {
                queryCreditcard(filter: {name: {eq: $name}}) {
                    id
                    name
                    url
                    texts {
                        bonusText
                        creditText
                        insuranceText
                    }
                    specifics
                    information {
                        key
                        value
                    }
                    show
                    requirments
                    rating
                    order
                    insurances {
                        text
                        available
                    }
                    img
                    description
                    properties {
                        text
                        type
                    }
            }
        }`

        const variables = {
            name
        }

        const response = await graphQLClient.request(query, variables);

        return response.queryCreditcard[0];
    }


    async getCardTableInformation (id) {
        const query = gql`
        query getCardTableInformation($id: ID!) {
            getCreditcard(id: $id) {
                name
                id
                img
                url
                creditcard_information {
                Currency_surcharge_abroad
                age_limit
                annual_fee
                avia_fee
                bonus
                card_type
                concierge_Service
                effective_interest
                income_requirement
                insurances
                interest
                interest_free
                interest_on_arrears
                late_fee
                maximum_credit
                minimum_payment_amount
                overdraft_fee
                payment_remarks
                withdrawal_fee
                withdrawal_minimum
                }
            }
        }`

        const variables = {
            id
        }

        console.log("Request")
        const request = await graphQLClient.request(query, variables);

        return request.getCreditcard
    }

    async getBestcard () {
        try {
            const query = gql`
                query MyQuery {
                    queryBestcard {
                        name
                        img
                        description
                        affliateUrl
                    }
                }`
            
            const request = await graphQLClient.request(query);

            return request.queryBestcard;
        } catch (error) {
            
        }
    }

}

module.exports = CardService;