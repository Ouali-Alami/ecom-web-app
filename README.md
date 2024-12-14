# EcomWebApp

This sample Angular web app show:

How a client can communicate with spring services.

How to build simple spring services.

How to configure your services in various ways (mixed here for demonstration purposes):

How to use a gateway-service to handle the clients (here: angular ecom-web-app) requests with a single entry point.

How to resolve corss issues via the gateway-service configuration.

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
git clone git@github.com:Ouali-Alami/ecom-web-app.git
git clone git@github.com:Ouali-Alami/gateway-service.git
git clone git@github.com:Ouali-Alami/inventory-service.git
git clone git@github.com:Ouali-Alami/customer-service.git
git clone git@github.com:Ouali-Alami/order-service.git
```
⚠️ Warning:

While each service have a unique entry-point domain, they can also be managed through the gateway-service, which acts as a centralized entry-point. 

THe gateway-service facilitate communication between services and with external clients, handling aspects such as security, authorization, and request routing.

Key Concepts:

The properties set will provide a comprehensive overview of the application.

Design:

THe microservice design remains decoupled and self-sufficient, while still being able to integrate seamlessly within a larger ecosystem.

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

If you want you can break these dependencies create your own order-service data by using the Customer and Inventory classes from the model package:

But in the meantime please start services in these order:

1-gateway-service
2-costumer-service
3-inventory-service
4-order-service

```bash
mvn spring-boot:run
```

## Config:

To refresh your own config with actuator, run :

```bash
curl -X POST http://localhost:8084/actuator/refresh
```

## TEST
-Disconnect the Gateway: The client will no longer be able to retrieve data from the services.

-Remove the Gateway and Directly Expose Service Endpoints: By bypassing the gateway and providing direct access to the service endpoints, you will be able to access the services' data.

-Extend Application Functionality: You can enhance the app by cloning the billing-service from my GitHub repository and integrating it into the application.

-Delegate Configuration Management to Consul: Modify the application properties to assign the responsibility of handling the application's configuration to Consul.

-Develop and Integrate Custom Services: Create your own services and integrate them into the existing application.

-Transition to a Monolithic Architecture: Redesign the application to adopt a monolithic architecture, consolidating both the frontend and backend within a single cohesive system.

## Contributions and Pull Requests

If you have any questions or would like to contribute to the project by adding new features, fixing bugs, or improving documentation, please feel free to open a pull request. Here are the steps for contributing:

Fork the repository.

Create a new branch for your feature or bug fix (git checkout -b feature/my-new-feature).

Commit your changes (git commit -am 'Add a new feature').

Push your changes to your fork (git push origin feature/my-new-feature).

Open a pull request on the main repository.
