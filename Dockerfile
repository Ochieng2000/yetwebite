# Stage 1: Build React app
FROM node:18-alpine AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy the rest of the app and build it
COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Set working directory to Nginx's default html folder
WORKDIR /usr/share/nginx/html

# Remove default Nginx static files
RUN rm -rf ./*

# Copy the built React app from previous stage
COPY --from=build /app/dist .

# Copy custom Nginx config (optional but recommended for SPA)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
