FROM node:18.10-alpine as deps

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine
# to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package*.json ./

RUN npm ci

FROM deps as test

COPY . .

RUN npm run lint

FROM deps as build

COPY . .

# Needing to use devDependencies to
# build using typescript
RUN npm run build

FROM node:18.10-alpine as runner

WORKDIR /app

# Copy only what we need for the build
# to decrease the size of the image
COPY --from=build /app/public ./public
COPY --from=build /app/next.config.js ./next.config.js
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static

ENV NODE_ENV production
ENV PORT=3000

EXPOSE 3000

CMD sh -c "node server.js"
