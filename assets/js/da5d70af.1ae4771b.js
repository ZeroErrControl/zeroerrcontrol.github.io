"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2029],{3818:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var t=i(4848),r=i(8453);const s={sidebar_position:4},o="SOEM (Windows)",l={id:"eRob driver/SOEM EtherCAT",title:"SOEM (Windows)",description:"---",source:"@site/docs/eRob driver/SOEM EtherCAT.md",sourceDirName:"eRob driver",slug:"/eRob driver/SOEM EtherCAT",permalink:"/docs/eRob driver/SOEM EtherCAT",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/eRob driver/SOEM EtherCAT.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Python (Windows)",permalink:"/docs/eRob driver/python-driver"},next:{title:"SOEM (Linux)",permalink:"/docs/eRob driver/SOEM EtherCAT Linux"}},a={},d=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step-by-Step Guide",id:"step-by-step-guide",level:2},{value:"1. Install Required Software",id:"1-install-required-software",level:3},{value:"a. Install Visual Studio",id:"a-install-visual-studio",level:4},{value:"b. Install WinPcap or Npcap",id:"b-install-winpcap-or-npcap",level:4},{value:"2. Download SOEM Source Code",id:"2-download-soem-source-code",level:3},{value:"3. Start a Visual Studio command prompt",id:"3-start-a-visual-studio-command-prompt",level:3},{value:"4. Run the SOEM master",id:"4-run-the-soem-master",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"soem-windows",children:"SOEM (Windows)"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#prerequisites",children:"Prerequisites"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#poor-synchronization-issue",children:"Poor Synchronization Issue"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#step-by-step-guide",children:"Step-by-Step Guide"})}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h1,{id:"soem-windows-1",children:"SOEM (Windows)"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"1.Windows Operating System:"})," A 64-bit version of Windows 7, 8, 10, or later."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"2.Visual Studio:"})," Microsoft Visual Studio 2017 or newer (Community, Professional, or Enterprise editions)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"3.WinPcap or Npcap:"})," A packet capture library that allows applications to capture and transmit network packets bypassing the protocol stack."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h1,{id:"poor-synchronization-of-the-system-kernel-caused-ethercat-to-fail-to-run-continuously",children:"Poor synchronization of the system kernel caused ethercat to fail to run continuously!"}),"\n",(0,t.jsx)(n.p,{children:"Therefore, it is not recommended to run under Windows system unless it can solve system synchroniztion."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"step-by-step-guide",children:"Step-by-Step Guide"}),"\n",(0,t.jsx)(n.h3,{id:"1-install-required-software",children:"1. Install Required Software"}),"\n",(0,t.jsx)(n.h4,{id:"a-install-visual-studio",children:"a. Install Visual Studio"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Download and install Visual Studio Community Edition if you don't have it installed."}),"\n",(0,t.jsx)(n.li,{children:"During installation, ensure that you include the Desktop development with C++ workload."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"b-install-winpcap-or-npcap",children:"b. Install WinPcap or Npcap"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"WinPcap has been deprecated and is no longer maintained. It's recommended to use Npcap."}),"\n",(0,t.jsxs)(n.li,{children:["Download Npcap from the ",(0,t.jsx)(n.a,{href:"https://npcap.com/",children:"official website"})," and install it."]}),"\n",(0,t.jsxs)(n.li,{children:["During installation, ensure the following options are selected:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Install Npcap in WinPcap API-compatible Mode"}),"\n",(0,t.jsx)(n.li,{children:"Support raw 802.11 traffic (and monitor mode) for WiFi adapters (if required)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"2-download-soem-source-code",children:"2. Download SOEM Source Code"}),"\n",(0,t.jsx)(n.p,{children:"Clone the SOEM repository from GitHub:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://git.zeroerr.cn/Don/eRob_SOEM-windows\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Alternatively, download the ZIP archive from the ",(0,t.jsx)(n.a,{href:"https://git.zeroerr.cn/Don/eRob_SOEM-windows",children:"SOEM GitHub page"})," and extract it.\nAnd unzip this archive in your computer."]}),"\n",(0,t.jsx)(n.h3,{id:"3-start-a-visual-studio-command-prompt",children:"3. Start a Visual Studio command prompt"}),"\n",(0,t.jsx)(n.p,{children:"Start a Visual Studio command prompt(e.g. x86 Native Tools Command Prompt for VS 2017) then:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'cd "The path of SOEM file, e.g.  D:\\SOEM"\nmkdir build\ncd build\ncmake .. -G "NMake Makefiles"\nnmake\n'})}),"\n",(0,t.jsx)(n.h3,{id:"4-run-the-soem-master",children:"4. Run the SOEM master"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd  test/win32/simple_test\neRob_test.exe\n"})}),"\n",(0,t.jsxs)(n.p,{children:["It will print out ",(0,t.jsx)(n.code,{children:"your network devices"}),", including your ",(0,t.jsx)(n.code,{children:"EtherCAT device"}),".\nLook for the ethernet adapter for your ",(0,t.jsx)(n.code,{children:"EtherCAT"})," network and take a note of the path, for example,  ",(0,t.jsx)(n.code,{children:"\\Device\\NPF_{A54146EA-CD6F-4A95-93E4-0919C4B2D685} "}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'eRob_test.exe  "\\Device\\NPF_{EFxxxxxxxxxxxxxx}"    (your etherCAT device)\n'})}),"\n",(0,t.jsx)(n.p,{children:"This program will enavle eRob devices, but will not run for a long time due to sychronization issues, hopefully the developers can solve this problems."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var t=i(6540);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);