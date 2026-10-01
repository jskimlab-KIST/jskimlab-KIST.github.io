/*
  EDIT THIS FILE to manage the whole website.
  Set a section to false to hide it from the homepage AND navigation.
  The same data is used by Home, People, Publications, News, Join Us, and Research pages.
*/
const LAB = {
  name: "Sensor Fusion for Visual Perception@KIST",
  tagline: "We build intelligent systems for understanding the physical world.",
  location: "Center for Humanoid Research · KIST",
  email: "junsik.kim@kist.re.kr",

  sections: {
    research: true,
    people: true,
    publications: false,
    news: true,
    join: true
  },

  hero: {
    image: "assets/images/hero.jpg",
    kicker: "VISION · LEARNING · ACTION",
    title: "We build intelligent systems for understanding the physical world.",
    description: "Research at the intersection of computer vision, machine learning, and embodied intelligence."
  },

  join: {
    kicker: "JOIN US",
    title: "Come build the future with us.",
    description: "We are looking for curious researchers who want to push the boundaries of intelligent systems.",
    pageDescription: `We welcome motivated researchers interested in computer vision, machine learning, robotics, and intelligent systems.`,

    // Add, remove, or reorder sections freely. Empty title/text values are hidden automatically.
    sections: [
    //  {
    //    title: "Who We Are Looking For",
    //    text: `We welcome undergraduate students, graduate students,
//research interns, and postdoctoral researchers.`
//      },
      {
        title: "Open Positions",
        items: [
          "박사후 연구원",
          "석사후 연구원",
          "연구인턴",
          "대학원 학연과정",
          "현장실습"
        ]
      },
      {
        title: "연구 분야",
        text: `휴머노이드 로봇을 위한 Lifelong semantic mapping 기술 개발
            - LiDAR-Camera-IMU 등 다중센서 융합 기술
            - 지속적 지도 갱신 기술
휴머노이드 로봇을 위한 비전-언어-네비게이션(VLN) 기술 개발
            - 영상기반 mapless navigation 기술
            - Agentic AI 기술
휴머노이드 로봇을 위한 로봇파운데이션모델 적용 기술 개발
            - Loco-manipulation 기술
            - 작업 계획 기술
            - Human video 분석 기술
SDR 공통서비스프레임워크 구축 연구
            - 알고리즘 구현 및 적용
(우대) C/C++, ROS/ROS2 개발 경험, 센서 인터페이스 개발 경험 우대

상기 내용중 협의를 통해 한 가지 이상 주제를 정해 관련 연구 참여
`      }//,
      //{
      //  title: "How to Apply",
      //  text: `Please include a brief introduction, your research interests, and your CV when contacting us.`
      //}
    ],

    contactText: `For inquiries about available positions, please contact us.`,
    email: "junsik.kim@kist.re.kr"

  },

  research: [
    {slug:"sensorFusion",num:"01",eyebrow:"PERCEPTION",title:"Sensor Fusion for SLAM",
      summary:"Teaching machines to utilize multiple sensors to understand complex environments.",
      image:"assets/images/LiDARMapping.png",
      //topics:["3D Vision","Scene Understanding","Multimodal Perception"],
      //topics:["Lidar-Imu odometry","SLAM","Sensor Tracking","LiDAR Place recognition"],
      topics: [
      {
        title: "LiDAR-Inertial Odometry",
        description: "Fusing LiDAR and IMU measurements for robust motion estimation.",
        image: "assets/images/lio_tracking.png"
      },
      {
        title: "SLAM",
        description: "Simultaneous Localization and Mapping",
        image: "assets/images/research/LiDARMapping.png"
      },
      {
        title: "LiDAR Place Recognition",
        description: "Search for the location that lidar data has been captured",
        image: "assets/images/reloc.png"
      }
    ],
      projects:["Multiple Map Fusion for heterogeneous LiDARs","Localization using existing maps","Vision-Depth Fusion for mapping"]},
    {slug:"visualSLAM",num:"02",
      eyebrow:"PERCEPTION",
      title:"Visual Lifelong Mapping",
      summary:"Using visual information to maintain a map of changing environment and to localize the robot in complex environments.",
      image:"assets/images/GS_loc.png",
      //topics:["3D Vision","Scene Understanding","Multimodal Perception"],
      //topics:["Gaussian splatting SLAM","Map-only localization/tracking","Semantic mapping","Lifelong mapping"],
      topics: [
      {
        title: "Visual SLAM",
        description: "Using visual information for environmental mapping.",
        image: "assets/images/vggt_loc.jpg"
      },
      {
        title: "Incremental Feature Embedding",
        description: "For localization or map merging, descriptive features are embedded online incrementally to enable 3D-2D matching",
        image: "assets/images/GS_loc.png"
      },
      {
        title: "Semantic Mapping",
        description: "Adding semantic information on a 3D map to utilize it for furture applications",
        image: "assets/images/semantic_map.jpg"
      }
      ],
      projects:["Incremental 3D Feature Embedding for Gaussian splatting map","VGGT-like feature based semantic mapping","Updating map semantics online for lifelong mapping"]},
    {slug:"vln",num:"03",
      eyebrow:"LEARNING",
      title:"Planning/Vision Language Navigation",
      summary:"Navigating unknown space following human instructions.",
      image:"assets/images/vln.jpg",
     topics: [
      {
        title: "Task planning for heterogeneous robots",
        description: "Decomposing complex tasks into subtasks and assigning them to capable robots.",
        image: "assets/images/strapllm.jpg"
      },
      {
        title: "Vision Language Navigation",
        description: "Making robots understand human instructions and navigate unknown space based on them.",
        image: "assets/images/vln.jpg"
      }
      ],
      projects:["Developing delivery robot systems","Research on an intelligent humanoid"]
      },
    {slug:"agenticAI",num:"04",
      eyebrow:"ACTION",
      title:"Explainable/Agentic AI",
      summary:"Understanding the inside of VLA/VLN and making an orchestrator controlling multiple AI agents.",
      image:"assets/images/explainableAI.png",
      //topics:["Explanation of VLA","Agentic AI"],
       topics: [
      {
        title: "Explanation of VLA",
        description: "Investigating the internal structure and the mechanistic interpretability of VLA/VLN models.",
        //image: "assets/images/vggt_loc.jpg"
      },
      {
        title: "Agentic AI for action generation",
        description: "Utilizing many agents to achieve high-level planning and monitoring.",
      //  image: "assets/images/GS_loc.png"
      }
      ]
    //  projects:["Learning-based planning and control","Interactive agents in dynamic environments","Vision-guided embodied intelligence"]
    }
  ],

  // Optional profile fields: experience, awards, projects, website, github, cv.
  // If any of these are omitted or set to [], that section/button is hidden automatically.
  people: [
    {
      slug:"js-kim",
      name:"Jun-Sik Kim, Ph.D",
      role:"Principal Investigator",
      photo:"assets/images/people/jskim1.jpg",
      bio:"Jun-Sik Kim leads the lab's research in computer vision, machine learning, and intelligent systems.",
      interests:["Computer Vision","Sensor Fusion", "Machine Learning","Embodied Intelligence"],
      experience:["Principal Research Scientist in KIST","Project Scientist in RI,CMU"],
      education:["Ph.D. in Electrical Engineering, KAIST","M.S. in Electrical Engineering, KAIST"],
      email:"junsik.kim@kist.re.kr",
      scholar:"https://scholar.google.com/citations?user=VhJn8rYAAAAJ",
    },
    {
      slug:"k_min",
      name:"Kwandon Min",
      role:"Researcher",
      photo:"assets/images/people/k_min.jpg",
      //bio:"J. Lee works on visual perception, 3D reconstruction, and multimodal reasoning.",
      interests:["LiDAR Based SLAM","Explainable VLA"],
      education:["M.S. in EE, Inha University"],
      //email:"jlee@example.edu",
      //scholar:"https://scholar.google.com/",
      //publications:["Learning Structured Representations for Open-World Visual Reasoning"]
    },
    {
      slug:"j-park",
      name:"Jaebum Park",
      role:"Researcher",
      photo:"assets/images/people/j_park.jpg",
      //bio:"M. Park studies robust learning and generative models for reliable perception.",
      interests:["VLN","Long-horizon Task planning"],
      education:["M.S. in EE, Korea University"],
      //email:"mpark@example.edu",
      //scholar:"https://scholar.google.com/",
      //publications:["Robust Perception under Distribution Shift"]
    },
    {
      slug:"w-cho",
      name:"Wonyoung Cho",
      role:"Researcher",
      photo:"assets/images/people/w_cho.jpg",
      //bio:"S. Choi researches planning, robotics, and vision-guided embodied intelligence.",
      interests:["Visual SLAM","Semantic Mapping"],
      education:["M.S. in Computer Science, Hanyang University"],
      //email:"schoi@example.edu",
      //scholar:"https://scholar.google.com/",
      //publications:["Planning with Visual World Models"]
    },
     {
      slug:"j-kwak",
      name:"Jiwon Kwak",
      role:"Undergrad Student",
      photo:"assets/images/people/J_kwak.jpg",
      ///bio:"S. Choi researches planning, robotics, and vision-guided embodied intelligence.",
      interests:["Planning","VLN"],
      education:["in pursuing a B.S. in SNUT"],
      //email:"schoi@example.edu",
      //scholar:"https://scholar.google.com/",
      //publications:["Planning with Visual World Models"]
    },
        {
      slug:"s-kim",
      name:"Seojin Kim",
      role:"Undergrad Student",
      photo:"assets/images/people/s-choi.svg",
      ///bio:"S. Choi researches planning, robotics, and vision-guided embodied intelligence.",
      interests:["Semantic SLAM", "Lifelong mapping"],
      education:["in pursuing a B.S. in Konkuk Univ."],
      //email:"schoi@example.edu",
      //scholar:"https://scholar.google.com/",
      //publications:["Planning with Visual World Models"]
    }
  ],

  publications: [
    {year:"2026",title:"STRAP-LLM: structured task allocation and planning for heterogeneous robots using large language models.",venue:"Intell. Serv. Robotics"},
    {year:"2024",title:"ReLoc-Aligner : Orientation-aware Scene Descriptor for Re-Localization within a 3D Point Cloud Map",venue:"IROS"},
    {year:"2023",title:"Flexible Control and Task Manager System for Non-Contact Delivery Robots in COVID-19 Isolated Facilities",venue:"ROMAN"}
  ],

  news: [
   // {date:"2026.03",title:"Our lab is now open for new research collaborations."},
   // {date:"2026.01",title:"New projects in vision, learning, and embodied intelligence."}
  ]
};
