## Analytics & Big Data

| AWS Name | Better Name | Azure equivalent | Google Cloud equivalent | Description |
|---|---|---|---|---|
| Amazon Athena | SQL Query Service | Synapse Analytics | BigQuery | Query data in S3 using SQL without a server |
| Amazon EMR | Big Data Platform | HDInsight | Dataproc | Managed big data platform for processing large datasets. Supports Hadoop, Spark. |
| Amazon Kinesis | Real-time Stream Processing | Azure Stream Analytics | Cloud Dataflow | Process and analyze real-time streaming data like logs, video, etc. Think Kafka. |
| Amazon QuickSight | BI Dashboard | Power BI | Looker | Create and share interactive dashboards and business intelligence reports. Think Tableau. |
| Amazon Redshift | Data Warehouse | Azure Synapse Analytics | BigQuery | Managed petabyte-scale data warehouse for running SQL queries on large datasets. Think Snowflake. |
| AWS Clean Rooms | Data Collaboration | Azure Purview | Dataplex | Securely analyze and collaborate on datasets with partners without sharing raw data |
| AWS Data Pipeline | Data Pipeline | Azure Data Factory | Cloud Composer | Automate transfer of data between AWS services and on-premises data sources |
| AWS Glue | Data ETL | Azure Data Factory | Cloud Dataflow | Extract, transform, and load data from various sources into data lakes/warehouses |

## Application Integration

| AWS Name | Better Name | Azure equivalent | Google Cloud equivalent | Description |
|---|---|---|---|---|
| AWS Step Functions | Visual Workflow Builder | Logic Apps | Workflows | Build visual workflows and easily run them |
| Amazon AppFlow | 3rd Party Integrator | Logic Apps | Application Integration | No-code integration service for 3rd party apps like Salesforce, Zendesk |
| Amazon EventBridge | Event Bus | Event Grid | Eventarc | Native solution for routing events between apps and AWS services |
| Amazon MQ | Managed Message Broker | Service Bus | ? | Managed protocol-compliant message broker. Supports Apache ActiveMQ and RabbitMQ |
| Amazon SNS | Pub/Sub Service | Notification Hubs | Pub/Sub | Managed pub/sub messaging for microservices and serverless apps. One-to-many communication |
| Amazon SQS | Message Queue | Service Bus | Cloud Tasks | Managed message queuing service for decoupling microservices. One-to-one communication |

## Business Applications

| AWS Name | Better Name | Azure equivalent | Google Cloud equivalent | Description |
|---|---|---|---|---|
| AWS AppFabric | SaaS Management Platform | Microsoft Entra | BeyondCorp Enterprise | Centralize SaaS application security, user activity monitoring, and access controls |
| Amazon Chime | Video Conferencing | Teams | Google Meet | Enterprise communication service for video/voice calls, chat, and screen sharing. Think Zoom. |
| Amazon Connect | Cloud Contact Center | Dynamics 365 Customer Service | Contact Center AI Platform | Cloud-based contact center service with voice and chat capabilities |
| Amazon Pinpoint | Customer Engagement Service | Azure Communication Services | Firebase Cloud Messaging | Targeted messaging and analytics service for customer engagement |

## Cloud Financial Management

| AWS Name | Better Name | Azure equivalent | Google Cloud equivalent | Description |
|---|---|---|---|---|
| AWS Cost Explorer | Cost Analysis | Cost Management | Cloud Billing | Analyze and visualize AWS costs and usage data to identify trends and cost-saving opportunities |
| AWS Budgets | Cost Monitoring | Azure Budgets | Cloud Billing | Set custom budgets and receive alerts when costs or usage exceed thresholds |
| AWS Cost and Usage Report | Cost Reporting | Cost Management | Cloud Billing | Generate detailed reports on AWS costs and usage data for custom analysis and forecasting |

## Compute

