Zorg ervoor dat [Node](https://nodejs.org/en/download/) geïnstalleerd is.  
In de package.json bestanden kan je terugvinden welke afhankelijkheden er zijn.  
De afhankelijkheid ```concurrently``` wordt gebruikt om npm scripts in parallel uit te voeren.  

Sommige oefeningen bestaan uit een deeloplossing zonder webpack (```Client/Public/{oefening}/index.nowebpack.html```) en 
een deeloplossing met webpack (```Client/Public/{oefening}/index.webpack.html```).

# Uitvoeren met Express

Om een oplossing te starten open je eerst een terminal of een command prompt in deze directory.  
Vervolgens voer je onderstaand commando uit

```npm run start```

Of je kan ook volgende procedure volgen:
1. ```npm install```
2. ```cd Client```
3. ```npm install```
4. ```npx webpack```
5. ```cd ..```
6. ```cd Server```
7. ```npm install```
8. ```node app.js```

Browse vervolgens naar http://localhost:3000.