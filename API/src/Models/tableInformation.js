const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
    cardId:{
        type: mongoose.Schema.Types.ObjectId,
        required:true
    },
    cardName: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required:true,

    },
    Årsavgift: {
        type: String,
        default:''
    },
    Högsta_kredit: {
        type: String,
        default:''
    },
    Ränta: {
        type: String,
        default:''
    },
    Effektiv_ränta: {
        type: String,
        default:''
    },
    Räntefritt: {
        type: String,
        default:''
    },
    Bonus: {
        type: String,
        default:''
    },
    Försäkringar: {
        type: String,
        default:''
    },
    Concierge_Service: {
        type: String,
        default:''
    },
    Korttyp: {
        type: String,
        default:''
    },
    Åldersgräns: {
        type: String,
        default:''
    },
    Inkomstkrav: {
        type: String,
        default:''
    },
    Valutapåslag_utlandet: {
        type: String,
        default:''
    },
    Uttagsavgift: {
        type: String,
        default:''
    },
    Minsta_belopp_betala: {
        type: String,
        default:''
    },
    Betalningsanmärkningar: {
        type: String,
        default:''
    },
    Aviavgift: {
        type: String,
        default:''
    },
    Förseningsavgift: {
        type: String,
        default:''
    },
    Dröjsmålsränta: {
        type: String,
        default:''
    },
    Övertrasseringsavgift: {
        type: String,
        default:''
    },
    Recension: {
        type: String,
        default:''  
    }
})

const tableInformation = mongoose.model('tableInformation', tableSchema);

module.exports = tableInformation;