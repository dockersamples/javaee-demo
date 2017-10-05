#!/bin/bash

host_ip=$(hostname -i)
hostname=$(echo $host_ip | sed 's/\./-/g')
FQDN=${PWD_HOST_FQDN}
API_ENDPOINT="pwd$hostname-8080.$FQDN"
  
sed -i -e "s/localhost/${API_ENDPOINT}/" ./react-client/package.json