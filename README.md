# StackOverflow Backend

StackOverflow is a simplified question-and-answer web application where users can ask questions and receive answers from other users.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [Usage](#usage)
   - [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create new Question: User can create question by clicking the 'create question' button
- See answers: User can check the related answers per quersion by clicking the answers button

## Getting Started

### Prerequisites

- Docker

### Installation

1. Pull the image from Dockerhub in a new directory:

   ```sh
   docker pull arondocker100/stackoverflow
   

2. Create a new docker compose file and save it with this content:

   ```docker
   version: '3.2'

   services:
   backend:
      image: arondocker100/stackoverflow
      ports:
      - "8080:8080"
      depends_on:
      - postgresdb
      environment:
      - SPRING_DATASOURCE_URL=jdbc:postgresql://postgresdb:5432/postgres
      - SPRING_DATASOURCE_USERNAME=postgres
      - SPRING_DATASOURCE_PASSWORD=postgres
      networks:
      - backend-network

   postgresdb:
      image: postgres:13.1-alpine
      container_name: postgresdb
      environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
      - POSTGRES_DB=postgres
      volumes:
      - db-data:/var/lib/postgresql/data
      ports:
      - "5432:5432"
      networks:
      - backend-network

   networks:
   backend-network:

   volumes:
   db-data:

3. Run the saved compose file in bash terminal

    ```sh
    docker-compose -f docker-compose-app.yml up


## Usage


### API Endpoints

- GET /questions/all: Get all questions along with their answer counts.
- GET /questions/{id}: Get details of a specific question by ID.
- POST /questions/: Add a new question.
- DELETE /questions/{id}: Delete a question by ID.
- GET /answers/{id}: Get all answers for a specific question by ID.
- POST /answers/: Add a new answer to a question.
- DELETE /answers/{id}: Delete an answer by ID.

## Technologies Used

- Java
- Spring Boot
- Spring Data JDBC
- MySQL (or your preferred database)

## Contributing
Contributions are welcome! Feel free to open issues and pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
