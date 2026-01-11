FROM java:8-jre
WORKDIR usr/src

ADD ./target/userservice-2.7.0.jar /usr/src/userservice-2.7.0.jar
ENTRYPOINT ["java","-jar","userservice-2.7.0.jar"]