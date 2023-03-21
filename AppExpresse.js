const moduleEpress = require('express') // importation du module express
 // création d'une instance de l'application 
 const instanceExpress = moduleEpress(); // creation de l'application express

 // creons la requete au nivea de l'application
instanceExpress.use((req,res)=>{
    res.json({message:"votre requète a bien été reçue"});
})


 // exporter l'applcation express
 module.exports = instanceExpress;