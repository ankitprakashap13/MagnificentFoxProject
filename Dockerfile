# Stage 1: Build React App
FROM node:23 AS frontend

WORKDIR /app/ux-magnificent-fox

# Copy package.json & install dependencies first (leverages Docker caching)
COPY ux-magnificent-fox/package*.json ./
RUN npm install

# Copy the rest of the frontend code & build
COPY ux-magnificent-fox/ ./
RUN npm run build


# Stage 2: Build Django Backend
FROM python:3.13.2-slim AS backend

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app

# Install required system dependencies & Python packages
COPY requirements-system.txt /app/
RUN apt-get update && xargs apt-get install -y < /app/requirements-system.txt && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir --upgrade pip && pip install -r requirements.txt

# Copy Django project files & environment config
COPY MagnificentFox/ ./
COPY .env .

# Copy React build files to Django’s static folder
COPY --from=frontend /app/ux-magnificent-fox/build static/

EXPOSE 8000

# Entrypoint script
COPY entrypoint.sh .
RUN chmod +x entrypoint.sh

CMD ["./entrypoint.sh"]


# Stage 3: Nginx Server
FROM nginx:latest AS nginx

# Copy React build files to serve as static files
COPY --from=frontend /app/ux-magnificent-fox/build /usr/share/nginx/html

# Copy custom Nginx configuration
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
