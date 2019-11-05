FROM maven:3.6-jdk-11 AS build
COPY pom.xml .
# RUN mvn dependency:go-offline
# RUN mvn -Dmaven.repo.local=$HOME/.m2 dependency:go-offline
COPY src src
# RUN mvn -Dmaven.repo.local=$HOME/.m2 -f pom.xml clean package

FROM openjdk:8-jdk-alpine

# Make port 8080 available to the world outside this container
EXPOSE 8081

# COPY --from=build /target/api-1.0.0.SNAPSHOT.jar program-manager-api.jar
ADD /target/api-1.0.0-SNAPSHOT.jar api.jar
ENTRYPOINT ["java","-jar","api.jar"]


