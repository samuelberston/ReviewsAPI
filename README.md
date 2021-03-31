# ReviewsAPI

I built a scalable and optimized SQL database and Express server to handle 10M+ lines of data and serve it to a front end application with speed and efficiency

*starting the app*
Database
- launch db in an EC2 instance and seed the data

Server(s)
- launch server(s) in an EC2 instance an configue db.js with the DB EC2 Public IP
- configure loader.io route in server.js (for stress testing)
- start the servers - npm start

NGINX
- ???

*Technologies Used*

DB (schema, loading, seeding data)
- MySQL

ETL (extract, transfer, load)
- .csv files
- streams
- validation functions (ES6)

Server
- nodejs
- express
- axios
- HTTP REST API

Deployment
- aws (EC2, S3, IAM)
 
Stress testing
- k6 with grafana and influxdb
- loader.io (testing in the cloud)

Load balancing
- NGINX


*Challenges, Actions, Results*
This project challenged me to think in terms of optimization by iteratively testing and building. Here are a few ways I optimized the service:
- optimize MySQL queries using indexes, foreign keys, and efficient schema/data store - all queries <0.5ms
- separated server at DB into separate EC2 intances to maximize CPU and RAM usage
- implemented NGINX as a load balancer to distribute traffic as the application receives more requests (handles 1000+ clients/second with response times <50ms
