
FROM node:12.18.2 AS compile-image

RUN npm install -g @angular/cli

WORKDIR /opt/ng

COPY package*.json ./
RUN npm install

ENV PATH="./node_modules/.bin:$PATH" 

COPY . ./
RUN ng build --prod --outputPath=./dist/out

FROM nginx:stable
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=compile-image /opt/ng/dist/out /usr/share/nginx/html

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]