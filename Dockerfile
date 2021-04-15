
FROM node:14.15.1-alpine3.12 as builder

ARG ENVIRONMENT=prod

RUN echo environment: $ENVIRONMENT

RUN apk update && apk add --no-cache \
    git \
    ca-certificates \
    bash

WORKDIR /home/node/app

COPY . ./

RUN npm install

RUN npm run build:$ENVIRONMENT

FROM nginx:1.15-alpine

RUN /bin/sh -c "apk add --no-cache bash"

RUN rm -rf /usr/share/nginx/html/*

COPY nginx.conf /etc/nginx/nginx.conf
COPY nginx-security-headers.conf /etc/nginx/security-headers.conf
COPY nginx-mime.types /etc/nginx/mime.types

COPY --from=builder /home/node/app/dist/sygnoapp /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
