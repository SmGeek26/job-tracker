FROM openjdk:17-jdk-slim

WORKDIR /app

COPY . .

RUN chmod +x gradlew

RUN ./gradlew build

CMD ["java", "-jar", "build/libs/jobtracker-0.0.1-SNAPSHOT.jar"]