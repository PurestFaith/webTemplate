FROM node:20-alpine as build-stage

WORKDIR /app
RUN corepack enable

COPY package.json yarn.lock ./
# 设置Yarn的缓存目录，并将其挂载为Docker构建缓存,不然每次构建镜像都要重新下一次依赖
RUN --mount=type=cache,id=yarn-cache,target=/root/.cache/yarn

COPY . .
RUN pnpm build

FROM caddy as production-stage

COPY --from=build-stage /app/dist /app
COPY Caddyfile /etc/caddy/Caddyfile