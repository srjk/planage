FROM maven:3.6-jdk-11 AS build
COPY pom.xml .
# RUN mvn dependency:go-offline
# RUN mvn -Dmaven.repo.local=$HOME/.m2 dependency:go-offline
COPY src src
# RUN mvn -Dmaven.repo.local=$HOME/.m2 -f pom.xml clean package
FROM openjdk:8-jdk-alpine


# Add a volume pointing to /tmp


# Make port 8080 available to the world outside this container
EXPOSE 8082

# COPY --from=build /target/promanager-ui-1.0.0.SNAPSHOT.jar program-manager-ui.jar
ADD /target/promanager-ui-1.0.0-SNAPSHOT.jar promanager-ui.jar
# Run the jar file 

ENTRYPOINT ["java","-jar","promanager-ui.jar"]
