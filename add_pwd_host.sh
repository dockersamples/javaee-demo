#!/bin/bash

hostname=$(echo $PWD_IP_ADDRESS | sed 's/\./-/g')
FQDN=${PWD_HOST_FQDN}
API_ENDPOINT="pwd$hostname-8080.$FQDN"
  
sed -i "2i ENV API_HOST=${API_ENDPOINT}" ./react-client/Dockerfile