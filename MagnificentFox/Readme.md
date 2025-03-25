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

# MagnificentFoxProject

## Prerequisites

Ensure you have the following installed on your system:

* **Ubuntu 24.04 or later**
* **Docker 28.0.2** (Installed via official repository)
* **Docker Compose** (Included with Docker installation)
* **Git** (For pulling the project code)

## Setting Up the Droplet

### 1. Create a New Droplet

Use a cloud provider (e.g., DigitalOcean, AWS, etc.) to create a new **Ubuntu** droplet.

### 2. Connect to the Droplet via SSH

```bash
ssh root@your-server-ip
```

If SSH key authentication fails, ensure your public key is added to `~/.ssh/authorized_keys`.

### 3. Create a New User

```bash
adduser fox
usermod -aG sudo fox
```

Switch to the new user:

```bash
su - fox
```

### 4. Set Up SSH for the New User

Ensure the `.ssh` directory exists:

```bash
mkdir -p ~/.ssh && chmod 700 ~/.ssh
```

Copy the SSH key:

```bash
echo "your-public-key" >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

Verify SSH access:

```bash
ssh fox@your-server-ip
```

## Installing Docker

Follow instructions on this page to install https://docs.docker.com/engine/install/ubuntu/

## Deploying the Application

### 1. Clone the Repository

```bash
cd ~
git clone https://github.com/YOUR_USERNAME/MagnificentFoxProject.git
cd MagnificentFoxProject
```

### 2. Build the Docker Image

```bash
docker build -t my-app .
```

### 3. Run the Container

```bash
docker run -d -p 8000:8000 --name my-container my-app
```

* `-d`: Run in detached mode (background)
* `-p 8000:8000`: Map port 8000 of the container to port 8000 on the host
* `--name my-container`: Name the running container
* `my-app`: Use the built image

### 4. Verify Running Containers

```bash
docker ps
```

## Running with Docker Compose

If your project includes a `docker-compose.yml` file, start it with:

```bash
docker-compose up -d
```

If you see the warning:

```
WARN[0000] /home/fox/MagnificentFoxProject/docker-compose.yml: the attribute `version` is obsolete
```

You can safely ignore it or remove the `version` field from `docker-compose.yml`.

## Troubleshooting

### Permission Denied Error

If you see an error like:

```
permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock
```

Run the following commands:

```bash
sudo usermod -aG docker $USER
newgrp docker
```

Then log out and log back in or restart your system.

If that doesn’t work, try:

```bash
sudo chmod 666 /var/run/docker.sock
```

## Stopping and Removing Containers

To stop the running container:

```bash
docker stop my-container
```

To remove it:

```bash
docker rm my-container
```

## Checking Logs

To debug any issues, check container logs:

```bash
docker logs my-container
```

## Verifying Docker Installation

```bash
docker --version
docker ps
```

## Next Steps

* Ensure your application code is correctly mounted inside the container.
* If your application requires a database, update `docker-compose.yml` to include it.

---

This README provides a structured guide to setting up, running, and troubleshooting your Dockerized application. 🚀
