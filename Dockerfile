# Stage 1: Build React App
FROM node:23 AS frontend

WORKDIR /app/ux-magnificent-fox

COPY ux-magnificent-fox/package*.json ./
RUN npm install

COPY ux-magnificent-fox/ ./
RUN npm run build

# Install a lightweight Node.js server (serve)
RUN npm install -g serve

# Expose port 3000 for the server
EXPOSE 3000

# Run the server to serve the frontend build
CMD ["serve", "-s", "build", "-l", "3000"]


# Stage 2: Build Django Backend
FROM python:3.13.2-slim AS backend

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app

# Install required system dependencies & Python packages
RUN apt-get update && apt-get install -y \
    pkg-config \
    default-libmysqlclient-dev \
    default-mysql-client \
    gcc \
    python3-dev \
    build-essential \
    libyaml-dev \
    netcat-traditional \
    libjpeg-dev \
    zlib1g-dev \
    libfreetype6-dev \
    libtiff5-dev \
    libwebp-dev && \
    rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir --upgrade pip && pip install -r requirements.txt

# Copy Django project files & environment config
COPY MagnificentFox/ ./
COPY .env .

# Copy React build files to Django’s static folder
COPY --from=frontend /app/ux-magnificent-fox/build /app/static/

EXPOSE 8000

# Entrypoint script
COPY entrypoint.sh .
RUN chmod +x entrypoint.sh

CMD ["./entrypoint.sh"]

# Stage 3: Nginx Server
FROM nginx:alpine AS nginx

# Install curl to fetch SSL config files
RUN apk add --no-cache curl

# Create necessary directory & download SSL configs
RUN mkdir -p /etc/letsencrypt && \
    curl -o /etc/letsencrypt/options-ssl-nginx.conf https://raw.githubusercontent.com/certbot/certbot/master/certbot-nginx/certbot_nginx/_internal/tls_configs/options-ssl-nginx.conf && \
    curl -o /etc/letsencrypt/ssl-dhparams.pem https://raw.githubusercontent.com/certbot/certbot/master/certbot/certbot/ssl-dhparams.pem

# Copy React build files into NGINX web root
COPY --from=frontend /app/ux-magnificent-fox/build /usr/share/nginx/html

# Copy your custom NGINX config
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
