# Install dependencies
FROM node:lts as dependencies
WORKDIR /my-app
COPY package-lock.json package.json ./
RUN npm install

# Generate Prisma client
FROM node:lts AS prisma
WORKDIR /my-app
COPY --from=dependencies /my-app/node_modules ./node_modules
COPY prisma ./prisma
RUN npx prisma generate

# Build the Next.js app
FROM node:lts as builder
WORKDIR /my-app
COPY . .
COPY --from=dependencies /my-app/node_modules ./node_modules
COPY --from=prisma /my-app/node_modules/.prisma ./node_modules/.prisma
RUN npm run build

# Run the Next.js app
FROM node:lts as runner
WORKDIR /my-app
ENV NODE_ENV production
COPY --from=builder /my-app/next.config.mjs   ./
COPY --from=builder /my-app/public ./public
COPY --from=builder /my-app/.next ./.next
COPY --from=builder /my-app/node_modules ./node_modules
COPY --from=builder /my-app/package.json ./package.json

EXPOSE 3000
# Use the recommended command for standalone configuration
CMD ["node", ".next/standalone/server.js"]
