FROM mcr.microsoft.com/playwright:v1.55.0-jammy

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run install:pw-browsers && npm run install:pw-browsers-deps

ENV CI=true \
    PLAYWRIGHT_BROWSERS_PATH=/ms-playwright

CMD ["npm", "run", "test"]
