#!/bin/bash

# Vérifie si un message de commit est fourni
if [ -z "$1" ]; then
  echo "❌ Erreur : vous devez fournir un message de commit."
  echo "👉 Usage : ./git-auto.sh \"Votre message de commit\""
  exit 1
fi

echo "📋 État du dépôt AVANT git add :"
git status

echo "✅ Ajout des fichiers modifiés..."
git add .

echo "📋 État du dépôt APRÈS git add :"
git status

echo "✅ Commit avec le message : \"$1\""
git commit -m "$1"

echo "🚀 Push vers le dépôt distant..."
git push
 