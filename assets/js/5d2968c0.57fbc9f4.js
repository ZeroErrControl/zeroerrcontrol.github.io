"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4932],{2419:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var i=r(4848),s=r(8453);const t={sidebar_position:7},l="CAN driver (Linux)",o={id:"eRob driver/CAN-Linux",title:"CAN driver (Linux)",description:"---",source:"@site/docs/eRob driver/CAN-Linux.md",sourceDirName:"eRob driver",slug:"/eRob driver/CAN-Linux",permalink:"/docs/eRob driver/CAN-Linux",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/eRob driver/CAN-Linux.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"IGH EtherCAT (Linux)",permalink:"/docs/eRob driver/IGH EtherCAT"},next:{title:"CANopen protocol (Linux)",permalink:"/docs/eRob driver/CANopen-Linux"}},d={},c=[{value:"1. Check the Linux Version and System Type (32/64 bit)",id:"1-check-the-linux-version-and-system-type-3264-bit",level:2},{value:"2. Copy the Corresponding USBCAN Driver Files to the System",id:"2-copy-the-corresponding-usbcan-driver-files-to-the-system",level:2},{value:"3. Get Administrator Privileges",id:"3-get-administrator-privileges",level:2},{value:"4. Copy Driver Libraries to the GCC Compilation Directory",id:"4-copy-driver-libraries-to-the-gcc-compilation-directory",level:2},{value:"5. Link the Libraries",id:"5-link-the-libraries",level:2},{value:"6. Compile the USBCAN Driver",id:"6-compile-the-usbcan-driver",level:2},{value:"7. Run the Test Program",id:"7-run-the-test-program",level:2},{value:"8. Connect the USBCAN Device",id:"8-connect-the-usbcan-device",level:2},{value:"9. Modify Udev Rules for Permanent User Access",id:"9-modify-udev-rules-for-permanent-user-access",level:2},{value:"10. Recompile the Test Program",id:"10-recompile-the-test-program",level:2},{value:"11. Compile and Run the eRobCAN Test",id:"11-compile-and-run-the-erobcan-test",level:2},{value:"12.Example (Velocity Mode)",id:"12example-velocity-mode",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"can-driver-linux",children:"CAN driver (Linux)"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h1,{id:"installing-can-driver-on-linux",children:"Installing CAN Driver on Linux"}),"\n",(0,i.jsx)(n.h2,{id:"1-check-the-linux-version-and-system-type-3264-bit",children:"1. Check the Linux Version and System Type (32/64 bit)"}),"\n",(0,i.jsx)(n.p,{children:"Run the following command to check the Linux version and system type:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"uname -a\n"})}),"\n",(0,i.jsx)(n.p,{children:"From the output, we can see that the system is 64-bit"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"Linux erobman 6.5.0-rt5 #1 SMP PREEMPT_RT Wed Oct 16 10:34:26 \nCST 2024 x86_64 x86_64 x86_64 GNU/Linux\n\n"})}),"\n",(0,i.jsx)(n.h2,{id:"2-copy-the-corresponding-usbcan-driver-files-to-the-system",children:"2. Copy the Corresponding USBCAN Driver Files to the System"}),"\n",(0,i.jsx)(n.p,{children:"After confirming the system type, copy the corresponding USBCAN driver files to the system."}),"\n",(0,i.jsx)(n.p,{children:"(For this example, place the driver files in /home/eRob_CAN_driver/)"}),"\n",(0,i.jsx)(n.h2,{id:"3-get-administrator-privileges",children:"3. Get Administrator Privileges"}),"\n",(0,i.jsx)(n.p,{children:"To perform further operations, including installing the driver, acquire administrator privileges."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo su\n"})}),"\n",(0,i.jsx)(n.p,{children:"(Enter the root password after the su command to gain admin access)"}),"\n",(0,i.jsx)(n.h2,{id:"4-copy-driver-libraries-to-the-gcc-compilation-directory",children:"4. Copy Driver Libraries to the GCC Compilation Directory"}),"\n",(0,i.jsx)(n.p,{children:"Navigate to the USBCAN driver folder and copy libusb.so, libusb-1.0.so, and libECanVci.so.1 to the GCC compilation directory (default path is /usr/lib)."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cp libusb.so libusb-1.0.so libECanVci.so.1 /usr/lib\n"})}),"\n",(0,i.jsx)(n.h2,{id:"5-link-the-libraries",children:"5. Link the Libraries"}),"\n",(0,i.jsx)(n.p,{children:"Navigate to the GCC library folder and link libECanVci.so.1 to libECanVci.so."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ln -sv libECanVci.so.1 libECanVci.so\n"})}),"\n",(0,i.jsx)(n.h2,{id:"6-compile-the-usbcan-driver",children:"6. Compile the USBCAN Driver"}),"\n",(0,i.jsx)(n.p,{children:"Go to the USBCAN driver folder and compile the driver."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd /your_file_path/linux64\nmake\n"})}),"\n",(0,i.jsx)(n.h2,{id:"7-run-the-test-program",children:"7. Run the Test Program"}),"\n",(0,i.jsx)(n.p,{children:"Run the test program to test USBCAN transmission."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"./test\n"})}),"\n",(0,i.jsx)(n.p,{children:"If you encounter the following error, install the required library:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install libusb-0.1-4\n"})}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.p,{children:"If you encounter the following error, install the required library:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"error while loading shared libaries: libusb-0.1.so.4: cannot open share ....\n"})}),(0,i.jsx)(n.p,{children:"You can fix it by :"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install libusb-0.1-4\n"})})]}),"\n",(0,i.jsx)(n.p,{children:"After installation, run the test program again. If successful, the output should be as follows:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.strong,{children:"first parameter"})," ",(0,i.jsx)(n.code,{children:"16"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Device type. For single-channel devices, input 3, for dual-channel input 4."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.strong,{children:"second parameter"})," ",(0,i.jsx)(n.code,{children:"0"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Device index. Input 0 if only one USBCAN device is connected."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.strong,{children:"third parameter"})," ",(0,i.jsx)(n.code,{children:"3"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Channel to open. Input 1 to open CAN1, 2 to open CAN2, and 3 to open both CAN1 and CAN2."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.strong,{children:"fourth parameter"})," ",(0,i.jsx)(n.code,{children:"0x1400"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'CAN bus baud rate. 0x1400 represents a 1000K baud rate. For other rates, refer to the "EcanVCI Dynamic Library Manual."'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.strong,{children:"fifth parameter"})," ",(0,i.jsx)(n.code,{children:"0"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'Operating mode. 0 is normal mode. For other modes, see the "EcanVCI Dynamic Library Manual."'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.strong,{children:"sixth parameter"})," ",(0,i.jsx)(n.code,{children:"1"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Sending interval in ms."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.strong,{children:"seventh parameter"})," ",(0,i.jsx)(n.code,{children:"1000"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Number of transmissions."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"8-connect-the-usbcan-device",children:"8. Connect the USBCAN Device"}),"\n",(0,i.jsx)(n.p,{children:"Use the lsusb command to see the connected USBCANI-V503."}),"\n",(0,i.jsx)(n.p,{children:"To run the test (with admin privileges):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"./test 4 0 3 0x1400 2 0 3 1000\n"})}),"\n",(0,i.jsx)(n.h2,{id:"9-modify-udev-rules-for-permanent-user-access",children:"9. Modify Udev Rules for Permanent User Access"}),"\n",(0,i.jsx)(n.p,{children:"To permanently grant regular users access to the USBCAN device, modify the udev configuration:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo gedit /etc/udev/rules.d/50-usbcan.rules\n"})}),"\n",(0,i.jsx)(n.p,{children:"Add the following content (modify the values marked in red based on the USB's ID):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-t",children:'SUBSYSTEMS=="usb" \nATTRS{idVendor}=="0c66" \nATTRS{idProduct}=="000c" \nGROUP="users" \nMODE="0666"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Reload ",(0,i.jsx)(n.code,{children:"udev"})," rules and reconnect the device to apply the new permissions:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo udevadm control --reload\n"})}),"\n",(0,i.jsx)(n.h2,{id:"10-recompile-the-test-program",children:"10. Recompile the Test Program"}),"\n",(0,i.jsx)(n.p,{children:"Recompile the test program with admin privileges, then run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"make\n./test 4 0 3 0x1400 2 0 3 1000\n"})}),"\n",(0,i.jsx)(n.p,{children:"The installation of the eRob driver is now complete."}),"\n",(0,i.jsx)(n.h2,{id:"11-compile-and-run-the-erobcan-test",children:"11. Compile and Run the eRobCAN Test"}),"\n",(0,i.jsxs)(n.p,{children:["Go to the ",(0,i.jsx)(n.code,{children:"linux_test"})," folder, create a build directory, and compile the program:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mkdir build && cd build\ncmake ..\nmake\n"})}),"\n",(0,i.jsx)(n.p,{children:"After compiling, you will see three executable files."}),"\n",(0,i.jsx)(n.p,{children:"If the USBCAN device doesn't work, try reconnecting it and run the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'./eRobCAN_sendCOB 0x641 "{01 00 00 00 00 01}"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["If the return value is ",(0,i.jsx)(n.code,{children:"0x3e"}),", the command was sent successfully."]}),"\n",(0,i.jsxs)(n.p,{children:["For CAN message commands, refer to the ",(0,i.jsx)(n.strong,{children:"eRunner User Manual"}),": ",(0,i.jsx)(n.a,{href:"https://www.zeroerr.cn/d/file/download/eRunner%E7%94%A8%E6%88%B7%E6%89%8B%E5%86%8C_Ver1.4.pdf",children:"Download link"})]}),"\n",(0,i.jsx)(n.h2,{id:"12example-velocity-mode",children:"12.Example (Velocity Mode)"}),"\n",(0,i.jsx)(n.p,{children:"Here is an example of sending commands in velocity mode:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'./eRobCAN_sendCOB 0x641 "{00 4E 00 00 00 02}"\n./eRobCAN_sendCOB 0x641 "{01 12 00 00 00 00}"\n./eRobCAN_sendCOB 0x641 "{01 FD 00 00 00 00}"\n./eRobCAN_sendCOB 0x641 "{00 88 00 00 75 30}"\n./eRobCAN_sendCOB 0x641 "{00 89 00 00 75 30}"\n./eRobCAN_sendCOB 0x641 "{01 FE 00 00 27 10}"\n./eRobCAN_sendCOB 0x641 "{01 00 00 00 00 01}"\n./eRobCAN_sendCOB 0x641 "{00 08}"\n./eRobCAN_sendCOB 0x641 "{00 05 00 01}"\n./eRobCAN_sendCOB 0x641 "{00 02}"\n./eRobCAN_sendCOB 0x641 "{01 00 00 00 00 00}"\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>o});var i=r(6540);const s={},t=i.createContext(s);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);