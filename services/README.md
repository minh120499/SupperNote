Khi sử dụng Clean Architecture / Domain-Driven Design (DDD) / Hybrid, codebase nên được tổ chức sao cho:

- Business logic (Domain) tách biệt hoàn toàn khỏi:
    - tầng hạ tầng (database, messaging, HTTP)
    - framework (Spring, Express, NestJS…)
- Dễ test unit, dễ thay thế công nghệ
- Phân chia rõ module nghiệp vụ (bounded context)

Cấu trúc folder

```markdown
src/
├── modules/  
│ ├── order/  
│ │ ├── application/ ← Luồng xử lý nghiệp vụ (UseCases)  
│ │ ├── domain/ ← Mô hình nghiệp vụ thuần túy (Entity, VO, Service)  
│ │ ├── infrastructure/ ← Giao tiếp DB, file, API, MQ  
│ │ └── interface/ ← Adapter đầu vào: Controller, REST, GraphQL  
│ └── customer/  
│ ├── application/  
│ ├── domain/  
│ ├── infrastructure/  
│ └── interface/  
├── shared/ ← Các thành phần dùng chung (BaseEntity, Error, Mapper…)  
├── config/ ← Cấu hình Spring, security, database  
└── main/java/App.java ← Entry point  
```

Ví dụ: 

```markdown
order/
├── application/
│   ├── CreateOrderUseCase.java
│   └── OrderService.java
├── domain/
│   ├── Order.java
│   ├── OrderItem.java
│   ├── OrderStatus.java
│   ├── OrderRepository.java    ← Interface!
│   └── OrderDomainService.java ← validate Domain, làm việc với domain Object
├── infrastructure/
│   ├── persistence/
│   │   ├── OrderJpaEntity.java
│   │   ├── OrderJpaRepository.java
│   │   └── OrderRepositoryImpl.java  ← implements OrderRepository
│   └── mapper/OrderMapper.java
├── interface/
│   └── OrderController.java
```