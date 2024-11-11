"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8578],{2254:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=t(4848),a=t(8453);const s={sidebar_position:1},r="Nvidia Isaac Sim",o={id:"eRob_developer/Nvidia-Isaac-sim",title:"Nvidia Isaac Sim",description:"What Is Isaac Sim?",source:"@site/docs/eRob_developer/Nvidia-Isaac-sim.md",sourceDirName:"eRob_developer",slug:"/eRob_developer/Nvidia-Isaac-sim",permalink:"/docs/eRob_developer/Nvidia-Isaac-sim",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/eRob_developer/Nvidia-Isaac-sim.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"eRob developer",permalink:"/docs/category/erob-developer"},next:{title:"MoveIt2",permalink:"/docs/eRob_developer/ROS2-moveIt"}},d={},c=[{value:"What Is Isaac Sim?",id:"what-is-isaac-sim",level:2},{value:"Install Nvidia Isaac Sim on Windows",id:"install-nvidia-isaac-sim-on-windows",level:2},{value:"Install Python Requirements",id:"install-python-requirements",level:2},{value:"Launching Isaac Sim via Python and Using eRob&#39;s Model",id:"launching-isaac-sim-via-python-and-using-erobs-model",level:2}];function l(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"nvidia-isaac-sim",children:"Nvidia Isaac Sim"})}),"\n",(0,n.jsx)(i.h2,{id:"what-is-isaac-sim",children:"What Is Isaac Sim?"}),"\n",(0,n.jsxs)(i.p,{children:["Isaac Sim is a software platform built from the ground up to support the increasingly roboticized and automated world. The goal is to make it as easy as possible for you to design, tune, train, and deploy autonomous control agents for real, physical robots. ",(0,n.jsx)(i.a,{href:"https://docs.omniverse.nvidia.com/isaacsim/latest/index.html#design",children:"[Reference link]"})]}),"\n",(0,n.jsx)("div",{class:"Nvidia",children:(0,n.jsx)("a",{children:(0,n.jsx)("img",{src:"/img/hero_shot.png",alt:"Nvidia1",style:{width:"1000",height:"auto"}})})}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsx)(i.h2,{id:"install-nvidia-isaac-sim-on-windows",children:"Install Nvidia Isaac Sim on Windows"}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsxs)(i.p,{children:["You can refer to the ",(0,n.jsx)(i.a,{href:"https://docs.omniverse.nvidia.com/isaacsim/latest/installation/index.html",children:"Nvidia website"})," to install the Isaac Sim platform."]}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsx)(i.h2,{id:"install-python-requirements",children:"Install Python Requirements"}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsx)(i.p,{children:"Once you have successfully installed the Isaac Sim platform, you can navigate to the Isaac Sim directory."}),"\n",(0,n.jsxs)(i.p,{children:["For example, my path is ",(0,n.jsx)(i.code,{children:"D:\\Isaac_sim\\OMNIVERSE\\pkg\\isaac-sim-4.1.0"}),"."]}),"\n",(0,n.jsx)("div",{class:"Nvidia",children:(0,n.jsx)("a",{children:(0,n.jsx)("img",{src:"/img/Nvidia1.png",alt:"Nvidia2",style:{width:"1000",height:"auto"}})})}),"\n",(0,n.jsx)(i.p,{children:"After entering the Isaac Sim directory, you need to launch the terminal and start the Python development environment that comes with Isaac Sim."}),"\n",(0,n.jsx)(i.p,{children:"If you encounter dependency issues with packages afterward, you can install the dependencies by following the steps below."}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"python.bat -m pip install pyads\npython.bat -m pip install pyQT5\n"})}),"\n",(0,n.jsx)(i.h2,{id:"launching-isaac-sim-via-python-and-using-erobs-model",children:"Launching Isaac Sim via Python and Using eRob's Model"}),"\n",(0,n.jsxs)(i.p,{children:["Here you can download ",(0,n.jsx)(i.a,{href:"https://github.com/wdb-123/eRob_usd",children:(0,n.jsx)(i.code,{children:"eRob's usd file"})})," and modify the path in your ",(0,n.jsx)(i.code,{children:"Python code"}),"."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-python",children:'# Start Isaac Sim; required for Standalone mode\nfrom omni.isaac.kit import SimulationApp\n# Choose whether to run in headless mode\nsimulation_app = SimulationApp({"headless": False})\n\n# Code execution\nprint("Simulation started")\n\n# Load an existing scene\nfrom omni.isaac.core.utils.stage import open_stage\n# \nfile_path = "Your usd file path\\\\eRob_LLM_TC_MIN.usd"\nopen_stage(usd_path=file_path)\n\n# Add a world\nfrom omni.isaac.core import World\nworld = World()\n\n# It\'s recommended by the official documentation to reset the world after adding objects\nworld.reset()\n\n# Access a specific prim (primitive) at a given path\nfrom omni.isaac.core.utils.prims import get_prim_at_path\nprim = get_prim_at_path("/World/eROb110_ok/erob110h_i_SWG2/node_/mesh_/RevoluteJoint")\nif not prim.IsValid():\n    print("Invalid prim")\nelse:\n    print("Valid prim")\n\n# Set the target angular velocity for the RevoluteJoint\nprim.GetAttribute("drive:angular:physics:targetVelocity").Set(0)\n\n# Method 2: Using get_prim_property() function, with the first parameter as Prim path, and the second as attribute name\nfrom omni.isaac.core.utils.prims import get_prim_property\n\n# Delay function\nimport time\n# Initialize start time\nstart_time = time.time()\ndelay_duration = 1.0  # Delay for 1 second\ndirection = 1\nvelocity_factor = 0\n\n# Start rendering\nwhile True:\n    # Retrieve pose and velocity attributes (placeholders)\n    # position, orientation = my_cube.get_world_pose()\n    # linear_velocity = my_cube.get_linear_velocity()\n    # prim = get_prim_at_path("/World/eRob3/Cylinder_01/RevoluteJoint")\n\n    # Get current time\n    current_time = time.time()\n    \n    # Enable eRob rotation with acceleration and deceleration\n    if current_time - start_time >= 0.1 and direction == 1:\n        velocity_factor += 0.1\n        # Update start_time\n        start_time = current_time\n    \n    if current_time - start_time >= 0.1 and direction == -1:\n        velocity_factor -= 0.1\n        # Update start_time\n        start_time = current_time\n    \n    # Reverse direction if velocity factor reaches threshold\n    if abs(velocity_factor) >= 5:\n        direction = -direction\n\n    # Set velocity with speed limits\n    prim.GetAttribute("drive:angular:physics:targetVelocity").Set(velocity_factor * 10.0)\n\n    # Retrieve the angular target velocity and print it\n    angular_targetVelocity = prim.GetAttribute("drive:angular:physics:targetVelocity").Get()\n    print("drive:angular:physics:targetVelocity:", angular_targetVelocity)\n    print("\\n")\n\n    # Step the simulation with rendering enabled\n    world.step(render=True)\n\n'})}),"\n",(0,n.jsx)("div",{class:"Nvidia",children:(0,n.jsx)("a",{children:(0,n.jsx)("img",{src:"/img/eRobIsaac2.gif",alt:"eRobIsaac2",style:{width:"600",height:"auto"}})})})]})}function m(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>o});var n=t(6540);const a={},s=n.createContext(a);function r(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);