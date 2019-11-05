#FROM openjdk:8-jdk-alpine
## Add a volume pointing to /tmp
#VOLUME /tmp
## Make port 8083 available to the world outside this container
#EXPOSE 8083
#ADD ./target/process-manager-ui-1.0.0-SNAPSHOT.jar /process-manager/src/process-manager-ui-1.0.0-SNAPSHOT.jar
#WORKDIR  product-manager/src
## Run the jar file
#ENTRYPOINT ["java","-jar","product-manager-ui-1.0.0-SNAPSHOT.jar"]

FROM openjdk:8-jdk-alpine
EXPOSE 4200
#COPY --from=build /target/process-manager-ui-1.0.0-SNAPSHOT.jar ui.jar
COPY target/process-manager-ui-1.0.0-SNAPSHOT.jar ui.jar
ENTRYPOINT ["java","-jar","ui.jar"]
