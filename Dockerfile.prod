FROM node:20.9.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ARG MY_SECRET_TOEKN
ENV MY_SECRET_TOEKN=${MY_SECRET_TOEKN}

# ENV PORT를 사용하는 이유는 next js default port가 3000이기 때문에 4000으로 변경
ENV PORT=3000

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]