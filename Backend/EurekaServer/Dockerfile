FROM java:8-jre
WORKDIR usr/src
ENV MONGO_DATABASENAME=favdb
ENV MONGO_HOST=localhost
ENV MONGO_PORT=27017
ADD ./target/eurekaserver-2.7.0.jar /usr/src/eurekaserver-2.7.0.jar
ENTRYPOINT ["java","-jar","eurekaserver-2.7.0.jar"]