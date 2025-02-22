import { FaReact, FaNodeJs, FaPhp, FaGithub } from "react-icons/fa";
import { SiFlutter, SiMongodb } from "react-icons/si";
const logotext = "Parfait Kom";
const meta = {
    title: "Parfait kom",
    description: "I’m John Doe data scientist _ Full stack devloper,currently working in Berlin",
};

const introdata = {
    title: "Je suis Tehem kom parfait",
    animated: {
        first: " J'aime Coder, apprendre et évoluer",
        second: "Développeur Web & Mobile passionné",
        third: "Je code en Flutter, React.js et Node.js",
        four:"Toujours en quête de nouveaux défis",
        last:"Simplicité et efficacité avant tout"
    },
    description: "Passionné par le développement web et mobile, je crée des solutions performantes et intuitives. Toujours en quête d’apprentissage et de nouveaux défis !",
    your_img_url: "/komi.jpeg",
};

const dataabout = {
    title: "Un peu sur moi",
    aboutme: "Je suis un développeur passionné, toujours à la recherche de nouvelles technologies et de défis intéressants. Avec une expertise en Flutter, React, Node.js, et d'autres outils modernes, je suis capable de créer des applications web performantes et intuitives. Mon parcours m'a permis d'acquérir une solide expérience dans le développement de solutions full-stack, tout en gardant un œil attentif sur la qualité du code et l'optimisation des performances.Je suis également un grand défenseur de l'expérience utilisateur, cherchant toujours à créer des interfaces modernes, simples à utiliser et efficaces. En dehors du code, j'aime apprendre,faire du basket ball et collaborer avec d'autres professionnels pour créer des produits qui ont un réel impact.",
};
const worktimeline = [
    {
        jobtitle: "Stagiaire Développeur web",
        where: "TOGETTECH",
        date: "AOUT 2023 - OCT 2023",
    },
    {
        jobtitle: "Développeur web & Mobile",
        where: "TOGETTECH",
        date: " OCT 2023 - Maintenant",
    },
    {
        jobtitle: "Développeur Mobile Flutter",
        where: "TheProgrammer",
        date: " SEP 2024 - JAN 2025",
    },
    {
        jobtitle: "Développeur Mobile Flutter",
        where: "MENOSIE",
        date: "DEC 2024 - Maintenant",
    },
];

const skills = [{
        name: "Flutter",
        value: 100,
        icon :  <SiFlutter style={{ color: "#02569B" }} />

    },
    {
        name: "Node.Js",
        value: 100,
        icon :  <FaNodeJs style={{ color: "#339933" }} />
    },
    {
        name: "React.JS",
        value: 100,
        icon : <FaReact style={{ color: "#61DAFB" }} /> 
    },
    {
        name: "Natif Php",
        value: 100,
        icon : <FaPhp style={{ color: "#777BB4" }} />
    },
    {
        name: "Git , GitHUb",
        value: 100,
        icon :  <FaGithub style={{ color: "#333" }} /> 


    },
    {
        name: "MongoDb",
        value: 100, 
        icon :  <SiMongodb style={{ color: "#47A248" }} />
    },
];

const services = [{
    title: "Création d'application mobile",
    description: "Je conçois des applications mobiles fluides et performantes, adaptées à vos besoins et offrant une expérience utilisateur optimale. Avec Flutter , vos idées prennent vie sur iOS et Android.",
},
{
    title: "Création de sites web",
    description: "Je crée des sites web dynamiques et réactifs, en utilisant les dernières tendances du design et des technologies comme React, Node.js et Bootstrap. Je m'assure que chaque projet est intuitif, rapide et sécurisé.",
},
{
    title: "Développement d'applications web",
    description: "Je développe des applications web sur mesure, performantes et évolutives, qui répondent aux besoins spécifiques de votre entreprise. Grâce à des technologies comme React, Express, et Sequelize, je crée des solutions robustes et scalables.",
},
];


const dataportfolio = [
    {   
        title:"Tecno admin",
        img: "tecnoadmin.png",
        description: "Une Application de gestion des vente et des stock ",
        link: "https://incredible-concha-334bb3.netlify.app/",
    },
    {
        title:"Cosmopharmal industry",
        img: "/pharmal.png",
        description: "Un site web d'achat de concombre de mer",
        link: "https://cosmopharmalindustry.com/",
    },
    {
        title:"TogetSuite Bar",
        img: "/bar.png",
        description: "Un application web de gestion des Snack bar : Stock , vente , ristourne, avarie,Impot",
        link: "https://cosmopharmalindustry.com/bragherstudio.suite-ba/pages/user_login.php",
    },
    {
        title:"Silia",
        img: "https://picsum.photos/400/600/?grayscale",
        description: "Une application mobile Fintech de transfer d'argent .",
        link: "#",
    },
    {
        title:"SuiteSale",
        img: "/suitesale.png",
        description: "Une appliction web ecommerce specialise dans la vente des produit vivrie frais ",
        link: "https://cosmopharmalindustry.com/suitesale/app/Pages/Login.php",
    },
    {
        title:"Expend Tracker",
        img: "/tracker.jpeg",
        description: "Une application mobile de gestion des depense",
        link: "https://proejet-firebase.web.app/welcome",
    },
];

const contactConfig = {
    YOUR_EMAIL: "tehemparfait@gmail.com",
    YOUR_FONE: "+237 695511268",
    description: "Que vous ayez une question, un projet en tête, ou simplement envie de discuter de collaboration, n'hésitez pas à me contacter. Je suis toujours ouvert aux nouvelles opportunités et prêt à vous accompagner dans vos projets technologiques. Remplissez le formulaire ou contactez-moi directement par email, et je reviendrai vers vous dans les plus brefs délais ! ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_evh08ne",
    YOUR_TEMPLATE_ID: "template_2k65re8",
    YOUR_USER_ID: "vzeV7F7Fu9dughDyi",
};

const socialprofils = {
    github: "https://github.com/KOMI18",
    facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/parfait-kom-a25925268/",
    twitter: "https://x.com/ParfaitKom",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};