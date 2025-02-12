# AWS Services for Developers
AWS services explained in plain English with concepts familiar to developers and compared to Microsoft Azure and Google Cloud Platform.
<br/> 
Some AWS service names are quite cryptic, so I created this table that renames them using terms familiar to developers.
<br/>
This is a work in progress and I will update it as I learn more about AWS and cloud services in general.

## Types of cloud computing
It's good to know types of cloud computing before reading the table below.

**IaaS (Infrastructure as a Service)**
- Provides basic computing infrastructure (virtual machines, storage, networking)
- Most flexible and user-controlled option
- Examples: AWS EC2, Google Compute Engine

**PaaS (Platform as a Service)**
- Handles infrastructure management for you (no need to worry about OS, runtime, etc.)
- Focus on application development
- Examples: AWS Elastic Beanstalk, Google App Engine

**SaaS (Software as a Service)**
- Provides ready-to-use software applications
- Fully managed by provider
- Examples: Gmail, Salesforce, Microsoft 365

# List of AWS Services
There are over 200 AWS services, and this list is non-exhaustive. Feel free to add more services or propose alternative names for them.
Note: This comparison with Azure/Google Cloud is based on general service capabilities and may not reflect all features or recent changes in each platform. 
Service equivalents across platforms may have different feature sets or implementation approaches.

## Analytics & Big Data
| AWS Name          | Should be named                 | Type | Azure equivalent        | Google Cloud equivalent | Description                                                                                              |
| ----------------- | ------------------------------- | ---- | ----------------------- | ----------------------- | -------------------------------------------------------------------------------------------------------- |

| Amazon Athena     | SQL Query Service               | SaaS | Synapse Analytics       | BigQuery                | Query data in S3 using SQL without a server                                                              |
| Amazon EMR        | Hadoop/Spark                    | PaaS | HDInsight               | Dataproc                | Managed big data platform for processing large datasets                                                  |
| Amazon Kinesis    | Real-time Stream Processing     | PaaS | Azure Stream Analytics  | Cloud Dataflow          | Process and analyze real-time streaming data like logs, video, audio, or IoT telemetry                   |
| Amazon QuickSight | Business Intelligence Dashboard | SaaS | Power BI                | Looker                  | Create and share interactive dashboards and business intelligence reports                                |
| Amazon Redshift   | Data Warehouse                  | PaaS | Azure Synapse Analytics | BigQuery                | Managed petabyte-scale data warehouse for running SQL queries on large datasets                          |
| AWS Clean Rooms   | Secure Data Collaboration       | SaaS | Azure Purview           | Dataplex                | Securely analyze and collaborate on datasets with partners without sharing raw data                      |
| AWS Data Pipeline | Data Movement                   | PaaS | Azure Data Factory      | Cloud Composer          | Automate movement and transformation of data between different AWS services and on-premises data sources |
| AWS Glue          | ETL Service                     | PaaS | Azure Data Factory      | Cloud Dataflow          | Extract, transform, and load data from various sources into data lakes and data warehouses               |

## Application Integration
| AWS Name           | Should be named           | Type | Azure equivalent  | Google Cloud equivalent | Description                                                               |

| ------------------ | ------------------------- | ---- | ----------------- | ----------------------- | ------------------------------------------------------------------------- |
| AWS Step Functions | Visual Workflow Builder   | PaaS | Logic Apps        | Workflows               | Build visual workflows and easily run them                                |
| Amazon AppFlow     | 3rd Party Integrator      | SaaS | Logic Apps        | Application Integration | No-code integration service for third-party apps like Salesforce, Zendesk |
| Amazon EventBridge | Event Bus                 | PaaS | Event Grid        | Eventarc                | Serverless event bus for connecting applications and services             |
| Amazon MQ          | Managed Message Broker    | PaaS | Service Bus       | ?                       | Managed message broker service for Apache ActiveMQ and RabbitMQ           |
| Amazon SNS         | Push Notification Service | PaaS | Notification Hubs | Pub/Sub                 | Managed pub/sub messaging for microservices and serverless applications   |
| Amazon SQS         | Message Queue             | PaaS | Service Bus       | Cloud Tasks             | Managed message queuing service for decoupling and scaling microservices  |

