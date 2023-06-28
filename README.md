# Self-Service Order API

This repository contains a Node.js TypeScript project that implements a self-service order API using the Domain-Driven Design (DDD) architecture. The API allows users to place and manage their own orders through a convenient interface.

---

## Summary

* [Usage documentation](#summary)
   * [Usage with Docker](#summary)
      * [Prerequisites](#docker-prerequisites)
      * [Installation](#docker-installation)
      * [Usage](#docker-usage)
   * [Usage with Node.JS](#summary)
      * [Prerequisites](#node-prerequisites)
      * [Installation](#node-installation)
      * [Usage](#node-usage)
   * [Folder Structure](#folder-structure)
   * [Postman Collection](postman/Self%20Service%20Order%20-%20API.postman_collection.json)
* [DDD](#summary)
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

([Back to Summary](#summary) :arrow_up:)

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

([Back to Summary](#summary) :arrow_up:)

---

## Folder Structure

The project follows a DDD-inspired folder structure to separate concerns and maintain a clear code organization. Here's an overview of the key directories:

- `src`
  - `domain`: Contains the core business models, services, and repositories.
  - `application`: Implements the application layer, which orchestrates the domain logic and exposes it through use cases.
  - `infrastructure`: Provides infrastructure-related implementations, such as database connectors or external service clients.
  - `web`: Handles API-specific concerns such as route definitions and request validation.

([Back to Summary](#summary) :arrow_up:)

---

## Domain Storytelling

### Order and Payment

![domain_storytelling_1](docs/assets/1_domain_storytelling_order_and_payment.png "Order and Payment")

---

### Preparation And Delivery
![domain_storytelling_2](docs/assets/2_domain_storytelling_preparation_and_delivery.png "Preparation And Delivery")

([Back to Summary](#summary) :arrow_up:)

---

## Event Storming

![event_storming_1](docs/assets/event_storming_1.jpg "event_storming_1")

![event_storming_2](docs/assets/event_storming_2.jpg "event_storming_2")

([Back to Summary](#summary) :arrow_up:)