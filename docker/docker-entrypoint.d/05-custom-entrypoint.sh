#!/bin/sh

# Realizar la sustitución de las variables de entorno en el index.html
envsubst '${APP_TITLE}' < /usr/share/nginx/html/index.html.template > /usr/share/nginx/html/index.html