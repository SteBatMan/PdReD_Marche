// Dichiarazione moduli importati
const express = require('express');
const app = express();
const dati = require('fs');

//Json file reading and parsing
const dataReader = dati.readFileSync(__dirname + '/public/data.json');  // è la costante del file JSON del set di dati
const parser = JSON.parse(dataReader);                                  // è la costante su cui posso analizzare i dati, che fa riferimento al JSON

//Static file in public for css
app.use(express.static('public'));      

//Json file broker
app.use(express.urlencoded({ extended: true }));
app.use(express.json());              // mi permette di utilizzare le funzioni json della libreria express


// view engine setup
app.engine('html', require('ejs').renderFile); // ejs require installation
app.set('view engine', 'html');
app.set('views', __dirname + '/public/views');


// indirizzamento delle pagine VIEW
// indice
app.get('', (req, res) => {
  res.render('index.html');
});

//mostra lista
app.get('/mostra_ristoranti', (req, res) => {
  res.render('mostra_ristoranti.html');
});

//aggiungi
app.get('/aggiungi_ristorante', (req, res) => {
  res.render('aggiungi_ristorante.html');
});

// endpoint get per visualizzare tutti i punti ristoro
app.get('/mostratutto', (req, res) => {
  res.json(parser);
});


// endpoint POST, utilizzato per inserire dati inerenti a un nuovo ristorante
app.post('/nuovo_ristorante', (req, res) => {
  req.body.Comune = req.body.Comune.toUpperCase();
  // con la seguente funzione verifico che all'interno del parser non sia presente 
  // il punto ristoro che si vuuole aggiungere
  const nuovoPunto = parser.find(p => p.Denominazione === req.body.Denominazione && 
                                      p.Comune === req.body.Comune);
  // se è già presente, mi restituisce il seguente messaggio
  if(nuovoPunto) return res.status('400').send("Punto ristoro già presente!");

  // se non è presente lo aggiungo al parser
  parser.push(req.body);
  // con la seguente istruzione vado a sovrascrivere il file JSON
  dati.writeFileSync('public/data.json', JSON.stringify(parser));  
  return res.status(200).send("Punto ristoro aggiunto!");
});

// endpoint DELETE
app.delete('/rimuovi_ristorante/:nome', (req, res) => {
  const ristorante = req.params.nome.toLowerCase();
  // controllo se è presente il ristorante con il nome passato come parametro
  if(ristorante != undefined){
    for(let i = 0; i < parser.length; i++){
      if(ristorante == parser[i].Denominazione.toLowerCase()){
        // con la sequente istruzione vado ad eliminare l'elemento i-esimo 
        parser.splice(i,1);
        dati.writeFileSync("public/data.json", JSON.stringify(parser));
        return res.status(200).send("Punto ristoro rimosso correttamente!");
      }
    }
  } 
  
  return res.status('400').send("Punto ristoro non presente!");
  });

// endpoint PUT
app.put('/modifica_ristorante', (req, res) => {
  const ristorante = req.body.Denominazione;
  for(let i = 0; i < parser.length; i++){
    if(ristorante.toLowerCase() == parser[i].Denominazione.toLowerCase()){
      parser[i].Comune = req.body.Comune.toUpperCase();
      parser[i].Indirizzo = req.body.Indirizzo;
      parser[i].Civico = req.body.Civico;
      parser[i].Sito_web = req.body.Sito_web;
      parser[i].Latitudine = req.body.Latitudine;
      parser[i].Longitudine = req.body.Longitudine;
      dati.writeFileSync('public/data.json', JSON.stringify(parser));
      return res.status(200).send("Punto ristoro modificato!");
    }
  }

  return res.status('400').send("Punto ristoro non presente!");
});


// set della porta localhost

app.set('port', process.env.PORT || 4000);
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});