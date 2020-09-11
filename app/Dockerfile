FROM  maven:3.3-jdk-8 AS build

RUN mkdir /build

COPY . /build/

WORKDIR /build/
RUN mvn clean package

FROM openjdk:8-jdk-alpine

RUN mkdir /app
WORKDIR /app

COPY --from=build /build/target/*.jar app.jar

CMD ["java", "-jar", "app.jar", "--spring.config.location=classpath:/application.production.properties"]



