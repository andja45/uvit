const { addListener } = require('../app');
const userModel = require('../models/user');

async function prikazPocetne(req, res, next){
    try {
        res.render('userList.ejs', {
            korisnici: await userModel.dohvatiKorisnike() 
        });  

    } catch(err){
        next(err);
    }
}

async function obrisiKorisnika(req, res, next){
    try {
        const id = req.params.id;  // ipak ne treba cast u objectid
        // const { ObjectId } = require('mongoose').Types;
        // const objectId = new ObjectId(id);
``
        console.log('evo id iz params:', id);
        const uspesno = await userModel.obrisiKorisnika(id);
        if(uspesno){
            // window.alert('uspesno brisanje!');  // ??
            res.send('uspesno brisanje!');
        } else{
            // window.alert('ovaj korisnik je admin i ne moze se brisati!');
            res.send('ovaj korisnik je admin i ne moze se brisati!');
        }
    } catch(err){
        next(err);
    }
}

async function filtrirajStarost(req, res, next){
    try {
        console.log('req body starost', req.body);  
        // const godine = 23; debug
        res.render('userList.ejs', {
            korisnici: await userModel.filtrirajStarost(req.body.starost)  
        }); 

    } catch(err){
        next(err);
    }   
}

module.exports = {
    prikazPocetne,
    obrisiKorisnika, 
    filtrirajStarost
}