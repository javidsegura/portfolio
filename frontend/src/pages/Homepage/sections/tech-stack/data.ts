import { FaServer } from 'react-icons/fa'; // Assuming you use react-icons
import { FaBrain } from 'react-icons/fa'; // Another example icon
import { MdOutlineWeb } from "react-icons/md";
import { FaGear } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa6";




const INFRA_AND_DEV_OPS_FRAMEWORKS = [
      {
            name: "Linux",
            logo_url: "https://www.vectorlogo.zone/logos/linux/linux-icon.svg",
      },
      {
            name: "Ansible",
            logo_url: "https://www.vectorlogo.zone/logos/ansible/ansible-icon.svg",
      },
      {
            name: "Terraform",
            logo_url: "https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg",
      },
      {
            name: "Docker",
            logo_url: "https://www.vectorlogo.zone/logos/docker/docker-tile.svg     ",
      },
      {
            name: "AWS",
            logo_url: "https://structurit.es/wp-content/uploads/2025/03/logo-aws.png",
      },
      {
            name: "Grafana",
            logo_url: "https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg",
      },
]
const ML_AND_AI_FRAMEWORKS = [
      {
            name: "Python",
            logo_url: "https://www.vectorlogo.zone/logos/python/python-icon.svg"
      },
      {
            name: "MySQL",
            logo_url: "https://www.vectorlogo.zone/logos/mysql/mysql-official.svg"
      },
      {
            name: "Scikit-learn",
            logo_url: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg"
      },
      {
            name: "Pandas",
            logo_url: "https://images.seeklogo.com/logo-png/48/2/pandas-icon-logo-png_seeklogo-483545.png"
      },
      {
            name: "Langraph",
            logo_url: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/langgraph-color.png"
      },

]
const FULL_STACK_FRAMEWORKS = [
      {
            name: "Typescript",
            logo_url: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg"
      },
      {
            name: "FastAPI",
            logo_url: "https://cdn.worldvectorlogo.com/logos/fastapi.svg"
      },
      {
            name: "React",
            logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png"
      },
      {
            name: "Firebase",
            logo_url: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
      },
      {
            name: "Pytest",
            logo_url: "https://www.vectorlogo.zone/logos/pytest/pytest-icon.svg"
      },
      {
            name: "RabbitMQ",
            logo_url: "https://www.vectorlogo.zone/logos/rabbitmq/rabbitmq-icon.svg"
      },
]
const HPC_FRAMEWORKS = [
      {
            name: "C",
            logo_url: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png"
      },
      {
            name: "CUDA",
            logo_url: "https://www.svgrepo.com/show/373541/cuda.svg"
      },
      {
            name: "OpenMP",
            logo_url: "https://upload.wikimedia.org/wikipedia/commons/4/40/OpenMP_logo.svg"
      },
      {
            name: "MPI",
            logo_url: "https://avatars.githubusercontent.com/u/14836989?s=200&v=4"
      },
      {
            name: "Slurm",
            logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Slurm_logo.svg/1200px-Slurm_logo.svg.png"
      },
      {
            name: "CMake",
            logo_url: "https://www.vectorlogo.zone/logos/cmake/cmake-icon.svg"
      },
]
const BIG_DATA_FRAMEWORKS = [
      {
            name: "Apache Spark",
            logo_url: "https://www.vectorlogo.zone/logos/apache_spark/apache_spark-icon.svg"
      },
      {
            name: "Apache Hadoop",
            logo_url: "https://www.vectorlogo.zone/logos/apache_hadoop/apache_hadoop-icon.svg"
      },
      {
            name: "Apache Kafka",
            logo_url: "https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg"
      },
      {
            name: "BigQuery",
            logo_url: "https://www.vectorlogo.zone/logos/google_bigquery/google_bigquery-icon.svg"
      },
]

export const TECH_STACK_SECTIONS = [
      {
            title: "Infrastructure & DevOps",
            icon: FaGear,
            elements: INFRA_AND_DEV_OPS_FRAMEWORKS
        },
        {
            title: "ML & AI Frameworks",
            icon: FaBrain,
            elements: ML_AND_AI_FRAMEWORKS
        },
        {
            title: "Full Stack",
            icon: MdOutlineWeb      ,
            elements: FULL_STACK_FRAMEWORKS
        },
        {
            title: "HPC",
            icon: FaServer,
            elements: HPC_FRAMEWORKS
        },
        {
            title: "Big Data",
            icon: FaDatabase,
            elements: BIG_DATA_FRAMEWORKS
        },
    ];
    