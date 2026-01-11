Cricket Player Management Application (CPlayer App)

Backend: Spring Boot 2.7.0, Spring Cloud (Netflix Eureka, API Gateway), Java 17, Maven, RESTful APIs, JWT Authentication
Frontend: Angular 13, TypeScript, Angular Material, RxJS, JWT-Decode
Databases: MySQL (User data), MongoDB (Favorites & Recommendations)
DevOps: Docker, Docker Compose, Microservices Architecture
Integration: RabbitMQ (Message Queue), Swagger UI (API Documentation)

• Architected distributed microservices backend using Spring Cloud ecosystem with Eureka-based service registry and Spring Cloud Gateway for centralized API routing, load balancing, and cross-cutting concerns

• Engineered three independently scalable RESTful microservices (User Service, Favorite Service, Recommendations Service) with service discovery, enabling dynamic service registration and zero-downtime deployments

• Implemented JWT-based stateless authentication using jjwt library with token generation and validation across distributed services, ensuring secure inter-service communication and authorization

• Designed hybrid database architecture leveraging MySQL with Spring Data JPA for transactional user management and MongoDB with Spring Data MongoDB for schema-flexible favorites/recommendations, optimizing read/write performance

• Developed asynchronous event-driven communication between microservices using RabbitMQ and Spring AMQP, implementing message-driven architecture for player data synchronization and real-time updates

• Built comprehensive RESTful API layer with proper HTTP semantics (POST, GET, PUT, DELETE), exception handling, and Swagger documentation for seamless API discoverability and integration

• Configured Spring Cloud Gateway with route predicates and filters for request routing, authentication validation, rate limiting, and centralized logging across all backend services
