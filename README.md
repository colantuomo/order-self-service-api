# Self-Service Order API
![Static Badge](https://img.shields.io/badge/backend-black?style=for-the-badge)

![Static Badge](https://img.shields.io/badge/v18.16.0-version?logo=nodedotjs&color=%23339933&labelColor=white&label=Node%2EJS)
![Static Badge](https://img.shields.io/badge/v4.x-version?logo=express&logoColor=gray&color=gray&labelColor=white&label=Express)
![Static Badge](https://img.shields.io/badge/v5.x-version?logo=typescript&color=blue&labelColor=white&label=TypeScript)

![Static Badge](https://img.shields.io/badge/database-black?style=for-the-badge)

![Static Badge](https://img.shields.io/badge/v15.3-version?logo=postgresql&color=%234169E1&labelColor=white&label=PostgreSQL)
![Static Badge](https://img.shields.io/badge/v4.x-version?logo=prisma&logoColor=%232D3748&color=%232D3748&labelColor=white&label=Prisma)

![Static Badge](https://img.shields.io/badge/environment-black?style=for-the-badge)

![Static Badge](https://img.shields.io/badge/v24.0.2-version?logo=docker&color=%232496ED&labelColor=white&label=Docker)

---

This repository contains a Node.js TypeScript project that implements a self-service order API using the Domain-Driven Design (DDD) architecture. The API allows users to place and manage their own orders through a convenient interface.

---

## Table of contents

* [Usage documentation](#table-of-contents)
   * [Usage with Docker](#table-of-contents)
      * [Prerequisites](#docker-prerequisites)
      * [Installation](#docker-installation)
      * [Usage](#docker-usage)
   * [Usage with Node.JS](#table-of-contents)
      * [Prerequisites](#node-prerequisites)
      * [Installation](#node-installation)
      * [Usage](#node-usage)
   * [Folder Structure](#folder-structure)
   * [Postman Collection](postman/Self%20Service%20Order%20-%20API.postman_collection.json)
* [DDD](#table-of-contents)
   * [Glossary](/docs/glossary.md)
   * [Domain Storytelling](#domain-storytelling)
   * [Event Storming](#event-storming)

---

## Docker Prerequisites

To run this project, ensure that you have the following installed:

- [Docker](https://www.docker.com/)

---

## Docker Installation

(...) #Completar

---

## Docker Usage

(...) #Completar

([Back to Table of contents](#table-of-contents) :arrow_up:)

---

## Node Prerequisites

To run this project, ensure that you have the following installed:

- [Node.JS](https://nodejs.org) (v18.16.0)

---

## Node Installation

1. Clone this repository to your local machine or download the source code.
2. Open a terminal and navigate to the project's root directory.
3. Run the following command to install the project dependencies:

   ```shell
   npm install
   ```

---

## Node Usage

To start the development server, run the following command:

```shell
npm run dev
```

This will compile the TypeScript code, start the server, and watch for any file changes, automatically restarting the server when necessary.

([Back to Table of contents](#table-of-contents) :arrow_up:)

---

## Folder Structure

The project follows a DDD-inspired folder structure to separate concerns and maintain a clear code organization. Here's an overview of the key directories:

- `src`
  - `domain`: Contains the core business models, services, and repositories.
  - `application`: Implements the application layer, which orchestrates the domain logic and exposes it through use cases.
  - `infrastructure`: Provides infrastructure-related implementations, such as database connectors or external service clients.
  - `web`: Handles API-specific concerns such as route definitions and request validation.

([Back to Table of contents](#table-of-contents) :arrow_up:)

---

## Domain Storytelling

### Order and Payment

![domain_storytelling_1](docs/assets/1_domain_storytelling_order_and_payment.png "Order and Payment")

---

### Preparation And Delivery
![domain_storytelling_2](docs/assets/2_domain_storytelling_preparation_and_delivery.png "Preparation And Delivery")

([Back to Table of contents](#table-of-contents) :arrow_up:)

---

## Event Storming

![event_storming_1](docs/assets/event_storming_1.jpg "event_storming_1")

![event_storming_2](docs/assets/event_storming_2.jpg "event_storming_2")

([Back to Table of contents](#table-of-contents) :arrow_up:)
