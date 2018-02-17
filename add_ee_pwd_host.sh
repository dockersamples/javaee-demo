#!/bin/bash

PUBLIC_IP=$(ip addr | grep 172.18. | awk '{print $2}' | awk -F / '{print $1}')
API_ENDPOINT="ip${PUBLIC_IP//./-}-${SESSION_ID}.direct.${PWD_HOST_FQDN}:8080"

sed -i "2i ENV API_HOST=${API_ENDPOINT}" ./react-client/Dockerfile

