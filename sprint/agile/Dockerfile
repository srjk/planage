FROM openjdk:8-jdk-alpine
VOLUME /tmp
EXPOSE 8086
ADD ./target/agile-1.0.0-SNAPSHOT.jar /agile/src/agile-1.0.0-SNAPSHOT.jar
WORKDIR  agile/src
ENTRYPOINT ["java","-jar","agile-1.0.0-SNAPSHOT.jar"]
