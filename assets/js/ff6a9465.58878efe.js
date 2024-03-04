"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2346],{73360:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=t(85893),s=t(11151);const i={},a="Deploy with AWS ECS Fargate",o={id:"installation-steps/DeployWithAWSECSFargate",title:"Deploy with AWS ECS Fargate",description:"Provided by contributor, not verified by RP team, please use with caution.",source:"@site/docs/installation-steps/DeployWithAWSECSFargate.md",sourceDirName:"installation-steps",slug:"/installation-steps/DeployWithAWSECSFargate",permalink:"/docs/installation-steps/DeployWithAWSECSFargate",draft:!1,unlisted:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/installation-steps/DeployWithAWSECSFargate.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Deploy on Ubuntu OS",permalink:"/docs/installation-steps/DeployOnUbuntuOS"},next:{title:"ReportPortal 23.1 File storage options",permalink:"/docs/installation-steps/ReportPortal23.1FileStorageOptions"}},l={},c=[{value:"Pre-requisites",id:"pre-requisites",level:3},{value:"Deployment",id:"deployment",level:3},{value:"Elastic File System",id:"elastic-file-system",level:4},{value:"PostreSQL database",id:"postresql-database",level:4},{value:"Load Balancer",id:"load-balancer",level:4},{value:"KMS Key",id:"kms-key",level:4},{value:"Secrets",id:"secrets",level:4},{value:"IAM Role",id:"iam-role",level:4},{value:"Security Groups",id:"security-groups",level:4},{value:"RP Applications",id:"rp-applications",level:4},{value:"DNS",id:"dns",level:4},{value:"Validation",id:"validation",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"deploy-with-aws-ecs-fargate",children:"Deploy with AWS ECS Fargate"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Provided by contributor, not verified by RP team, please use with caution."})})}),"\n",(0,r.jsxs)(n.p,{children:["ReportPortal can be deployed using AWS ECS Fargate by interpreting the ",(0,r.jsx)(n.a,{href:"https://raw.githubusercontent.com/reportportal/reportportal/master/docker-compose.yml",children:"docker-compose.yml"})]}),"\n",(0,r.jsx)(n.h3,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,r.jsx)(n.p,{children:"Ensure following services are available in the chosen AWS region & you have permissions to create/modify the resources."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Elastic File System"}),"\n",(0,r.jsx)(n.li,{children:"Aurora PostgreSQL Serverless RDS instance"}),"\n",(0,r.jsx)(n.li,{children:"AWS EC2"}),"\n",(0,r.jsx)(n.li,{children:"AWS Secrets Manager"}),"\n",(0,r.jsx)(n.li,{children:"AWS Lambda"}),"\n",(0,r.jsx)(n.li,{children:"AWS ECS"}),"\n",(0,r.jsx)(n.li,{children:"AWS Cloudwatch"}),"\n",(0,r.jsx)(n.li,{children:"AWS IAM"}),"\n",(0,r.jsx)(n.li,{children:"AWS KMS"}),"\n",(0,r.jsx)(n.li,{children:"Route53"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"deployment",children:"Deployment"}),"\n",(0,r.jsx)(n.h4,{id:"elastic-file-system",children:"Elastic File System"}),"\n",(0,r.jsx)(n.p,{children:"Create Elastic FileSystem with 2 access points i.e., for minio & elasticsearch."}),"\n",(0,r.jsx)(n.h4,{id:"postresql-database",children:"PostreSQL database"}),"\n",(0,r.jsx)(n.p,{children:"Create Aurora Serverless RDS PostgreSQL instance (Engine Version: 13.6) with minimum 2 ACUs and maximum 16 ACUs"}),"\n",(0,r.jsx)(n.h4,{id:"load-balancer",children:"Load Balancer"}),"\n",(0,r.jsx)(n.p,{children:"Create Elastic Application LoadBalancer - internal OR internet facing (based on your requirement) with following target groups"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Traefik with target as IP, port 8080 and health-check path ",(0,r.jsx)(n.code,{children:"/ping"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Index with target as Lambda & health checks disabled."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Also, create following rules on the listener of load-balancer"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Default rule should forward requests to Traefik target group."}),"\n",(0,r.jsxs)(n.li,{children:["Paths matching pattern ",(0,r.jsx)(n.code,{children:"/composite/info"}),", ",(0,r.jsx)(n.code,{children:"/composite/health"}),", ",(0,r.jsx)(n.code,{children:"/ui"})," & ",(0,r.jsx)(n.code,{children:"/"})," should be forwarded to Index target group."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"kms-key",children:"KMS Key"}),"\n",(0,r.jsx)(n.p,{children:"Create a symmetric encryption KMS key with relevant permissions to manage & access key."}),"\n",(0,r.jsx)(n.h4,{id:"secrets",children:"Secrets"}),"\n",(0,r.jsx)(n.p,{children:"Create Secrets to store the credentials & config of the components & refer the values in ECS task definition environment variables section. For the encryption key choose the custom KMS key created above."}),"\n",(0,r.jsx)(n.p,{children:"Secret Structure:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{   \n    "app_username": "foo",\n    "app_password: "bar"\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"During the ECS Task Definition creation choose valueFrom by referring the SecretsManager ARN in the environment variables section as follows\nEg:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'    {\n        "name": "RABBITMQ_DEFAULT_PASS",\n        "valueFrom": "arn:aws:secretsmanager:us-east-1:XXXXXXXXX:secret:report-portal-rmq-zBcd:app_password::"\n    }\n'})}),"\n",(0,r.jsx)(n.h4,{id:"iam-role",children:"IAM Role"}),"\n",(0,r.jsx)(n.p,{children:"Create an IAM role with following permissions"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"KMS encryption & decryption"}),"\n",(0,r.jsx)(n.li,{children:"SecretsManager Read access"}),"\n",(0,r.jsx)(n.li,{children:"ECS Task creation"}),"\n",(0,r.jsx)(n.li,{children:"EFS access"}),"\n",(0,r.jsx)(n.li,{children:"Write access to CloudWatch log groups"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"security-groups",children:"Security Groups"}),"\n",(0,r.jsx)(n.p,{children:"Create Security Groups for"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Access to application - attach to Load Balancer"}),"\n",(0,r.jsx)(n.li,{children:"Access to RP components (with the default ports of apps) & EFS mount (inbound rule to port 2049) - attach to all ECS task definitions."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"rp-applications",children:"RP Applications"}),"\n",(0,r.jsx)(n.p,{children:"Most of the configuration remains same for the applications as per the docker-compose.yml file except few overrides as per cloud provider. Ensure the components are deployed within VPC scope & disable public IP assignment where ever applicable."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Migrations:"}),"\nCreate Task Def for migrations & just run the task to apply the database schema. Since it's a one time task there's no need to create service."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Minio & Elasticsearch:"}),"\nCreate Task Def for these components by adding Elastic File System mountpoints & launch the services."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"RabbitMQ"}),"\nCreate Task Def for RabbitMQ by mapping the credentials from SecretsManager in the environment variables."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"API, jobs, metrics-gatherer, analyzer, analyzer-train & ui:"})}),"\n",(0,r.jsxs)(n.p,{children:["Create Task Def for each of these components & add dockerlabel with ",(0,r.jsx)(n.code,{children:"@ecs"}),' suffix as per the provider.\nEg: "traefik.http.routers.api.middlewares": "api-strip-prefix@ecs"']}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Traefik:"})}),"\n",(0,r.jsx)(n.p,{children:"a. Create Task Def with following configuration (Launch Type as Fargate)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:['image: "traefik',":v2",'.4",']}),"\n",(0,r.jsx)(n.li,{children:'entryPoint: "traefik"'}),"\n",(0,r.jsx)(n.li,{children:'command: "--providers.ecs=true", "--ping=true", "--ping.entrypoint=web", "--providers.ecs.region=AWS_REGION","--providers.ecs.clusters=report-portal","--providers.ecs.exposedByDefault=false","--providers.ecs.refreshSeconds=60","--entrypoints.web.address=:8080","--entrypoints.traefik.address=:8081","--api.dashboard=true","--api.insecure=true","--log.level=DEBUG","--accesslog=true","--accesslog.format=json"'}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"b. Create ECS Service mapping to the Traefik Target Group\nc. Now inspect the logs of traefik service to see if all RP components are being picked up in the configuration from ECS provider."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Index:"}),"\nFor some obvious reasons the index (with Ruby runtime) service couldn't run on ECS - hence ported to Lambda with Python runtime.\nCreate a lambda function with 128M memory & 120s timeout with following code."]}),"\n",(0,r.jsxs)(n.p,{children:["Add environment variable ",(0,r.jsx)(n.code,{children:"TRAEFIK_SERVICES_URL"})," with the IP address of Traefik endpoint (it can be fetched from the task details. Eg: ",(0,r.jsx)(n.a,{href:"http://192.168.2.120:8081",children:"http://192.168.2.120:8081"}),")"]}),"\n",(0,r.jsxs)(n.p,{children:["mureq can be obtained from ",(0,r.jsx)(n.a,{href:"https://github.com/slingamn/mureq/blob/master/mureq.py",children:"mureq.py"})," - place it beside the ",(0,r.jsx)(n.code,{children:"lamda_function.py"})," file."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import os\nimport json\nimport mureq\n\n\ndef lambda_handler(event, context):\n    print("-------------------EVENT BEGIN-------------------------------")\n    print(event)\n    print("-------------------EVENT END-------------------------------")\n    traefik_services= mureq.get(os.environ[\'TRAEFIK_SERVICES_URL\'])\n    \n    if event[\'path\'] == \'/composite/info\':\n        rp_status = {}\n        for service in traefik_services.json():\n            if "loadBalancer" in service:\n                app_name = service[\'name\'].replace(\'@ecs\',\'\')\n                app_info = mureq.get(service[\'loadBalancer\'][\'servers\'][0][\'url\'] + \'/info\')\n                rp_status.update({app_name: app_info.json()})\n        return{\n            "statusCode": 200,\n            "statusDescription": "200 OK",\n            "isBase64Encoded": False,\n            "headers": {\n                "Content-Type": "application/json"\n            },\n            "body": json.dumps(rp_status)\n        }\n    if event[\'path\'] == \'/composite/health\':\n        rp_health = {}\n        for service in traefik_services.json():\n            if "loadBalancer" in service:\n                app_name = service[\'name\'].replace(\'@ecs\',\'\')\n                app_health = list(service[\'serverStatus\'].values())[0]\n                rp_health.update({app_name: app_health})\n        return{\n            "statusCode": 200,\n            "statusDescription": "200 OK",\n            "isBase64Encoded": False,\n            "headers": {\n                "Content-Type": "application/json"\n            },\n            "body": json.dumps(rp_health)\n        }\n    if event[\'path\'] == \'/\':\n        redirect_url= event[\'headers\'][\'x-forwarded-proto\'] + "://" + event[\'headers\'][\'host\'] + \'/ui\'\n        print(redirect_url)\n        return{\n            "statusCode": 301,\n            "statusDescription": "301 Found",\n            "isBase64Encoded": False,\n            "headers": {\n                "Location": redirect_url\n            },\n            "body": ""\n        }\n        \n    if event[\'path\'] == \'/ui\':\n        redirect_url= event[\'headers\'][\'x-forwarded-proto\'] + "://" + event[\'headers\'][\'host\'] + \'/ui/\'\n        print(redirect_url)\n        return{\n            "statusCode": 301,\n            "statusDescription": "301 Found",\n            "isBase64Encoded": False,\n            "headers": {\n                "Location": redirect_url\n            },\n            "body": ""\n        }\n'})}),"\n",(0,r.jsx)(n.p,{children:"Now add this lambda to the Index TargetGroup created earlier."}),"\n",(0,r.jsx)(n.h4,{id:"dns",children:"DNS"}),"\n",(0,r.jsx)(n.p,{children:"Add relevent DNS records in the Route53 hostedzone."}),"\n",(0,r.jsx)(n.h3,{id:"validation",children:"Validation"}),"\n",(0,r.jsx)(n.p,{children:"Access the application with default credentials once the DNS record addition is propogated & validate if all sections are loading without errors."})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var r=t(67294);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);