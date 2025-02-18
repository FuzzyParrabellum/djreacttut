#!/bin/sh

# ci-dessous va lire cette variable d'environnement DATABSE ds nottre fichier
# .env.dev
if ["DATABASE" = "postgres"]
    then
    echo "Check if this databse is running..."

    # ci-dessous nc correspnd à netcat
    # traduction : "tant que netcat ne peux pas se connecter à ça; on lance
    # une while loop ds laquelle on sleep pdt 10ms avant qu'on relance le truc
    # netcat"
    while ! nc -z $SQL_HOST $SQL_PORT; do
        sleep 0.1
    done

    echo "The database is running :-D"
fi # permet de close la if loop

python manage.py migrate 

# ci-dessous "$@" est un paramètre spécial qui représente tous les paramètres
#passés au script ou à la fonction 
exec "$@" 