#### Stage 1: Build the react application
FROM node:20-alpine3.18 as frontend-build

WORKDIR /react_build
####Copy the main application
COPY ../stackoverflow_frontend/package*.json /react_build
##RUN ls -l ./react_build
RUN npm install
COPY ../stackoverflow_frontend/* /react_build
RUN npm run build
RUN ls -l ./react_build/build
#### Stage 2: Build the application
FROM maven:3.8.7-openjdk-18-slim AS backend-build

#### add pom.xml and source code
ADD ./pom.xml pom.xml
ADD ./src src/

#### RUN mkdir ./src/main/resources/static
COPY --from=frontend-build /react_build/build ./src/main/resources/static

####package jar
RUN mvn clean package
#### List files in the target directory
RUN ls -l ./target
####Second stage: runtime environment
FROM eclipse-temurin:17.0.8_7-jre

####copy jar from the first stage
COPY  --from=backend-build ./target/stackoverflow-tw-0.0.1-SNAPSHOT.jar /app/

EXPOSE 8080

CMD ["java","-jar","/app/stackoverflow-tw-0.0.1-SNAPSHOT.jar"]