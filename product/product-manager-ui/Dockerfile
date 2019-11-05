FROM openjdk:8-jdk-alpine
# Add a volume pointing to /tmp
VOLUME /tmp
# Make port 8083 available to the world outside this container
EXPOSE 8083
ADD ./target/product-manager-ui-1.0.0-SNAPSHOT.jar /product-manager/src/product-manager-ui-1.0.0-SNAPSHOT.jar
WORKDIR  product-manager/src
# Run the jar file
ENTRYPOINT ["java","-jar","product-manager-ui-1.0.0-SNAPSHOT.jar"]
