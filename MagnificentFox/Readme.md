sudo docker-compose build

sudo docker-compose up -d

sudo docker-compose logs web

sudo docker-composeexecwebsh

python3 manage.pymigrate

python3 manage.pycollectstatic--noinput


docker-compose down -v --remove-orphans
docker system prune -a
docker volume prune
docker-compose build --no-cache
docker-compose up -d
