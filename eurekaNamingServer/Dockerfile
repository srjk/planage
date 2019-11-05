# Alpine because it's lighter
FROM openjdk:8-jdk-alpine


# Set ENV variables
ENV PORT=8761

# Add JAR file and run it as entrypoint
ADD target/eurekaNamingServer-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]

# Expose the port
EXPOSE 8761