| AWS Name | Better Name | Azure equivalent | Google Cloud equivalent | Description |
|---|---|---|---|---|
| Amazon EC2 | Virtual Machine | Virtual Machines | Compute Engine | Virtual machines you can SSH into and do anything |
| Amazon EC2 Image Builder | VM Image Builder | VM Image Builder | Image Builder | Automatically create, test and maintain VM images |
| Amazon Lightsail | Simple VPS | - | - | Easy-to-use VPS with simplified management |
| AWS Batch | Batch Processing | Batch Service | Cloud Batch | Schedule and run thousands of batch computing jobs on Amazon ECS, Fargate, etc. |
| AWS Elastic Beanstalk | App Platform | App Service | App Engine | Platform as a Service - deploy your web apps without any infrastructure management |
| AWS Lambda | Serverless Functions | Functions | Cloud Functions | Functions that run your code without managing servers. Supports multiple languages |
| AWS Outposts | On-Premises Cloud | Azure Stack | Anthos | Run AWS services on on-premises servers |
| AWS Wavelength | 5G Edge Computing | Edge Zones | Mobile Edge Cloud | Run applications at 5G network edge for ultra-low latency |

## Containers & Orchestration

| AWS Name | Better Name | Azure equivalent | Google Cloud equivalent | Description |
|---|---|---|---|---|
| Amazon ECR (Elastic Container Registry) | Container Registry | Azure Container Registry (ACR) | Container Registry | Docker image storage. Think Docker Hub but private |
| Amazon ECS (Elastic Container Service) | Container Orchestration (Native) | Azure Container Apps (ACA) | Cloud Run | Native container orchestration service. Works with EC2 or Fargate for serverless containers |
| Amazon EKS (Elastic Kubernetes Service) | Container Orchestration (Kubernetes) | Azure Kubernetes Service (AKS) | Kubernetes Engine (GKE) | Managed Kubernetes service |
| AWS App Runner | Simple Container Apps | Azure Container Apps (ACA) | Cloud Run | Managed container platform for web apps. Deploy code and enjoy load balancing, auto-scaling etc. |
| AWS Fargate | Serverless Containers | Azure Container Instances (ACI) | Cloud Run Jobs | Compute engine (not a standalone service) for running containers in serverless environment |

## Databases

| AWS Name | Better Name | Azure equivalent | Google Cloud equivalent | Description |
|---|---|---|---|---|
| Amazon Aurora | Optimized SQL Database | Azure Database for MySQL/PostgreSQL | Cloud SQL | High-performance managed MySQL/PostgreSQL compatible database |
| Amazon DynamoDB | NoSQL Database (Native) | Cosmos DB | Cloud Firestore/Datastore | Managed NoSQL database optimized for performance, scalability, and low latency |
| Amazon DocumentDB | NoSQL Database (MongoDB) | Cosmos DB (MongoDB API) | MongoDB Atlas on GCP | Document database with MongoDB compatibility |
| Amazon ElastiCache | In-memory Cache | Azure Cache for Redis | Memorystore | In-memory caching service supporting Redis or Memcached |
| Amazon Neptune | Graph Database | Cosmos DB (Gremlin API) | - | Managed graph database service |
| Amazon QLDB | Ledger Database | - | - | Managed ledger database for verifiable history of changes. Think blockchain. |
| Amazon RDS | SQL Database | Azure SQL Database | Cloud SQL | Managed relational databases for multiple engines (MySQL, PostgreSQL, Oracle, SQL Server) |
| Amazon Timestream | Time Series Database | Azure Time Series Insights | - | Managed time series database for time series data |

## Developer Tools

