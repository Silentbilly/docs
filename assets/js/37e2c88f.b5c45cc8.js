"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1688],{19314:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>i});var t=o(85893),s=o(11151);const r={},l="Deploy on Ubuntu OS",a={id:"installation-steps/DeployOnUbuntuOS",title:"Deploy on Ubuntu OS",description:"*Provided by @Tset Noitamotuahe. The article might be outdated.",source:"@site/docs/installation-steps/DeployOnUbuntuOS.md",sourceDirName:"installation-steps",slug:"/installation-steps/DeployOnUbuntuOS",permalink:"/docs/installation-steps/DeployOnUbuntuOS",draft:!1,unlisted:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/installation-steps/DeployOnUbuntuOS.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Maintain commands Cheat sheet",permalink:"/docs/installation-steps/MaintainCommandsCheatSheet"},next:{title:"Deploy with AWS ECS Fargate",permalink:"/docs/installation-steps/DeployWithAWSECSFargate"}},c={},i=[];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"deploy-on-ubuntu-os",children:"Deploy on Ubuntu OS"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Provided by @Tset Noitamotuahe. The article might be outdated.\nDo not hesitate to contribute and send us a pull request with updates. We appreciate your help!"})})}),"\n",(0,t.jsx)(n.p,{children:"Follow below steps if you like to have ReportPortal running on Ubuntu Zesty (17.04) with the latest Docker-CE version 17.05 and Docker-Compose 1.14"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Enable apt transport over HTTPS"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"   sudo apt-get install \\\n   apt-transport-https \\\n   ca-certificates \\\n   curl \\\n   software-properties-common\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Get apt-key for Docker repo"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Add Docker's repo to sources.list"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'   sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu zesty edge"\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"ToDo: 3.  check if there is a stable version of Docker-CE for Zesty"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'sudo add-apt-repository \\\n"deb [arch=amd64] https://download.docker.com/linux/ubuntu \\\n$(lsb_release -cs) \\\nstable"\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"Install Docker-CE"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"   sudo apt update\n   sudo apt install docker-ce\n"})}),"\n",(0,t.jsx)(n.p,{children:"PROXY SETTINGS for Docker (you'll probably need this @work)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"   mkdir -p /etc/systemd/system/docker.service.d\n   sudo nano /etc/systemd/system/docker.service.d/http-proxy.conf\n"})}),"\n",(0,t.jsx)(n.p,{children:"http-proxy.conf content"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",children:'   [Service]\n   Environment="HTTP_PROXY=http://proxyhost:port/" "NO_PROXY=localhost,127.0.0.1"\n   # ALTERNATIV - if you are behind HTTPS proxy instead of just HTTP:\n   # https-proxy.conf\n   # Environment="HTTPS_PROXY=http://proxyhost:port/"\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsx)(n.li,{children:"Restart Docker"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"   sudo systemctl daemon-reload\n   sudo systemctl restart docker\n   #  TEST: systemctl show --property=Environment docker\n   # >>> Environment=HTTP_PROXY=http://proxyhost:port/\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"6",children:["\n",(0,t.jsx)(n.li,{children:"Check that Docker is installed correctly"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'   sudo docker run hello-world\n   # hello-world images will be download and run\n   # your will see output e.g. "Hello from Docker!  ... "\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"7",children:["\n",(0,t.jsx)(n.li,{children:"DOCKER-COMPOSE installation from PIP v3.x (Python PIP 2.7 is deprecated 01/01/2020)"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"   sudo apt install python3-pip\n   sudo pip3 install docker-compose\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Also you can use the ",(0,t.jsx)(n.a,{href:"https://docs.docker.com/compose/install/",children:"official installation guide"})]}),"\n",(0,t.jsxs)(n.ol,{start:"8",children:["\n",(0,t.jsx)(n.li,{children:"REPORTPORTAL INSTALLATION"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"   mkdir reportportal\n   cd reportportal\n   # get the docker-compose file\n   wget https://raw.githubusercontent.com/reportportal/reportportal/master/docker-compose.yml\n   docker-compose up\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This will take some time cause several images will be downloaded ... go grab a coffee :)\nAfter download is completed and containers started open another terminal and run\n",(0,t.jsx)(n.code,{children:"docker ps"})," to check that all containers from previous step are up and running."]}),"\n",(0,t.jsxs)(n.ol,{start:"9",children:["\n",(0,t.jsxs)(n.li,{children:["Check that ReportPortal is running\nIn the VM opten browser to ",(0,t.jsx)(n.code,{children:"0.0.0.0:8080"})," --\x3e ReportPortal login page will open."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["If you are behind a proxy you need to add ",(0,t.jsx)(n.code,{children:"0.0.0.0"})," to the ",(0,t.jsx)(n.code,{children:"NO_PROXY"})," (no_proxy) ENV.",(0,t.jsx)("br",{}),"\nAfter setting the port forwarding like explained in video PART 2 (link below) open browser on your host machine to ",(0,t.jsx)(n.code,{children:"localhost:8080"})," or ",(0,t.jsx)(n.code,{children:"127.0.0.1:8080"})," --\x3e ReportPortal loginpage will open"]})}),"\n",(0,t.jsx)(n.p,{children:"OPTIONAL"}),"\n",(0,t.jsx)(n.p,{children:"If you don't like to write 'sudo' before each docker-command do this but be aware of possible security issue with that!"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"   sudo groupadd docker\n   sudo usermod -aG docker $USER\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:">>> RESTART VM!"})}),"\n",(0,t.jsx)(n.p,{children:"Helpful links (video tutorial)"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://raw.githubusercontent.com/reportportal/reportportal/master/docker-compose.yml",children:"Part 1"})}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://raw.githubusercontent.com/reportportal/reportportal/master/docker-compose.yml",children:"Part 2"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>l});var t=o(67294);const s={},r=t.createContext(s);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);