#!/bin/sh
set -e  # Exit on errors

echo "Waiting for MySQL to be ready..."
until mysqladmin ping -h "$DB_HOST" --silent; do
    echo "Waiting for MySQL..."
    sleep 5
done

echo "Applying database migrations..."
python3 manage.py migrate --noinput

echo "Collecting static files..."
python3 manage.py collectstatic --noinput

echo "Starting Gunicorn server..."
exec gunicorn --workers 3 --bind 0.0.0.0:8000 MagnificentFox.wsgi:application
