# Utiliser une image officielle de Node.js avec Alpine pour un poids réduit
FROM node:16-alpine

# Vérifier que Node.js et npm sont bien installés
RUN node -v && npm -v

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de dépendances
COPY package.json package-lock.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers du projet
COPY . .

# Exposer le port 3000
EXPOSE 3000

# Commande de démarrage
RUN npm run build
CMD ["npx", "serve", "-s", "build", "-l", "3000"]