## Business Applications
| AWS Name        | Should be named             | Type | Azure equivalent              | Google Cloud equivalent    | Description                                                                             |
| --------------- | --------------------------- | ---- | ----------------------------- | -------------------------- | --------------------------------------------------------------------------------------- |
| AWS AppFabric   | SaaS Management Platform    | SaaS | Microsoft Entra               | BeyondCorp Enterprise      | Centralize SaaS application security, user activity monitoring, and access controls     |
| Amazon Chime    | Video Conferencing          | SaaS | Teams                         | Google Meet                | Enterprise communication service for video calls, voice calls, chat, and screen sharing |
| Amazon Connect  | Cloud Contact Center        | SaaS | Dynamics 365 Customer Service | Contact Center AI Platform | Cloud-based contact center service with voice and chat capabilities                     |
| Amazon Pinpoint | Customer Engagement Service | SaaS | Azure Communication Services  | Firebase Cloud Messaging   | Targeted messaging and analytics service for customer engagement                        |

## Cloud Financial Management
| AWS Name                  | Should be named | Type | Azure equivalent | Google Cloud equivalent | Description                                                                                     |
| ------------------------- | --------------- | ---- | ---------------- | ----------------------- | ----------------------------------------------------------------------------------------------- |
| AWS Cost Explorer         | Cost Analysis   | SaaS | Cost Management  | Cloud Billing           | Analyze and visualize AWS costs and usage data to identify trends and cost-saving opportunities |
| AWS Budgets               | Cost Monitoring | SaaS | Azure Budgets    | Cloud Billing           | Set custom budgets and receive alerts when costs or usage exceed thresholds                     |
| AWS Cost and Usage Report | Cost Reporting  | SaaS | Cost Management  | Cloud Billing           | Generate detailed reports on AWS costs and usage data for custom analysis and forecasting       |

## Compute
| AWS Name                 | Type | Should be named      | Azure equivalent | Google Cloud equivalent | Description                                                                        |
| ------------------------ | ---- | -------------------- | ---------------- | ----------------------- | ---------------------------------------------------------------------------------- |
| Amazon EC2               | IaaS | Virtual Machine      | Virtual Machines | Compute Engine          | Virtual machines you can SSH into and do anything                                  |
| Amazon EC2 Image Builder | PaaS | VM Image Builder     | VM Image Builder | Image Builder           | Automatically create, test and maintain VM images                                  |
| Amazon Lightsail         | IaaS | Simple VPS           | -                | -                       | Easy-to-use VPS with simplified management                                         |
| AWS Batch                | PaaS | Batch Processing     | Batch Service    | Cloud Batch             | Schedule and run thousands of batch computing jobs on Amazon ECS, Fargate, etc.    |
| AWS Elastic Beanstalk    | PaaS | App Platform         | App Service      | App Engine              | Platform as a Service - deploy your web apps without any infrastructure management |
| AWS Lambda               | FaaS | Serverless Functions | Functions        | Cloud Functions         | Functions that run your code without managing servers                              |
| AWS Outposts             | IaaS | On-Premises Cloud    | Azure Stack      | Anthos                  | Run AWS services on-premises                                                       |
| AWS Wavelength           | IaaS | 5G Edge Computing    | Edge Zones       | Mobile Edge Cloud       | Run applications at 5G network edge                                                |

## Containers & Orchestration
| AWS Name                                | Type | Should be named                      | Azure equivalent                | Google Cloud equivalent | Description                                                                                                 |
| --------------------------------------- | ---- | ------------------------------------ | ------------------------------- | ----------------------- | ----------------------------------------------------------------------------------------------------------- |
| Amazon ECR (Elastic Container Registry) | PaaS | Container Registry                   | Azure Container Registry (ACR)  | Container Registry      | Docker image storage (think Dockerhub)                                                                      |
| Amazon ECS (Elastic Container Service)  | PaaS | Container Orchestration (Native)     | Azure Container Apps (ACA)      | Cloud Run               | Cloud-specific container orchestration service. Works with EC2 or Fargate for serverless containers         |
| Amazon EKS (Elastic Kubernetes Service) | PaaS | Container Orchestration (Kubernetes) | Azure Kubernetes Service (AKS)  | Kubernetes Engine (GKE) | Fully managed Kubernetes service                                                                            |
| AWS App Runner                          | PaaS | Simple Container Apps                | Azure Container Apps (ACA)      | Cloud Run               | Fully managed container platform for web apps. Just deploy code and enjoy load balancing, auto-scaling etc. |
| AWS Fargate                             | PaaS | Serverless Containers                | Azure Container Instances (ACI) | Cloud Run Jobs          | Compute ENGINE (not a standalone service) that enables containers to be executed in serverless environment  |

