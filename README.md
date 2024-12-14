# EcomWebApp

This sample Angular web app show:

How a client can communicate with spring services.

How to build simple spring services.

How to configure your services in various ways (mixed here for demonstration purposes):

    -Centralized your config in a service config-service.
    -Directly within the service itself, ensuring self-sufficient configuration and management. 
    -via Consul (iin this case config-service is not required).

How to use a gateway-service to handle the clients (here: angular ecom-web-app) requests with single entry point and how to resolve corss issues via the gateway-service configuration.

How to manage the different services with Consul.

## Design

    Todo: draw flow diagram

## Required

### **Java 17+**
### **Maven**
### **Git**
### **Angular version 19.0.4.**
### **Consul v1.17.3**


##### ensure that mvn use java 17
```bash
# quick help(unix):
java -version #java 17
mvn -v #ensure mvn use java 17
# if not installed
sudo apt-get update
sudo apt install openjdk-17
sudo apt install maven
#optional:
export JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
export PATH=$JAVA_HOME/bin:$PATH
echo "export JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64" >> ~/.bashrc
echo "export PATH=\$JAVA_HOME/bin:\$PATH" >> ~/.bashrc
source ~/.bashrc
```
For Consul look the [official documentation from hashicorp] (https://developer.hashicorp.com/consul/docs/v1.17.x/install.)

## Installation & Configuration

### Clone the repositories:
```bash

git clone git@github.com:Ouali-Alami/config-service.git
git clone git@github.com:Ouali-Alami/gateway-service.git
git clone git@github.com:Ouali-Alami/inventory-service.git
git clone git@github.com:Ouali-Alami/customer-service.git
git clone git@github.com:Ouali-Alami/order-service.git
```
⚠️ Warning:

While each service have a unique entry-point domain, they can also be managed through the gateway-service, which acts as a centralized entry-point. 

This service facilitates communication between services and with external clients, handling aspects such as security, authorization, and request routing.

The config-service interacts with the ecom-services to retrieve the necessary configuration data.

Key Concepts:
To fully grasp the application’s architecture, it’s important to follow the relevant configuration paths. 
The properties set within these configurations will provide a comprehensive overview of the application.

Design:
Each service is designed to operate independently, but it requires modification to manage its own data and configuration. 
This ensures that each microservice remains decoupled and self-sufficient, while still being able to integrate seamlessly within a larger ecosystem.

If you've grasped the explanations, you'll be able to structure your project using various architectural approaches, 
such as monolithic, microservices, or serverless architectures.

## Consul

To start Consul in server mode(quorum, write, read etc...) with your ip (localhost or network):

```bash
YOUR_IP=$(hostname -I)
consul agent -server -bootstrap-expect=1 -data-dir=consul-data -ui -bind=$YOUR_IP
#here consul artifacts(kv,health etc...) are saved in consul-data/ directory feel free to change it with your path...
```
#### 
Once the server is running, open your browser and navigate to `http://localhost:8500/`. The application will automatically reload whenever you modify any of the source files.

⚠️At the restart of consul if you want a clean workspace(no kv, etc.), ensure that consul-data directory is empty

## Web-app

To start the Angular ecom-web-app with a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Services 


⚠️ Notes:

At the start, the order-service required to communicate with the inventory-service and customer-service to create some orders, 
just to demonstrate the exchange between services.

If you want you can directly create your data in the order-service by using the class Customer and Inventory in the model package to break these dependencies.

That means you need to respect an orders to start the services:
1-costumer-service
2-inventory-service
3-order-service

```bash
mvn spring-boot:run
```

## Config:

To refresh your own config with actuator, run :

```bash
curl -X POST http://localhost:8084/actuator/refresh
```

## Additional Resources
