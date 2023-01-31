# utilizzo un runtime Node.js ufficiale come immagine di base
FROM node:14

# Creo una directory per l'applicazione
RUN mkdir -p /usr/src/app

# Cambio la directory di lavoro
WORKDIR /usr/src/app

# Copio il requirements.txt file
COPY requirements.txt .

# Installo le dipendenze di Python
RUN pip install -r requirements.txt

# Copiare il resto dei file dell'applicazione Flask
COPY . .

# Copiare i file dell'applicazione Angular costruita nella cartella statica di Flask
COPY --from=node /usr/src/app/dist/ /usr/src/app/static/

# Rendiamo pubblica la porta su cui verrà eseguita l'applicazione
EXPOSE 5000

# Iniziao l'applicazione FLASK
CMD ["python", "app.py"]

