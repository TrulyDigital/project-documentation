---
layout: ../../layouts/LandingPageLayout/LandingPageLayout.astro
title: "DATA STREET project documentation"
pubDate: May 16th, 2025
---

<p>
    <img
        src="/project-documentation/DATA_STREET/hero-medium.webp"
        srcset="
            /project-documentation/DATA_STREET/hero-small.webp 400w,
            /project-documentation/DATA_STREET/hero-medium.webp 800w,
            /project-documentation/DATA_STREET/hero-large.webp 1200w
        "
        sizes="(max-width: 600px) 100vw"
        alt="Descripción de mi foto"
    />
</p>

[👉 Return - Data Street Project](/project-documentation/DATA_STREET)

# SFTP Server

Details of the SFTP-server implementation in Docker, along with an overview of the solution architecture and the process flow for this part of the application.

[1. Introduction](#1-introduction)
[2. Server Architecture with Docker](#2-server-architecture-with-docker)
[3. Project Folder Structure](#3-project-folder-structure)
[4. Docker compose file](#4-docker-compose-file)

## 1. Introduction

The `Data Street` project provides functionality to load `CSV` files via an SFTP server running in a Docker container,
the CSV file will be processed by the Kafka container using the kafka Connect service, and each record (line) will be written to a custom topic, this will be covered in the specific kafka documentation.

For now, we're only interested in the SFTP server and the following image shows the software architecture and the components we need for its implementation.

<p class="article_images">
    <img
        src="/project-documentation/DATA_STREET/server_sftp-introduction.svg"
        alt="Descripción de mi foto"
    />
</p>

**An Ubuntu Server** wheter bare-metal or a cloud-based virtual private server (VPS) and hosts the entire application and its services or componentes as Docker containers. In this case, it runs a Docker container that implements an SFTP server on linux.

**A Docker container** is a lightweight service that can run any type of software application. It must be deployed on a `Ubuntu Server` host (whether bare-metal or a cloud-based VPS).

**A SFTP Linux Server** is a lightweight Linux operating system running in a `Docker Container` with SFTP service.

**An Actor** is a user --like you or me-- who can send CSV files to the SFTP server using SFTP client on their own computer.

## 2. Server Architecture with Docker

As I mentioned before, we have deployed a Docker container running an SFTP server on Linux, and we´ve mapped a volume between host system (Ubuntu Server) and the Linux container. This means the host--Operating System-- and the container share the same folder, ensuring data persistence.

<p class="article_images">
    <img
        src="/project-documentation/DATA_STREET/server_sftp-docker.svg"
        alt="Descripción de mi foto"
    />
</p>

In this case, the **Folder - Operating System** and **Folder - SFTP server** refer to the same location.

Child folders like `yahoo_finance` and `others` indicate that you can create any folders needed to store CSV files, as long as they are always subfolders of the **Folder - SFTP server**.

## 3. Project Folder Structure

The folder structure for the SFTP server project is as follows:

```txt
DATA_STREET/
|
├── 📁 deploy/
|   ├── 📄 .env
|   ├── 📄 server-sftp.dev.yaml
|   ├── 📄 server-sftp.local.yaml
|   └── 📄 server-sftp.prod.yaml
|
├── 📁 server_sftp/
│   └── 📁 yahoo_finance/
│       ├── 📁 1_file_new/
│       ├── 📁 2_file_processed/
│       └── 📁 3_errors/
|
├── .gitignore
└── README.md
```

The following files are YAML descriptors based on Docker compose. They allow us to deploy a Docker container instance running an SFTP server.  <br>

**1.** server-sftp.dev.yaml  <br>
**2.** server-sftp.local.yaml  <br>
**3.** server-sftp.prod.yaml  <br>

The `.env` file contains parameterized variables that the YAML files can read and use to build the Docker container, so this file is essential.

## 4. Docker Compose File

The following is the Docker Compose file for the `local` environment. It is similar to the `dev` and `prod` files, but here we only explain the local environment file.

```yaml
services:
    # sftp server
    server-sftp:
        image: atmoz/sftp:latest
        container_name: server-sftp
        ports:
            - "${ENV_LOCAL_SFTP_PORT}:22"
        command:
            ${ENV_LOCAL_SFTP_USER}:${ENV_LOCAL_SFTP_PASSWORD}:::../${ENV_LOCAL_SFTP_USER}
        volumes:
            - ../server_sftp:${ENV_LOCAL_SFTP_CONTAINER_PATH_FOLDER}
        networks:
            - net-local-data-street

networks:
    net-local-data-street:
        name: net-local-data-street
        external: true

```

text text text