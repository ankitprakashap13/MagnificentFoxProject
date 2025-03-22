# Stage 1: Build React App
FROM node:23 AS frontend
WORKDIR /app

# Copy package files and install dependencies
COPY ux-magnificent-fox/package*.json ./ux-magnificent-fox/
RUN cd ux-magnificent-fox && npm install

# Copy the rest of the frontend code and build
COPY ux-magnificent-fox ./ux-magnificent-fox/
RUN cd ux-magnificent-fox && npm run build

# Stage 2: Build Django Backend
FROM python:3.13.2-slim AS backend

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set working directory
WORKDIR /app

# Copy the requirements file and install dependencies
COPY requirements.txt /app/
RUN apt-get update && apt-get install -y \
    nginx \
    pkg-config \
    default-libmysqlclient-dev \
    default-mysql-client \
    gcc \
    python3-dev \
    build-essential \
    libyaml-dev \
    netcat-traditional \
    && rm -rf /var/lib/apt/lists/*
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copy Django project files
COPY MagnificentFox /app/

# Copy .env from the root directory
COPY .env /app/.env

# Copy React build files to Django’s static folder
COPY --from=frontend /app/ux-magnificent-fox/build /app/static/

# Correct path for Nginx configuration
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Expose ports for Django (8000) and Nginx (80)
EXPOSE 80 8000

# Copy and make the entrypoint script executable
COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh

# Start Django and Nginx together
CMD ["sh", "-c", "/app/entrypoint.sh & nginx -g 'daemon off;'"]
