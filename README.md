# Self-Service Order API

This repository contains a Node.js TypeScript project that implements a self-service order API using the Domain-Driven Design (DDD) architecture. The API allows users to place and manage their own orders through a convenient interface.

## Prerequisites

To run this project, ensure that you have the following installed:

- [Node.js](https://nodejs.org) (v18.16.0)

## Installation

1. Clone this repository to your local machine or download the source code.
2. Open a terminal and navigate to the project's root directory.
3. Run the following command to install the project dependencies:

   ```shell
   npm install
   ```

## Usage

To start the development server, run the following command:

```shell
npm run dev
```

This will compile the TypeScript code, start the server, and watch for any file changes, automatically restarting the server when necessary.

## Testing

To run the tests, execute the following command:

```shell
npm run test
```

The tests are implemented using a testing framework and provide comprehensive coverage for the API.

## Folder Structure

The project follows a DDD-inspired folder structure to separate concerns and maintain a clear code organization. Here's an overview of the key directories:

- `src`
  - `domain`: Contains the core business models, services, and repositories.
  - `application`: Implements the application layer, which orchestrates the domain logic and exposes it through use cases.
  - `infrastructure`: Provides infrastructure-related implementations, such as database connectors or external service clients.
  - `web`: Handles API-specific concerns such as route definitions and request validation.
