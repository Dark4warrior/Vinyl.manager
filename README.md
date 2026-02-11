# Vinyl.manager

# API Disquaire - Évaluation Webservices

## Description
API REST pour la gestion d'un stock de vinyles et de groupes, incluant la gestion des rôles (Gérant/Disquaire) et des filtres de recherche.
Les réponses aux 4 questions se trouves dans le fichier `reponseAuxQuestions.md`
Le schéma de la base de données se trouve dans `schema.md`

## Installation
1. `npm install`
2. Configurer le fichier `.env` avec `PORT` et `MONGO_URI`.
3. `npm start` (ou `npx nodemon server.js`)

## Sécurité & Rôles
L'API utilise le header `X-User-Role` pour simuler l'authentification :
- `gerant` : Accès complet.
- `disquaire` : Accès lecture et modification uniquement.
