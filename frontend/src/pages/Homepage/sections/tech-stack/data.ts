import { FaServer } from 'react-icons/fa'; // Assuming you use react-icons
import { FaBrain } from 'react-icons/fa'; // Another example icon

const INFRA_AND_DEV_OPS_FRAMEWORKS = [
      {
            name: "Ansible",
            logo_url: "https://www.vectorlogo.zone/logos/ansible/ansible-icon.svg",
      },
      {
            name: "Terraform",
            logo_url: "https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg",
            section_title: "ML & AI"
      },
      {
            name: "Nginx",
            logo_url: "https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg",
            section_title: "ML & AI"
      },
      {
            name: "Docker",
            logo_url: "https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg",
            section_title: "ML & AI"
      },
      {
            name: "AWS",
            logo_url: "https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg",
            section_title: "ML & AI"
      },
]
const ML_AND_AI_FRAMEWORKS = [
      {
            name: "TensorFlow",
            logo_url: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg"
      },
      {
            name: "Scikit-learn",
            logo_url: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg"
      },
]
const FULL_STACK_FRAMEWORKS = [
      {
            name: "FastAPI",
            logo_url: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg"
      },
      {
            name: "MySQL",
            logo_url: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg"
      },
      {
            name: "Redis",
            logo_url: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg"
      },
      {
            name: "MongoDB",
            logo_url: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg"
      },
      {
            name: "React",
            logo_url: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg"
      },
]

export const TECH_STACK_SECTIONS = [
      {
            title: "Infrastructure & DevOps",
            icon: FaServer,
            elements: INFRA_AND_DEV_OPS_FRAMEWORKS
        },
        {
            title: "ML & AI Frameworks",
            icon: FaBrain,
            elements: ML_AND_AI_FRAMEWORKS
        },
        {
            title: "Full Stack",
            icon: FaBrain,
            elements: FULL_STACK_FRAMEWORKS
        },
    ];
    