FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install --force

COPY . .

RUN npx prisma generate
RUN npx prisma migrate deploy

RUN npm run build

EXPOSE 4000

CMD ["npm", "run", "start:prod"]