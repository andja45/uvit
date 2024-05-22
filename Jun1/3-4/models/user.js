const mongoose = require('mongoose');  

const schema = new mongoose.Schema({ 
    _id: mongoose.Schema.Types.ObjectId, 
    ime: {
        type: String,
        required: true
    },
    prezime: String,
    starost: {
        type: Number,
        required: true
    },
    admin:{
        type: Boolean,
        default: false
    },
}, {collection: 'korisnici'});

const model = mongoose.model('UserList', schema);  

async function dohvatiKorisnike(){
    return await model.find().sort({starost:1}).exec();  
}

async function obrisiKorisnika(id){
    const korisnik = await model.find( { _id: id } ).exec();  // sad je izgleda ok bez konverta?
    console.log('korisnik:', korisnik);

    if(!korisnik.admin){
        await model.deleteOne( { _id: id } ).exec();
        console.log('brisem ga');
        return true;
    } else{
        console.log('ne brisem ga');
        return false; 
    }
}

async function filtrirajStarost(godine){
    return await model.find( { starost: godine } ).exec();
    //                            { $eq: godine  }
}

module.exports = {  
    dohvatiKorisnike,
    obrisiKorisnika,
    filtrirajStarost
}


