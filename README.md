<h1 align="center">Notio</h1>
<p align="center">An API for quick note sharing</p>
<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express">
  <img src="https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL">
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker">
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma">
</p>

## About the Project

Notio is an API designed for quick note sharing, allowing users to create and share notes with others in a simple and fast way.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)

### Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/Gabriel-Lacorte/Notio.git
   cd Notio
   ```

2. **Install NPM packages**
   ```sh
   npm install
   ```

3. **Edit the `docker-compose.yml` file to set the environment variables**
   ```yml
   environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
      - POSTGRES_DB=notio
   ```

4. **Run Docker Compose to start the PostgreSQL database**
   ```sh
   docker-compose up -d
   ```

5. **Edit the `.env` file to set the environment variables**
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/notio"
   ```

6. **Run the database migrations**
   ```sh
   npx prisma migrate dev
   ```

7. **Start the server**
   ```sh
   npm run dev
   ```

8. The server will be running on [http://localhost:3000](http://localhost:3000)

## Usage

The API routes are documented in the [`routes.http`](routes.http) file. You can use the [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) extension for Visual Studio Code to test the routes.

## License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for more information.
