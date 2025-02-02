"use strict";(self.webpackChunkawesome_notes=self.webpackChunkawesome_notes||[]).push([[6891],{6344:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"Programming/DevOps/DockerBasicNotes","title":"Docker Basic Notes","description":"Docker Basis","source":"@site/notes/Programming/DevOps/DockerBasicNotes.md","sourceDirName":"Programming/DevOps","slug":"/Programming/DevOps/DockerBasicNotes","permalink":"/awesome-notes/Programming/DevOps/DockerBasicNotes","draft":false,"unlisted":false,"editUrl":"https://github.com/sabertazimi/awesome-notes/edit/main/notes/Programming/DevOps/DockerBasicNotes.md","tags":[],"version":"current","lastUpdatedBy":"sabertazimi","lastUpdatedAt":1712724461000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Clean Code Basic Notes","permalink":"/awesome-notes/Programming/DevOps/CleanCodeBasicNotes"},"next":{"title":"Functional Programming Basic Notes","permalink":"/awesome-notes/Programming/FunctionalProgramming/FunctionalProgrammingBasicNotes"}}');var o=s(5105),c=s(842);const i={},t="Docker Basic Notes",l={},a=[{value:"Docker Basis",id:"docker-basis",level:2},{value:"Docker CLI Workflows",id:"docker-cli-workflows",level:2},{value:"Docker Installation",id:"docker-installation",level:3},{value:"Docker Uninstallation",id:"docker-uninstallation",level:3},{value:"Get Docker Image",id:"get-docker-image",level:3},{value:"Build Docker Image",id:"build-docker-image",level:3},{value:"Run Docker Container",id:"run-docker-container",level:3},{value:"List Docker Container",id:"list-docker-container",level:3},{value:"Remove Docker Container",id:"remove-docker-container",level:3},{value:"Dockerfile",id:"dockerfile",level:2},{value:"Dockerfile Directives",id:"dockerfile-directives",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"docker-basic-notes",children:"Docker Basic Notes"})}),"\n",(0,o.jsx)(n.h2,{id:"docker-basis",children:"Docker Basis"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Docker"})," is ",(0,o.jsx)(n.strong,{children:"process-level"})," ",(0,o.jsx)(n.code,{children:"Linux"})," virtual container:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Namespace"}),": IPC/network/PID/UTS/user isolation."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Cgroup"}),": resources control."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"rootfs"}),": file system isolation."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'// https://github.com/lizrice/containers-from-scratch\npackage main\n\nimport (\n    "fmt"\n    "io/ioutil"\n    "os"\n    "os/exec"\n    "path/filepath"\n    "strconv"\n    "syscall"\n)\n\n// go run main.go run <cmd> <args>\nfunc main() {\n    switch os.Args[1] {\n    case "run":\n        run()\n    case "child":\n        child()\n    default:\n        panic("help")\n    }\n}\n\nfunc run() {\n    fmt.Printf("Running %v \\n", os.Args[2:])\n\n    cmd := exec.Command("/proc/self/exe", append([]string{"child"}, os.Args[2:]...)...)\n    cmd.Stdin = os.Stdin\n    cmd.Stdout = os.Stdout\n    cmd.Stderr = os.Stderr\n    cmd.SysProcAttr = &syscall.SysProcAttr{\n        Cloneflags:   syscall.CLONE_NEWUTS | syscall.CLONE_NEWPID | syscall.CLONE_NEWNS,\n        Unshareflags: syscall.CLONE_NEWNS,\n    }\n\n    must(cmd.Run())\n}\n\nfunc child() {\n    fmt.Printf("Running %v \\n", os.Args[2:])\n\n    cg()\n\n    cmd := exec.Command(os.Args[2], os.Args[3:]...)\n    cmd.Stdin = os.Stdin\n    cmd.Stdout = os.Stdout\n    cmd.Stderr = os.Stderr\n\n    must(syscall.Sethostname([]byte("container")))\n    must(syscall.Chroot("/home/liz/ubuntufs"))\n    must(os.Chdir("/"))\n    must(syscall.Mount("proc", "proc", "proc", 0, ""))\n    must(syscall.Mount("thing", "myTemp", "tmpfs", 0, ""))\n\n    must(cmd.Run())\n\n    must(syscall.Unmount("proc", 0))\n    must(syscall.Unmount("thing", 0))\n}\n\nfunc cg() {\n    cgroups := "/sys/fs/cgroup/"\n    pids := filepath.Join(cgroups, "pids")\n    os.Mkdir(filepath.Join(pids, "liz"), 0755)\n    must(ioutil.WriteFile(filepath.Join(pids, "liz/pids.max"), []byte("20"), 0700))\n    // Removes the new cgroup in place after the container exits\n    must(ioutil.WriteFile(\n        filepath.Join(pids, "liz/notify_on_release"),\n        []byte("1"),\n        0700\n    ))\n    must(ioutil.WriteFile(\n        filepath.Join(pids, "liz/cgroup.procs"),\n        []byte(strconv.Itoa(os.Getpid())),\n        0700\n    ))\n}\n\nfunc must(err error) {\n    if err != nil {\n        panic(err)\n    }\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"docker-cli-workflows",children:"Docker CLI Workflows"}),"\n",(0,o.jsx)(n.h3,{id:"docker-installation",children:"Docker Installation"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:' sudo apt-get update\n sudo apt-get install \\\n  apt-transport-https \\\n  ca-certificates \\\n  curl \\\n  gnupg \\\n  lsb-release\ncurl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -\nsudo add-apt-repository \\\n  "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"\nsudo apt update\nsudo apt install docker-ce docker-ce-cli containerd.io\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"curl -fsSL https://get.docker.com -o get-docker.sh\nsudo DRY_RUN=1 sh get-docker.sh\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo systemctl status docker\nsudo usermod -aG docker $USER\n"})}),"\n",(0,o.jsx)(n.h3,{id:"docker-uninstallation",children:"Docker Uninstallation"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker container stop $(docker container ls -aq)\ndocker system prune -a --volumes\nsudo apt purge docker-ce docker-ce-cli containerd.io\nsudo apt autoremove\nsudo rm -rf /var/lib/docker\nsudo rm -rf /var/lib/containerd\n"})}),"\n",(0,o.jsx)(n.h3,{id:"get-docker-image",children:"Get Docker Image"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker images\ndocker images -a\ndocker search <images>\ndocker pull <images:tag>\n"})}),"\n",(0,o.jsx)(n.h3,{id:"build-docker-image",children:"Build Docker Image"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker build . -t image-name\n\n# use Dockerfile at the root of the repository\ndocker build <github-repo-url> -t image-name\n"})}),"\n",(0,o.jsx)(n.h3,{id:"run-docker-container",children:"Run Docker Container"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"run"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"start"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"stop"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"restart"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# docker run -dp <host-port>:<container-port> [docker-image]\ndocker run -d -p 80:80 --name app-name docker/getting-started\ndocker run -d -p 80:80/tcp -p 80:80/udp --name app-name docker/getting-started\n"})}),"\n",(0,o.jsx)(n.h3,{id:"list-docker-container",children:"List Docker Container"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker ps\ndocker ps -l\ndocker ps -a\ndocker ps -q\n"})}),"\n",(0,o.jsx)(n.h3,{id:"remove-docker-container",children:"Remove Docker Container"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker rm <container>\n"})}),"\n",(0,o.jsx)(n.h2,{id:"dockerfile",children:"Dockerfile"}),"\n",(0,o.jsx)(n.h3,{id:"dockerfile-directives",children:"Dockerfile Directives"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"FROM"}),": source image."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"ENV"}),": set environment variable."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"WORKDIR"}),": change directory."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"COPY"}),": copy file."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"RUN"}),": run command."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"CMD"}),": final command."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"EXPOSE"}),": expose port."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Dockerfile",children:'FROM centos:7\nRUN yum -y install httpd\nCOPY index.html /usr/share/httpd/noindex/index.html\nEXPOSE 80\nCMD ["/usr/sbin/httpd", "-D", "FOREGROUND"]\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Dockerfile",children:'FROM centos:7\nRUN rpm -Uvh http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm\nRUN yum -y install nginx\nEXPOSE 80\nCMD ["nginx", "-g", "daemon off;"]\n'})})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},842:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>t});var r=s(8101);const o={},c=r.createContext(o);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);