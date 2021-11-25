let CardService = require("../Services/CardService");
CardService = new CardService();

class CardsController {
    async getCards (req, res) {
        try {
            const cards = await CardService.getCards();
            res.status(200).send({
                cards
            })
        } catch (error) {
            res.status(400).send({
                cards: []
            })
        }
    }

    async getCard (req, res) {
        const name = req.params.name;
        try {
            if(!name) throw new Error("Name must be provided");

            const card = await CardService.getCard(name);
            res.status(200).send({
                card
            })
        } catch (error) {
            res.status(400).send({
                card: []
            })
        }
    }

    async compareCards (req, res) {
        try {
            let ids = req.query.cards;

            if(!ids) return res.status(404).send({msg:'You have to provide card ids'})
    
            ids = JSON.parse(ids)
    
            if(!Array.isArray(ids)) return res.status(404).send({msg:'You have to provide an array'})
    
            let information = [];
    
            for (let i = 0; i < ids.length; i++) {
                const id = ids[i];
                information.push(CardService.getCardTableInformation(id))
            }
    
            information = await Promise.all(information)

            res.status(200).send({
                information
            })
        } catch (error) {
            res.status(400).send({
                information: []
            })
        }
    }

    async getBestcard (req, res) {
        try {
            const Bestcard = await CardService.getBestcard()

            res.status(200).send({
                Bestcard
            })
        } catch (error) {
            res.status(400).send({
                information: undefined
            })
        }
    }
}

module.exports = CardsController;