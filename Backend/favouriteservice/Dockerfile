FROM java:8-jre
WORKDIR usr/src
ENV MONGO_DATABASENAME=favdb
ENV MONGO_HOST=localhost
ENV MONGO_PORT=27017
ADD ./target/favouriteservice-2.7.0.jar /usr/src/favouriteservice-2.7.0.jar
ENTRYPOINT ["java","-jar","favouriteservice-2.7.0.jar"]