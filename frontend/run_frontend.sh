#!/usr/bin/env bash
cd /relative_path_to_the_frontend_folder/
# stopper le container au cas ou il est fonctionnel en back
docker-compose stop
sleep 1m
# Redemarrer le container en arrière plan
docker-compose up -d
# More general user commands
echo 'done'

