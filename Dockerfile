# Stage 1: Build React App
FROM node:23 AS frontend

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY ux-magnificent-fox/package*.json ./ux-magnificent-fox/

# Install dependencies
RUN cd ux-magnificent-fox && npm install

# Copy the rest of the application code
COPY ux-magnificent-fox ./ux-magnificent-fox

# Build the React app
RUN cd ux-magnificent-fox && npm run build

# Stage 2: Build Django Backend
FROM python:3.13.2-slim AS backend

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set working directory
WORKDIR /app

# Install system dependencies for MySQL, Pillow, and other required libraries
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
    libjpeg-dev \
    zlib1g-dev \
    libfreetype6-dev \
    libtiff5-dev \
    libwebp-dev \
    && rm -rf /var/lib/apt/lists/*

# Copy the requirements file and install dependencies
COPY requirements.txt /app/
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

# Stage 3: Serve React App
FROM node:23

# Set the working directory
WORKDIR /app

# Copy the build files from the previous stage
COPY --from=frontend /app/ux-magnificent-fox/build ./ux-magnificent-fox/build

# Copy the server.js file
COPY ux-magnificent-fox/server.js ./ux-magnificent-fox/

# Install only production dependencies
COPY ux-magnificent-fox/package*.json ./ux-magnificent-fox/
RUN cd ux-magnificent-fox && npm install --only=production

# Expose the port the app runs on
EXPOSE 3000

# Start the Node.js server
CMD ["node", "ux-magnificent-fox/server.js"]
