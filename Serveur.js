const monModulehttp = require('http') // importation du module natif http
 const monApplicationExpresse = require('./AppExpresse'); // application exportée

// creation d'une instance du serveur
/*const instanceServeur =monModulehttp.createServer((req,res)=>{
    //res.write(req.url);
    res.end("La réponse du serveur est claire");
    
})*/

// on doit préciser à l'application expresse sur quel port elle doit tourner
monApplicationExpresse.set('port', process.env.port || 3000);
const instanceServeur =monModulehttp.createServer(monApplicationExpresse);// notre serveur sert l'application express

// écoute le erveur àun port
instanceServeur.listen(process.env.port || 3000,()=>{
    console.log("J'écoute le serveur au port 3000");
});


