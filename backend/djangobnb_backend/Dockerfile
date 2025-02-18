FROM python:3.12

WORKDIR /usr/src/
# WORKDIR /usr/src/django_backend
# Ci-dessous permet d'éviter de créer des fichiers .pyc
ENV PYTHONDONTWRITEBYTECODE 1
#ci-dessous permet d'éviter que python buffer stdout et stdr
# qd python buffer output, il collecte une certaine quantité de données avant
# de les envoyer au terminal ou un fichier, ce qui peut provoquer des délais
# pour voir l'output, tout spécialement qd run python dans certains 
# environnements comme Docker

ENV PYTHONBUFFERED 1

RUN apt-get update && apt-get install -y netcat-traditional

# ci-dessous on s'asure que pip run avec la version la plus récente de lui-mm
RUN pip install --upgrade pip
COPY ./requirements/requirements.txt .
RUN pip install -r requirements.txt

COPY ./entrypoint.sh .
# cf https://www.digitalocean.com/community/tutorials/linux-sed-command
# la commande à gauche sert à écrire qq chose ds /usr/src/entrypoint.sh
RUN sed -i 's/\r$//g' /usr/src/entrypoint.sh
# ensuite on a besoin de rendre ce fichier executable, donc on change droit
RUN chmod +x /usr/src/entrypoint.sh

COPY . .
# COPY . .  

ENTRYPOINT [ "/usr/src/entrypoint.sh" ]
