var express = require("express")
var app = express()
const bodyParser = require('body-parser')
const mysql = require('mysql2')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Initialisation base de donnée
// let db = mysql.createConnection({
//   host      : 'mysql-locinfo.alwaysdata.net',
//   user      : 'locinfo',
//   password  : '@Mpol1234',
//   database  : 'locinfo_db'
// })

const db_config = {
        host      : process.env.DB_HOST,
        user      : process.env.DB_USER,
        password  : process.env.DB_MDP,
        database  : process.env.DB_NOM
      }
var db = mysql.createConnection(db_config)

db.connect(function(err){
    if(err) {
        // mysqlErrorHandling(db, err);
        console.log("\n\t *** Cannot establish a connection with the database. ***");

        db = reconnect(db);
    }else {
        console.log("\n\t *** New connection established with the database. ***")
    }
});

//- Reconnection function
function reconnect(db){
    console.log("\n New connection tentative...");

    //- Destroy the current connection variable
    if(db) db.destroy();

    //- Create a new one
    var db = mysql_npm.createConnection(db_config);

    //- Try to reconnect
    db.connect(function(err){
        if(err) {
            //- Try to connect every 2 seconds.
            setTimeout(reconnect, 2000);
        }else {
            console.log("\n\t *** New connection established with the database. ***")
            return db;
        }
    });
}

/**
 * On incrémente le nombre de visiteur pour la ville, si la ville n'est pas dans la DB on l'ajoute
 */
app.post("/", (req, res) =>{
    let requete = 'SELECT nb FROM classement where lieu LIKE \'' + req.body.lieu + '\'' 
    let lieu = req.body.lieu
    console.log("traitement en cours :)")
    console.log(req.body.lieu)
    if(req.body.lieu !== undefined){
        // Lancer requete à la bdd
        db.query(requete, (err, result) => {
            // Si la requête renvoie un champs vide
            console.log(result)
            if(err || result === undefined){
                requete = 'INSERT INTO classement VALUES (\'' + lieu + '\',1)'
                console.log(err)
                db.query(requete, (err, result) =>{
                    if(err){
                        console.log("Erreur lors de la création de " + lieu)
                        console.log(err)
                        res.send("Une erreur est survenue :(")
                    }else console.log("On a crée " + lieu)
                })
            }else if(result.length == 0){
                requete = 'INSERT INTO classement VALUES (\'' + lieu + '\',1)'
                db.query(requete, (err, result) =>{
                    if(err){
                        console.log("Erreur lors de la création de " + lieu)
                        console.log(err)
                        res.send("Une erreur est survenue :(")
                    }else console.log("On a crée " + lieu)
                })
            }else{
                // On incrémente de 1 le lieu cherché
                requete = 'UPDATE classement SET nb=nb+1 WHERE lieu LIKE \'' + lieu +'\''
                db.query(requete, (err, result) =>{
                    if(err){
                        console.log("Erreur lors de la création de " + lieu)
                        console.log(err)
                        res.send("Une erreur est survenue :(")
                    }else console.log("On a incrémenté " + lieu)
                })
            }
        })
    }
    res.send("Ok")
})

/**
 * Renvoie les 5 villes les plus visitées
 */
app.get("/donnee", (req, res) =>{
    //let db = mysql.createConnection(db_config)
    let requete = 'SELECT lieu FROM classement ORDER BY nb DESC LIMIT 5'
    console.log("Envoie des 5 villes les plus visitées en cours :)")

    // Lancer requete à la bdd
    db.query(requete, (err, result) => {
        // Si la requête renvoie un champs vide
        if(err){
                console.log("Erreur d'accès à la BDD")
                console.log(err)
        }
        else{
            // On incrémente de 1 le lieu cherché
            console.log(result)
            res.send(result)
        }
    })
})

db.on('error', function(err) {
    //PROTOCOL_CONNECTION_LOST -> The server close the connection.
    //PROTOCOL_ENQUEUE_AFTER_QUIT -> Connection in closing
    //PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR -> Fatal error : connection variable must be recreated
    //PROTOCOL_ENQUEUE_HANDSHAKE_TWICE -> Error because a connection is already being established
    console.log("/!\\ Cannot establish a connection with the database. /!\\ ("+err.code+")");
    db = reconnect(db);
});


module.exports = {
    path: "/api",
    handler: app
}