| AWS Name | Better Name | Azure equivalent | Google Cloud equivalent | Description |
|---|---|---|---|---|
| AWS Cloud9 | Cloud IDE | Azure DevOps Codespaces | Cloud Shell Editor | Browser-based IDE with collaborative coding features |
| AWS CloudShell | Cloud Terminal | Azure Cloud Shell | Cloud Shell | Browser-based shell environment with AWS tools pre-installed |
| AWS CodeArtifact | Artifact Repository | Azure Artifacts | Artifact Registry | Managed artifact repository for software packages |
| AWS CodeBuild | Code Build | Azure Pipelines | Cloud Build | Fully managed build service that compiles code and runs tests |
| AWS CodeCommit (discontinued) | Git Repository | Azure Repos | Cloud Source Repositories | Fully managed source control service using Git |
| AWS CodeDeploy | Code Deploy | Azure DevOps | Cloud Deploy | Automated deployment service to various compute services |
| AWS CodePipeline | CI/CD Pipeline | Azure Pipelines | Cloud Build | Continuous delivery service for fast and reliable updates |
| AWS Fault Injection Service | Chaos Engineering | Azure Chaos Studio | - | Controlled experiment service for testing application resilience |
| AWS Infrastructure Composer | Infrastructure Designer | - | - | Visual designer for AWS infrastructure. Generates IaaC templates (AWS CloudFormation) |
| Amazon Q Developer | AI Copilot | GitHub Copilot | Duet AI | AI-powered coding assistant and documentation helper |
| AWS X-Ray | Distributed Tracing | Application Insights | Cloud Trace | Application trace analysis and debugging service. Useful for microservices |

## Frontend Web & Mobile

| AWS Name | Better Name | Azure equivalent | Google Cloud equivalent | Description |
|---|---|---|---|---|
| AWS Amplify | Full-Stack Framework | Static Web Apps | Firebase | Complete solution for building full-stack web & mobile apps |
| AWS AppSync | Serverless API | API Management | - | Service for creating serverless GraphQL API with real-time data synchronization |
| AWS Device Farm | Mobile Testing Service | App Center Test | Firebase Test Lab | Testing service for mobile and web applications on real devices |

## Machine Learning

| AWS Name | Better Name | Azure equivalent | Google Cloud equivalent | Description |
|---|---|---|---|---|
| Amazon Bedrock | LLMs API | Azure OpenAI | Vertex AI | Fully managed service for accessing foundation LLMs (Claude, Llama, etc.) |
| Amazon CodeGuru | Code Review AI | DevOps AI | - | AI-powered code reviews and application performance recommendations |
| Amazon Comprehend | Text Analytics | Text Analytics | Natural Language AI | Natural language processing service for text analysis |
| Amazon Forecast | AI Forecasting | Forecasting | Vertex AI Forecasting | Time series forecasting using machine learning |
| Amazon Kendra | Enterprise Search | Cognitive Search | Enterprise Search | ML-powered intelligent search service for enterprise data. Think Elasticsearch. |
| Amazon Lex | Chatbot Builder | Bot Service | Dialogflow | Build conversational interfaces using voice and text. Think Alexa. |
| Amazon Personalize | Recommendation Engine | Personalizer | Recommendations AI | Real-time personalized recommendations |
| Amazon Polly | Text-to-Speech | Text to Speech | Text-to-Speech | Convert text into lifelike speech |
| Amazon Q | AI Assistant | Copilot | Duet AI | AI-powered assistant for business use cases |
| Amazon Rekognition | Computer Vision AI | Computer Vision | Vision AI | Image and video analysis service |
| Amazon SageMaker | ML Platform | Azure ML | Vertex AI | Complete platform for building, training, and deploying ML models |
| Amazon Textract | Document Analysis | Form Recognizer | Document AI | Extract text and data from documents |
| Amazon Transcribe | Speech-to-Text | Speech to Text | Speech-to-Text | Convert speech to text |
| Amazon Translate | Translator | Translator | Translation AI | Neural machine translation service |

## Management & Monitoring

