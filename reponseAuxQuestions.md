Réponses aux questions

1/ DIfférence entre un PUT et un Patch

Faire un PUT, c'est faire une mise à jour complète tandis que faire un Patch, c'est faire une mise à jour partielle. Si le but est de modifier une fiche par exemple celle d'un être humain, faire un PUT implique de réecrire tout les champs de cet être humain, si vous oubliez de remplir un champ comme l'âge, celui ci perdra ça précédente valeur et deviendra nulle tandis que faire un Patch nous permet de modifier uniquement les champs voulus. C'est à dire que si je veux modifier la taille d'un être humain de mon choix je n'aurai qu'a faire un Patch de ce champ, Le PUT me forcera à réecrire tout les autres champs y compris celui de la taille pour conserver mes valeurs.

2/ Appel API depuis postman vs depuis Navigateur

La raison pour laquelle la requête est bloqué est à cause d'une sécurité intégré aux navigateur (CORS) qui empêche les sites pas défaut à faire des requête vers d'autres domaines. c'est une question de sécurité, la raison pour laquelle la requête marceh avec POSTMAn c'est parceque celui ci est un outil de test et n'a pas de règle de sécurité cross origin.

3/ NGINX/APACHE

Les avantages c'est que c'est aide à gérer plus simplement les certificats SSL, le cache et le chiffrement, de plus les serveur web tels que nginx ou apache sont plus rapide pour servir les fichier statiques commes les images.

4/ PERFORMANCES

-Mise en cache
-Pagination
-