## Databases
| AWS Name           | Should be named          | Type | Azure equivalent                    | Google Cloud equivalent   | Description                                                                               |
| ------------------ | ------------------------ | ---- | ----------------------------------- | ------------------------- | ----------------------------------------------------------------------------------------- |
| Amazon Aurora      | Optimized SQL Database   | PaaS | Azure Database for MySQL/PostgreSQL | Cloud SQL                 | High-performance managed MySQL and PostgreSQL compatible database                         |
| Amazon DynamoDB    | NoSQL Database (Native)  | PaaS | Cosmos DB                           | Cloud Firestore/Datastore | Fully managed NoSQL database optimized for performance, scalability, and low latency      |
| Amazon DocumentDB  | NoSQL Database (MongoDB) | PaaS | Cosmos DB (MongoDB API)             | MongoDB Atlas on GCP      | Document database with MongoDB compatibility                                              |
| Amazon ElastiCache | In-memory cache          | PaaS | Azure Cache for Redis               | Memorystore               | In-memory caching service supporting Redis or Memcached                                   |
| Amazon Neptune     | Graph Database           | PaaS | Cosmos DB (Gremlin API)             | -                         | Fully managed graph database service                                                      |
| Amazon QLDB        | Ledger Database          | PaaS | -                                   | -                         | Fully managed ledger database for maintaining verifiable history of changes               |
| Amazon RDS         | SQL Database             | PaaS | Azure SQL Database                  | Cloud SQL                 | Managed relational databases for multiple engines (MySQL, PostgreSQL, Oracle, SQL Server) |
| Amazon Timestream  | Time Series Database     | PaaS | Azure Time Series Insights          | -                         | Managed time series database for IoT and operational applications                         |

## Developer Tools
| AWS Name                      | Should be named         | Type | Azure equivalent        | Google Cloud equivalent   | Description                                                                           |
| ----------------------------- | ----------------------- | ---- | ----------------------- | ------------------------- | ------------------------------------------------------------------------------------- |
| AWS Cloud9                    | Cloud IDE               | SaaS | Azure DevOps Codespaces | Cloud Shell Editor        | Browser-based IDE with collaborative coding features                                  |
| AWS CloudShell                | Cloud Terminal          | SaaS | Azure Cloud Shell       | Cloud Shell               | Browser-based shell environment with AWS tools pre-installed                          |
| AWS CodeArtifact              | Package Repository      | SaaS | Azure Artifacts         | Artifact Registry         | Managed artifact repository for software packages                                     |
| AWS CodeBuild                 | Build Service           | PaaS | Azure Pipelines         | Cloud Build               | Fully managed build service that compiles code and runs tests                         |
| AWS CodeCommit (discontinued) | Git Repository          | SaaS | Azure Repos             | Cloud Source Repositories | Fully managed source control service using Git                                        |
| AWS CodeDeploy                | Deployment Service      | PaaS | Azure DevOps            | Cloud Deploy              | Automated deployment service to various compute services                              |
| AWS CodePipeline              | CI/CD Pipeline          | PaaS | Azure Pipelines         | Cloud Build               | Continuous delivery service for fast and reliable updates                             |
| AWS Fault Injection Service   | Chaos Engineering       | SaaS | Azure Chaos Studio      | -                         | Controlled experiment service for testing application resilience                      |
| AWS Infrastructure Composer   | Infrastructure Designer | SaaS | -                       | -                         | Visual designer for AWS infrastructure. Generates IaaC templates (AWS CloudFormation) |
| Amazon Q Developer            | AI Copilot              | SaaS | GitHub Copilot          | Duet AI                   | AI-powered coding assistant and documentation helper                                  |
| AWS X-Ray                     | Distributed Tracing     | SaaS | Application Insights    | Cloud Trace               | Application trace analysis and debugging service                                      |

## Frontend Web and Mobile
| AWS Name        | Should be named        | Type | Azure equivalent | Google Cloud equivalent | Description                                                                     |
| --------------- | ---------------------- | ---- | ---------------- | ----------------------- | ------------------------------------------------------------------------------- |
| AWS Amplify     | Full-Stack Framework   | PaaS | Static Web Apps  | Firebase                | Complete solution for building full-stack web and mobile apps                   |
| AWS AppSync     | Serverless API         | PaaS | API Management   | -                       | Service for creating serverless GraphQL API with real-time data synchronization |
| AWS Device Farm | Mobile Testing Service | SaaS | App Center Test  | Firebase Test Lab       | Testing service for mobile and web applications on real devices                 |

