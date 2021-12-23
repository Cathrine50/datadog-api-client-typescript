#!/bin/bash

JAVA=$(which java)

if [[ -x "$JAVA" ]]
then
    CONTAINER_ID=$(docker create datadog/docker-library:openapi-generator-cli-60b29e1f8e2)
    docker cp $CONTAINER_ID:/opt/openapi-generator/modules/openapi-generator-cli/target/openapi-generator-cli.jar .
    docker rm $CONTAINER_ID
    java -jar openapi-generator-cli.jar generate -g typescript -c .generator/config/v1.json -i .generator/schemas/v1/openapi.yaml -o packages/datadog-api-client-v1/ --type-mappings AnyType=any --additional-properties disallowAdditionalPropertiesIfNotPresent=false --additional-properties useObjectParameters=true --additional-properties platform=node --global-property skipFormModel=false -t .generator/templates &
    java -jar openapi-generator-cli.jar generate -g typescript -c .generator/config/v2.json -i .generator/schemas/v2/openapi.yaml -o packages/datadog-api-client-v2/ --type-mappings AnyType=any --additional-properties disallowAdditionalPropertiesIfNotPresent=false --additional-properties useObjectParameters=true --additional-properties platform=node --global-property skipFormModel=false -t .generator/templates &
    wait
else
    docker-compose -f docker-compose.generator.yaml up
fi