| AWS Name | Better Name | Azure equivalent | Google Cloud equivalent | Description |
|---|---|---|---|---|
| AWS Auto Scaling | Resource Scaler | Autoscale | Autoscaling | Automatically adjust resources across multiple services |
| AWS CloudFormation | Infrastructure as Code | ARM Templates | Cloud Deployment Manager | Define and provision infrastructure using code. Think Terraform. |
| AWS CloudTrail | Activity Logging | Activity Log | Cloud Audit Logs | Track user activity and API usage |
| Amazon CloudWatch | Monitoring & Logs | Monitor | Cloud Monitoring | Infrastructure and application monitoring service |
| AWS Compute Optimizer | Resource Optimization | Advisor | Recommender | Analyze and optimize compute resource usage |
| AWS Control Tower | Multi-Account Manager | Landing Zones | Cloud Asset Inventory | Set up and govern multi-account AWS environment |
| AWS Config | Resource Config Manager | Policy | Asset Inventory | Track and audit configuration of your resources |
| AWS Health Dashboard | Service Status | Service Health | Cloud Status | View status and health of all AWS services |
| AWS Organizations | Organizations Manager | Management Groups | Cloud Resource Manager | Centrally manage multiple AWS accounts as a single organization |
| AWS OpsWorks | Server Config Manager | Automation | Config Management | Servers (EC2 or on-premises) configuration automation using Chef and Puppet |
| AWS Systems Manager | Operations Hub | Automation | Cloud Operations | Infrastructure operations management |
| AWS Trusted Advisor | Advisor | Advisor | Recommender | Analyze environment against best practices |
| AWS Well-Architected Tool | Architecture Reviewer | Well-Architected Review | Cloud Architecture Center | Review and improve your architectures |

## Migration & Transfer

| AWS Name | Better Name | Azure equivalent | Google Cloud equivalent | Description |
|---|---|---|---|---|
| AWS Application Discovery Service | Server Discovery Scanner | Azure Migrate | Cloud Asset Inventory | Scan and catalog on-premises servers for migration planning |
| AWS Application Migration Service | App Migration | Azure Migrate | Cloud Migration | Automate migration of applications to AWS |
| AWS Database Migration Service | Database Migration | Database Migration Service | Database Migration Service | Migrate databases with minimal downtime |
| AWS Migration Hub | Migration Dashboard | Azure Migrate | Migration Center | Central dashboard to track migration progress |
| AWS Snow Family | Physical Data Transfer | Data Box | Transfer Appliance | Physical devices for moving large amounts of data |
| AWS DataSync | Data Transfer Service | Azure File Sync | Storage Transfer Service | Automate data transfer between on-premises and AWS |
| AWS Transfer Family | FTP Service | Azure Files | - | Managed SFTP, FTPS, and FTP service |

## Networking & Content Delivery

| AWS Name | Better Name | Azure equivalent | Google Cloud equivalent | Description |
|---|---|---|---|---|
| Amazon API Gateway | API Gateway | API Management | Cloud Endpoints/API Gateway | Create, publish, and manage APIs |
| Amazon CloudFront | CDN | Content Delivery Network | Cloud CDN | Global content delivery network |
| Amazon Route 53 | DNS | DNS | Cloud DNS | Domain registration and DNS routing |
| Amazon VPC | Virtual Network | Virtual Network | Virtual Private Cloud | Isolated cloud network. Think VLAN. |
| AWS App Mesh | Service Mesh | Service Fabric Mesh | Traffic Director | Application-level networking for microservices. Monitor, trace, log, and control traffic. |
| AWS Cloud Map | Service Discovery | Service Fabric | Service Directory | Service discovery for cloud resources |
| AWS Direct Connect | Dedicated Connection | ExpressRoute | Cloud Interconnect | Dedicated physical network connection to AWS |
| AWS Global Accelerator | Traffic Optimizer | Front Door | Premium Network Tier | Improve global application availability |
| AWS PrivateLink | Private Endpoint | Private Link | Private Service Connect | Connect services across different AWS accounts and VPCs without exposing traffic to the public internet |
| AWS Transit Gateway | Virtual WAN | Virtual WAN | Network Connectivity Center | Connect VPCs and on-premises networks through a central hub. Like a Virtual WAN. |
| AWS VPN | VPN Service | VPN Gateway | Cloud VPN | Secure network connectivity between on-premises and AWS |
| Elastic Load Balancing | Load Balancer | Load Balancer | Cloud Load Balancing | Distribute incoming traffic |

