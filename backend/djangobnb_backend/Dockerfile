FROM python:3.12

WORKDIR /usr/src/
# WORKDIR /usr/src/django_backend
# Ci-dessous permet d'éviter de créer des fichiers .pyc
ENV PYTHONDONTWRITEBYTECODE 1

# cfhttps://stackoverflow.com/questions/59812009/what-is-the-use-of-pythonunbuffered-in-docker-file
#en bref permet d'envoyer stdout and stderr streams direct vers terminal
ENV PYTHONUNBUFFERED 1

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
