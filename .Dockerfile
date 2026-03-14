FROM node:20-alpine AS base

RUN npm install -g pnpm@9

FROM base AS builder

WORKDIR /home/node/app
COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

FROM base AS runtime

ENV NODE_ENV=production

WORKDIR /home/node/app
COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile --prod

COPY --from=builder /home/node/app/.next ./.next
COPY --from=builder /home/node/app/public ./public
COPY --from=builder /home/node/app/next.config.js ./next.config.js
COPY --from=builder /home/node/app/redirects.js ./redirects.js

EXPOSE 3000

CMD ["pnpm", "start"]
