# Alpine because it's lighter
FROM openjdk:8-jdk-alpine


# Set ENV variables
ENV PORT=8888
ENV DISCOVERY_URL="http://discovery:8761"

# Add JAR file and run it as entrypoint
ADD target/config-server-1.0.0-SNAPSHOT.jar app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]

# Expose the port
EXPOSE 8888