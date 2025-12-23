# base image
#FROM node:20-bullseye AS compile-image
FROM 618187721717.dkr.ecr.us-east-1.amazonaws.com/baseline-repository:node-21-golden-image-v4 AS compile-image

# Identify the maintainer of an image:
LABEL maintainer="support@inadev.com"

# install angular version 8.3.25
RUN npm install -g @angular/cli@latest

# set working directory
WORKDIR /opt/cee-angular-wfe-library

# Copy Code Base From Local
COPY . /opt/cee-angular-wfe-library

#to remove mock folder from assets
RUN rm -rf /opt/cee-angular-wfe-library/src/assets/mocks/deal.json

# ENV NODE_OPTIONS="--max-old-space-size=2048"

RUN npm cache clean --force

# Install dependencies
RUN npm install --force --max-old-space-size=4096

# add `./node_modules/.bin` to $PATH
ENV PATH="./node_modules/.bin:$PATH"

# build the library and the project in prod mode
# RUN ng build ng-cee-core && \
#     ng build ng-cee-api-integration && \
#     ng build ng-cee-oidc && \
#     ng build --configuration production

RUN ng build --configuration production --output-hashing=all

# Set up nginx
FROM 618187721717.dkr.ecr.us-east-1.amazonaws.com/baseline-repository:nginx-golden-image-v6
#FROM nginx:1.27-alpine-perl
# RUN rm -rf /usr/share/nginx/html && \
#     rm -rf /etc/nginx/conf.d/default.conf

RUN apk update && apk upgrade --no-cache && \
    rm -rf /usr/share/nginx/html && \
    rm -rf /etc/nginx/conf.d/default.conf && \
    rm -rf /var/cache/apk/*

# Copy config and run project
COPY buildconfig/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=compile-image /opt/cee-angular-wfe-library/dist/cee-angular /usr/share/nginx/html
COPY buildconfig/app_config.json.sh /tmp

CMD sh /tmp/app_config.json.sh; nginx -g "daemon off;"



