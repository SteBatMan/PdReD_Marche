# PdReD_MArche!

## Progetto di piattaforme digitali per la gestione del territorio.

**Studente: Stefano Battistelli  
Matricola: 306481**

**Scopo del servizio:** poter ricercare i ristoranti nella regione Marche, ed avere tutte le informazioni sul punto ricercato.  
Attraverso un sito è possibile visualizzare la lista dei ristoranti e aggiungere nuovi punti ristoro.
La modifica e l'eliminazione sono stati testati tramite la piattaforma PostMan.  
L'Opendata inerente ai ristoranti è stato preso dal sito Datiopen, in formato JSON.

Il servizio è basato sull'architettura client-server, grazie alla piattaforma **Glitch**.

## Scelte implementative

Durante la progettazione ho optato per le seguenti scelte:

- Modificare direttamente il file JSON durante le operazioni di modifica, aggiunta e rimozione dei punti ristoro.
- Quando si vuole aggiungere un nuovo punto ristoro è obbligatorio inserire il nome e il comune.
- Quando si vuole modificare un punto ristoro, è importante specificare di nuovo ogni campo.
- I campi che non devono essere modificati devono essere specificati di nuovo.
- Non selezionare alcuni campi all'interno del file JSON, causa formattazione sbagliata.
- Nella rimozione e modifica ristorante utilizzo il nome come ID, essendo univoco per ogni punto ristoro.

## Documentazione

**Moduli utilizzati**

← express : framework per applicazioni web; è stato progettato per creare applicazioni e API.

← fs : permette di lavorare sul File System.

← ejs : permette di utilizzare JavaScript.

**Endpoint utilizzati**

← '' : rendering alla pagina 'index.html'.

← '/mostra_ristoranti' : rendering alla pagina 'mostra_ristoranti.html' , richiamata nell'index.

← '/aggiungi_ristorante' : rendering alla pagina 'aggiungi_ristorante.html' , richiamata nell'index.

← '/mostratutto' : permette di visualizzare tutto il file JSON formattato.

← '/nuovo_ristorante' : permette l'inserimento di un nuovo ristorante.

← '/rimuovi_ristorante/:nome' : permette di rimuovere un punto ristoro.

←'/modifica_ristorante' : permette di modificare un punto ristoro.

## Accessibilità

Per raggiungere il servizio proposto è necessaro collegarsi al sito https://punti-di-ristoro-e-divertimento-nelle-marche.glitch.me ed attendere qualche secondo per il caricamento.

## Test vari

- ![index](https://cdn.glitch.global/90eca12d-755b-4ca9-8346-30e832a9f895/Index.png?v=1674224670699)
  Visione della pagine HTML principale, dove è possibile selezionare le voci del menù.

- ![mostra](https://cdn.glitch.global/90eca12d-755b-4ca9-8346-30e832a9f895/Mostra.png?v=1674224656438)
  Visione della pagina HTML per visualizzare la lista dei punti ristoro.

- ![aggiungi](https://cdn.glitch.global/90eca12d-755b-4ca9-8346-30e832a9f895/Aggiungi.png?v=1674224678309)
  Visione della pagine HTML per l'aggiunta di un nuovo punto ristoro.
- ![modifica](https://cdn.glitch.global/90eca12d-755b-4ca9-8346-30e832a9f895/Modifica.png?v=1674224665173)
  Visione della piattaforma Postman per l'avvenuta modifica di un punto ristoro già esistente.
- ![rimuovi](https://cdn.glitch.global/90eca12d-755b-4ca9-8346-30e832a9f895/rimuovi.png?v=1674224643165)
  Visione della piattaforma Postman per l'avvenuta rimozione di un punto ristoro.
