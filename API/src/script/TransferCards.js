const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const DgraphClient = require("../DB/Config");
const { gql } = require("graphql-request");


// Connection URL
const url = 'mongodb://root:StocK1122m@159.65.207.121:27017';

// Database Name
const dbName = 'kreditkortskoll';
const client = new MongoClient(url, {useNewUrlParser: true});

const findDocuments = function(db, callback) {
    // Get the documents collection
    const CardsCollection = db.collection('cards');
    // Find some documents
    CardsCollection.find({}).toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      callback(docs);
    });
}


const db = client.db(dbName);

// ( async () => {

//   const query = gql`
//       query MyQuery {
//       queryCreditcard {
//         id
//       }
//     }
//   `

//   const request = await DgraphClient.request(query);
//   const card = request.queryCreditcard
//   card.forEach((card) => {
//     console.log(card.id)
//     const mutation = gql`
//       mutation mutation($id: [ID!]) {
//         updateCreditcard(input: {filter: {id: $id}, remove: {facts: ""}}) {
//           creditcard {
//             id
//           }
//         }
//       }
//     `

//     const variables = {
//       id: card.id
//     }
    
//     DgraphClient.request(mutation, variables)
//   })
// })()

client.connect(async function(err) {
  findDocuments(db, cards => {
      cards.forEach(async(card, i) => {
        const query = gql`
          mutation MyMutation($name: String, $insurances: [InsuranceRef] ){
            updateCreditcard(input: {filter: {name: {eq: $name}}, set: {insurances: $insurances}}) {
              creditcard {
                name
              }
            }
          }
        `
        const variables = {
          name: card.name,
          insurances: card.insurances.map(insurance => {
            return {
              text: insurance.text,
              available: insurance.type === "GOOD" ? true : false
            }
          })
        }
        console.log(variables)

        const res = await DgraphClient.request(query, variables)
        console.log(res.updateCreditcard)
      })
  })
})
const findTableInformation = function(id, db, callback) {
      // Get the documents collection
      const TableCollection = db.collection('tableinformations');
      // Find some documents
      TableCollection.find({cardId:id}).toArray(function(err, doc) {
        assert.equal(err, null);
        console.log("Found the following records");
        callback(doc);
      });
}

  client.connect(function(err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
  
    const db = client.db(dbName);
  
    findDocuments(db, (cards) => {
        cards.forEach( async(card) => {
          findTableInformation(card._id, db, async doc => { 
            const Card = {
              name: card.name,
              rating: card.rating,
              properties: card.properties.map(prop => {
                  return {
                    text:prop.propertie,
                  type: prop.type
                }
              }),
              creditcard_information: {
                annual_fee: doc[0] ? doc[0].Årsavgift : undefined, 
                maximum_credit: doc[0] ? doc[0].Högsta_kredit : undefined, 
                interest: doc[0] ? doc[0].Ränta : undefined, 
                effective_interest: doc[0] ? doc[0].Effektiv_ränta : undefined, 
                interest_free: doc[0] ? doc[0].Räntefritt : undefined, 
                bonus: doc[0] ? doc[0].Bonus : undefined, 
                insurances: doc[0] ? doc[0].Försäkringar : undefined, 
                concierge_Service: doc[0] ? doc[0].Concierge_Service : undefined, 
                card_type: doc[0] ? doc[0].Korttyp : undefined, 
                age_limit: doc[0] ? doc[0].Åldersgräns : undefined, 
                income_requirement: doc[0] ? doc[0].Inkomstkrav : undefined, 
                Currency_surcharge_abroad: doc[0] ? doc[0].Valutapåslag_utlandet : undefined, 
                withdrawal_fee: doc[0] ? doc[0].Uttagsavgift : undefined, 
                minimum_payment_amount: doc[0] ? doc[0].Minsta_belopp_betala : undefined, 
                payment_remarks: doc[0] ? doc[0].Betalningsanmärkningar === "Ja" ? true : false : undefined,
                avia_fee: doc[0] ? doc[0].Aviavgift : undefined, 
                late_fee: doc[0] ? doc[0].Förseningsavgift : undefined, 
                interest_on_arrears: doc[0] ? doc[0].Dröjsmålsränta : undefined, 
                overdraft_fee: doc[0] ? doc[0].Övertrasseringsavgift : undefined, 
              },
              specifics: card.specifics.map(specific => specific.text),
              description: card.description,
              img: card.img,
              url: card.url,
              facts: card.facts.map(fact => fact.text),
              show: card.show,
              order: card.order,
              texts: {
                  insuranceText: card.insuranceText,
                  creditText: card.creditText,
                  bonusText: card.bonustext
              },
              insurances: card.insurances.map(insurance => {
                  return {
                      text: insurance.text,
                      available: insurance.type === "GOOD" ? true : false
                  }
              }),
              requirements: card.requirements
          }
          const query = gql`
                mutation MyMutation($name: String!,$description: String!,$facts: [String],$img: String!,$rating: Int,
                    $order: Int,
                    # $properties: [{
                    #               text: String 
                    # 	            type: String 
                    #             }],
                    $requirements: [String],
                    $specifics: [String],
                    $texts_bonusText: String,
                    $texts_creditText: String,
                    $texts_insuranceText: String,
                    $url: String,
                    $table_annual_fee: String,
                    $table_maximum_credit: String,
                    $table_interest: String,
                    $table_effective_interest: String,
                    $table_interest_free: String,
                    $table_bonus: String,
                    $table_insurances: String,
                    $table_concierge_Service: String,
                    $table_card_type: String,
                    $table_age_limit: String,
                    $table_income_requirement: String,
                    $table_Currency_surcharge_abroad: String,
                    $table_withdrawal_fee: String,
                    $table_withdrawal_minimum: String,
                    $table_minimum_payment_amount: String,
                    $table_payment_remarks: Boolean,
                    $table_avia_fee: String,
                    $table_late_fee: String,
                    $table_interest_on_arrears: String,
                    $table_overdraft_fee: String,
                    ) {
                addCreditcard(input: {name: $name, description: $description, facts: $facts, img: $img, rating: $rating, order: $order,  requirments: $requirements, show: true, specifics: $specifics, texts: {bonusText: $texts_bonusText, creditText: $texts_creditText, insuranceText: $texts_insuranceText}, creditcard_information:{
                  annual_fee: $table_annual_fee,  
                  maximum_credit: $table_maximum_credit,  
                  interest: $table_interest,  
                  effective_interest: $table_effective_interest,  
                  interest_free: $table_interest_free,  
                  bonus: $table_bonus,  
                  insurances: $table_insurances,  
                  concierge_Service: $table_concierge_Service,  
                  card_type: $table_card_type,  
                  age_limit: $table_age_limit,  
                  income_requirement: $table_income_requirement,  
                  Currency_surcharge_abroad: $table_Currency_surcharge_abroad,  
                  withdrawal_fee: $table_withdrawal_fee,  
                  withdrawal_minimum: $table_withdrawal_minimum,  
                  minimum_payment_amount: $table_minimum_payment_amount,  
                  payment_remarks: $table_payment_remarks,  
                  avia_fee: $table_avia_fee,  
                  late_fee: $table_late_fee,  
                  interest_on_arrears: $table_interest_on_arrears,  
                  overdraft_fee: $table_overdraft_fee,   
                },  url: $url}) {
                  creditcard {
                    name
                  }
                }
                }
                `
            const variables = {
              name:Card.name,
              description: Card.description,
              facts: Card.facts,
              img: Card.img,
              rating: Card.rating,
              order: Card.order,
              // properties: Card.properties,
              requirements: Card.requirements,
              specifics: Card.specifics,
              texts_bonusText: Card.texts.bonusText,
              texts_creditText: Card.texts.creditText,
              texts_insuranceText: Card.texts.insuranceText,
              url: Card.url,
              table_annual_fee: Card.creditcard_information.annual_fee,
              table_maximum_credit: Card.creditcard_information.maximum_credit,
              table_interest: Card.creditcard_information.interest,
              table_effective_interest: Card.creditcard_information.effective_interest,
              table_interest_free: Card.creditcard_information.interest_free,
              table_bonus: Card.creditcard_information.bonus,
              table_insurances: Card.creditcard_information.insurances,
              table_concierge_Service: Card.creditcard_information.concierge_Service,
              table_card_type: Card.creditcard_information.card_type,
              table_age_limit: Card.creditcard_information.age_limit,
              table_income_requirement: Card.creditcard_information.income_requirement,
              table_Currency_surcharge_abroad: Card.creditcard_information.Currency_surcharge_abroad,
              table_withdrawal_fee: Card.creditcard_information.withdrawal_fee,
              table_withdrawal_minimum: Card.creditcard_information.withdrawal_minimum,
              table_minimum_payment_amount: Card.creditcard_information.minimum_payment_amount,
              table_payment_remarks: Card.creditcard_information.payment_remarks,
              table_avia_fee: Card.creditcard_information.avia_fee,
              table_late_fee: Card.creditcard_information.late_fee,
              table_interest_on_arrears: Card.creditcard_information.interest_on_arrears,
              table_overdraft_fee: Card.creditcard_information.overdraft_fee,
            }
            try {
              const request = await DgraphClient.request(query, variables)
              console.log(request)
              
            } catch (error) {
              console.log(error)
            }
          })
        })
    })
  
  });