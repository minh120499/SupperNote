plugins {
    java
    id("org.springframework.boot") version "3.3.3"
    id("io.spring.dependency-management") version "1.1.6"
}

group = "com.supper-note"
version = "0.0.1-SNAPSHOT"

java {
    toolchain {
        languageVersion = JavaLanguageVersion.of(21)
    }
}

repositories {
    mavenCentral()
}

dependencies {
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("org.springframework.boot:spring-boot-starter-validation")
    implementation("org.springframework.boot:spring-boot-starter-data-jpa")
    testImplementation("org.springframework.boot:spring-boot-starter-test")
    testRuntimeOnly("org.junit.platform:junit-platform-launcher")

    // Spring Boot DevTools (tùy chọn, hữu ích cho quá trình phát triển)
    developmentOnly("org.springframework.boot:spring-boot-devtools")

    //	lombok v1.19.30
    compileOnly("org.projectlombok:lombok:1.18.30")
    annotationProcessor("org.projectlombok:lombok:1.18.30")

    // PostgreSQL JDBC Driver
    implementation("org.postgresql:postgresql:42.7.3")

    // MapStruct  v1.5.5
    implementation("org.mapstruct:mapstruct:1.5.5.Final")
    annotationProcessor("org.mapstruct:mapstruct-processor:1.5.5.Final")

    // Thư viện Jackson Databind
    implementation("com.fasterxml.jackson.core:jackson-databind:2.17.1")
    implementation("com.fasterxml.jackson.module:jackson-module-kotlin")

    // ModelMapper
    implementation("org.modelmapper:modelmapper:3.2.0")

    // JUnit 5
    testImplementation("org.junit.jupiter:junit-jupiter:5.10.0")

    // Mockito core
    testImplementation("org.mockito:mockito-core:5.12.0")

    // Mockito + JUnit 5 integration (cho @ExtendWith(MockitoExtension::class))
    testImplementation("org.mockito:mockito-junit-jupiter:5.12.0")

}

tasks.test {
    useJUnitPlatform()
    jvmArgs = listOf("-XX:+EnableDynamicAgentLoading", "-Xshare:off")
}