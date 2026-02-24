FROM node:24-alpine AS builder

WORKDIR /app

RUN apk add --no-cache python3 make g++

COPY package.json yarn.lock ./

RUN yarn install --network-timeout 100000

COPY . .

# Build argument for API URL (injected at build time)
ARG VITE_API_URL
ENV VITE_API_URL=${VITE_API_URL}

RUN yarn build

FROM nginx:1.27-alpine AS production

LABEL org.opencontainers.image.source="https://github.com/ianpilon/Claw-Orchestrator"
LABEL org.opencontainers.image.description="Claw Orchestrator Frontend"
LABEL org.opencontainers.image.licenses="Apache-2.0"

RUN addgroup -g 1001 -S claw && \
    adduser -u 1001 -S claw -G claw && \
    # Set ownership for nginx html directory
    chown -R claw:claw /usr/share/nginx/html && \
    # Remove default config
    rm -f /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=builder --chown=claw:claw /app/dist /usr/share/nginx/html

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://127.0.0.1:8080/health || exit 1

USER claw

CMD ["nginx", "-g", "daemon off;"]