## Security, Identity & Compliance

| AWS Name | Better Name | Azure equivalent | Google Cloud equivalent | Description |
|---|---|---|---|---|
| Amazon Cognito | User Authentication | Azure AD B2C | Firebase Auth | Managed user authentication. No need to build your own auth system. |
| Amazon Detective | Security Investigation | Sentinel | Security Command Center | INVESTIGATOR - investigates security incidents to find the root cause (e.g. compromised accounts) |
| Amazon GuardDuty | Threat Watchdog | Security Center | Security Command Center | WATCHDOG - continuously monitors for malicious activity (e.g. unusual API calls) |
| Amazon Inspector | Security Scanner | Defender for Cloud | Security Scanner | SCANNER - runs security assessments (e.g. scans for open ports) |
| Amazon Macie | Data Security Scanner | Purview | Data Loss Prevention | Discover and protect sensitive data (e.g. personal information) |
| AWS Artifact | Compliance Reports | Service Trust Portal | Compliance Reports Manager | Access AWS security and compliance documents (e.g. ISO certifications) |
| AWS Audit Manager | Compliance Audit | Purview | Security Command Center | Continuous compliance auditing |
| AWS Certificate Manager | SSL Certificate Manager | App Service Certificates | Certificate Authority Service | Provision and manage SSL/TLS certificates. Think Let's Encrypt. |
| AWS CloudHSM | Hardware Security Module | Dedicated HSM | Cloud HSM | Hardware-based key storage so you can manage your own encryption keys |
| AWS Directory Service | Active Directory | Active Directory DS | Managed Service for Microsoft AD | Managed Microsoft Active Directory |
| AWS Firewall Manager | Central Firewall Manager | Azure Firewall Manager | Cloud Armor | Centrally manage firewall rules |
| AWS Identity and Access Management | IAM | Azure AD | Cloud IAM | Manage access to AWS services |
| AWS Key Management Service | Encryption Key Manager | Key Vault | Cloud KMS | Manage encryption keys |
| AWS Secrets Manager | Secrets Manager | Key Vault | Secret Manager | Store and rotate secrets |
| AWS Security Hub | Security Dashboard | Security Center | Security Command Center | Central security dashboard |
| AWS Shield | DDoS Protection | DDoS Protection | Cloud Armor | DDoS protection service |
| AWS IAM Identity Center | Single Sign-On | Azure AD | Cloud Identity | Single sign-on service to access multiple accounts |
| AWS WAF | Web Application Firewall | WAF | Cloud Armor | Filter malicious web (so it's application layer) traffic (e.g. SQL injection) |

## Storage

| AWS Name | Better Name | Azure equivalent | Google Cloud equivalent | Description |
|---|---|---|---|---|
| AWS Backup | Backup | Backup | Backup and DR Service | Centralized backup management |
| Amazon Elastic Block Store | Block Storage | Managed Disks | Persistent Disk | Block-level storage volumes attached to EC2 instances |
| AWS Elastic Disaster Recovery | Disaster Recovery | Site Recovery | Backup and DR Service | Disaster recovery service |
| Amazon Elastic File System | Network File System | Files | Filestore | Scalable NFS file storage |
| Amazon FSx for Lustre | HPC File System | HPC Storage | Filestore | High-performance file system |
| Amazon FSx for Windows File Server | Windows File System | Files | Filestore | Managed Windows file storage |
| Amazon Simple Storage Service | Object Storage | Blob Storage | Cloud Storage | Scalable object storage service. Think Dropbox. |
| AWS Storage Gateway | Hybrid Storage | StorSimple | Storage Transfer Service | Send data to AWS from on-premises storage for example as a backup |