## Machine Learning
| AWS Name           | Should be named         | Type | Azure equivalent | Google Cloud equivalent | Description                                                                 |
| ------------------ | ----------------------- | ---- | ---------------- | ----------------------- | --------------------------------------------------------------------------- |
| Amazon Bedrock     | Foundation Models API   | SaaS | Azure OpenAI     | Vertex AI               | Fully managed service for accessing foundation models (Claude, Llama, etc.) |
| Amazon CodeGuru    | Code Review AI          | SaaS | DevOps AI        | -                       | AI-powered code reviews and application performance recommendations         |
| Amazon Comprehend  | Text Analysis API       | SaaS | Text Analytics   | Natural Language AI     | Natural language processing service for text analysis                       |
| Amazon Forecast    | Time Series Predictions | SaaS | Forecasting      | Vertex AI Forecasting   | Time series forecasting using machine learning                              |
| Amazon Kendra      | Enterprise Search       | SaaS | Cognitive Search | Enterprise Search       | ML-powered intelligent search service for enterprise data                   |
| Amazon Lex         | Chatbot Builder         | SaaS | Bot Service      | Dialogflow              | Build conversational interfaces using voice and text                        |
| Amazon Personalize | Recommendation Engine   | SaaS | Personalizer     | Recommendations AI      | Real-time personalized recommendations                                      |
| Amazon Polly       | Text to Speech          | SaaS | Text to Speech   | Text-to-Speech          | Convert text into lifelike speech                                           |
| Amazon Q           | Enterprise AI Assistant | SaaS | Copilot          | Duet AI                 | AI-powered assistant for business use cases                                 |
| Amazon Rekognition | Computer Vision API     | SaaS | Computer Vision  | Vision AI               | Image and video analysis service                                            |
| Amazon SageMaker   | ML Platform             | PaaS | Azure ML         | Vertex AI               | Complete platform for building, training, and deploying ML models           |
| Amazon Textract    | Document Analysis       | SaaS | Form Recognizer  | Document AI             | Extract text and data from documents                                        |
| Amazon Transcribe  | Speech to Text          | SaaS | Speech to Text   | Speech-to-Text          | Convert speech to text                                                      |
| Amazon Translate   | Translation API         | SaaS | Translator       | Translation AI          | Neural machine translation service                                          |

## Management & Monitoring
| AWS Name                  | Should be named        | Type | Azure equivalent        | Google Cloud equivalent   | Description                                             |
| ------------------------- | ---------------------- | ---- | ----------------------- | ------------------------- | ------------------------------------------------------- |
| AWS Auto Scaling          | Resource Scaler        | PaaS | Autoscale               | Autoscaling               | Automatically adjust resources across multiple services |
| AWS CloudFormation        | Infrastructure as Code | PaaS | ARM Templates           | Cloud Deployment Manager  | Define and provision infrastructure using code          |
| AWS CloudTrail            | Activity Logging       | SaaS | Activity Log            | Cloud Audit Logs          | Track user activity and API usage                       |
| Amazon CloudWatch         | Monitoring & Logs      | SaaS | Monitor                 | Cloud Monitoring          | Infrastructure and application monitoring service       |
| AWS Compute Optimizer     | Resource Optimization  | SaaS | Advisor                 | Recommender               | Analyze and optimize compute resource usage             |
| AWS Control Tower         | Multi-Account Manager  | SaaS | Landing Zones           | Cloud Asset Inventory     | Set up and govern multi-account AWS environment         |
| AWS Config                | Resource Inventory     | SaaS | Policy                  | Asset Inventory           | Track resource inventory and changes                    |
| AWS Health Dashboard      | Service Status         | SaaS | Service Health          | Cloud Status              | View status and health of AWS services                  |
| AWS Organizations         | Account Manager        | SaaS | Management Groups       | Cloud Resource Manager    | Centrally manage multiple AWS accounts                  |
| AWS OpsWorks              | Configuration Manager  | PaaS | Automation              | Config Management         | Automation platform using Chef and Puppet               |
| AWS Systems Manager       | Operations Hub         | PaaS | Automation              | Cloud Operations          | Infrastructure operations management                    |
| AWS Trusted Advisor       | Best Practice Checker  | SaaS | Advisor                 | Recommender               | Analyze environment against best practices              |
| AWS Well-Architected Tool | Architecture Reviewer  | SaaS | Well-Architected Review | Cloud Architecture Center | Review and improve your architectures                   |