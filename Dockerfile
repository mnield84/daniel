### Build stage: build static assets
FROM node:18-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY . .
RUN npm run build

### Runtime stage: serve with nginx
FROM nginx:alpine
ENV PORT=3000
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
# Copy the built static client assets
COPY --from=build /app/build/client /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]