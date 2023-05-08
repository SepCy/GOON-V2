#!/usr/bin/env bash
cd /chemin_vers_le_dossier_frontend/
# stopper le container au cas ou il est fonctionnel en back
docker-compose stop
sleep 1m
# Redemarrer le container en arrière plan
docker-compose up -d
# More general user commands
echo 'done'

