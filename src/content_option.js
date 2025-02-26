import { FaReact, FaNodeJs, FaPhp, FaGithub } from "react-icons/fa";
import { SiFlutter, SiMongodb } from "react-icons/si";
const logotext = "Komi Dev";
const meta = {
    title: "Parfait kom",
    description: "Passionné par le développement web Parfait kom komiDEV komi et mobile",
};

const introdata = {
    title: "Hi, je suis Parfait Kom. Mais tu peux m'appeler Komi.😀",
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
        jobtitle: "Développeur backend",
        where: "YIEL",
        date: "OCT 2024 - Maintenant",
        link: "https://yielgroup.com/",

    },
    {
        jobtitle: "Développeur Mobile Flutter (Freelance)",
        where: "MENOSIE",
        date: "DEC 2024 - Jan 2025",
        link: "https://menosi.net"

    },
    {
        jobtitle: "Développeur Mobile Flutter (CDD)",
        where: "TheProgrammer",
        date: " SEP 2024 - JAN 2025",
        link: "https://theprogrammeragency.com/en"
    },
    {
        jobtitle: "Développeur web & Mobile",
        where: "TOGETTECH",
        date: " OCT 2023 - Maintenant",
        link: "https://cm.linkedin.com/company/togettech-inc"
    },
    {
        jobtitle: "Stagiaire Développeur web",
        where: "TOGETTECH",
        date: "AOUT 2023 - OCT 2023",
        link: "https://cm.linkedin.com/company/togettech-inc"
    },
];

const skills = [
    {
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
        description: "Un application web de gestion des Snacks bar : Stock , vente , ristourne, avarie,Impot",
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
        description: "Une appliction web ecommerce specialisée dans la vente des produits vivrié frais ",
        link: "https://cosmopharmalindustry.com/suitesale/app/Pages/Login.php",
    },
    {
        title:"Expend Tracker",
        img: "/tracker.jpeg",
        description: "Une application mobile de gestion des depense",
        link: "https://proejet-firebase.web.app/welcome",
    },
    {
        title:"Flutter Starter",
        img: "/starter.png",
        description: "Un package qui permet de debuter rapidement un projet flutter",
        link: "https://github.com/KOMI18/flutter_starter/tree/master",
    },
    {
        title:"Mints",
        img: "/mints.png",
        description: "Une plateForme qui apporte de l'eau au population des zones défavorisées",
        link: "https://mints-beryl.vercel.app/",
    },
    {
        title:"Mon Portfolio",
        img: "/folio.png",
        description: "Mon site web personnel pour présenter mes compétences et réalisations",
        link: "https://parfaitkom.vercel.app/",
    },
];

const contactConfig = {
    YOUR_EMAIL: "tehemparfait@gmail.com",
    YOUR_FONE: "+237 695511268",
    description: "Que vous ayez une question, un projet en tête, ou simplement envie de discuter de collaboration, n'hésitez pas à me contacter. Je suis toujours ouvert aux nouvelles opportunités et prêt à vous accompagner dans vos projets technologiques. Remplissez le formulaire ou contactez-moi directement par email, et je reviendrai vers vous dans les plus brefs délais ! ",
    YOUR_SERVICE_ID: "service_evh08ne",
    YOUR_TEMPLATE_ID: "template_2k65re8",
    YOUR_USER_ID: "vzeV7F7Fu9dughDyi",
};
const event = [
    {   
        id:1,
        title:"Yaounde City Hack",
        img: "cityh3.jpeg",
        link:"https://www.linkedin.com/posts/citscmm_yaoundeinnovationweek-doualainnovationweek-ugcPost-7217860445540413440-DZ61?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEGh9X0BOEU8sF22OqiGDBxyE9fAbkCQVes",
        description: "Hackathon intense de 48h organise par Montain Hub",
        detail:"J’ai eu l’occasion de participer au CITY HACK Yaoundé sous le thème :«Pont de l'Innovation : Accélération des Talents Technologiques et Externalisation au Cameroun»Cet événement s'est tenu sous la forme d’un hackathon de 48 heures à l’hôtel Mont Febe.Ça a vraiment été une expérience particulière pour moi. J’ai beaucoup appris et j’ai rencontré des personnes passionnées par le monde de la tech.J’encourage vraiment tout le monde à participer à ce type d’événements pour pouvoir stimuler ses compétences et développer l’esprit d’équipe.Je remercie grandement CITSCM pour l’organisation et TOGETTECH pour l’opportunité.",
        images:[
            'cityh2.jpeg',
            'cityh1.jpeg',
        ]
    },
    {   
        id:2,
        title:"Cameroon International Tech Summit (CITS)",
        img: "nh1.jpeg",
        link:"https://www.linkedin.com/posts/parfait-kom-a25925268_cits24-challenge-hackathon-activity-7249161619618902016-U1aV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEGh9X0BOEU8sF22OqiGDBxyE9fAbkCQVes",
        description: "Hackathon intense de 72h",
        detail:"Du 25 au 28 octobre dernier, nous avons participé à un hackathon intense de 72 heures sur le thème : “E-gouvernance : Utilisation limitée des technologies dans la promotion de l’environnement durable et des ressources naturelles”. Comme dans l’essence même d’un hackathon, chaque équipe avait un thème “surprise”, et l’objectif après les 72 heures était de développer un MVP : Minimum Valuable Product (oui, je n’ai pas fait d’erreur, j’ai bien dit Minimum VALUABLE Product), car le but n’est pas seulement de créer une solution innovante, mais de créer une solution qui a de la valeur et qui résout un problème réel.Sachant cela, notre objectif principal était de trouver une solution rentable à un problème réel lié à la E-gouvernance, plus précisément dans le domaine de l’environnement et des ressources naturelles. Pour cela, nous nous sommes basés sur les ODD (Objectifs de Développement Durable) et le SND30.Petite anecdote : Nous avons pratiquement passé 35 heures avec une solution, mais aucun problème à résoudre 😂.Après plusieurs heures de réflexion et de remise en question, nous avons développé une solution visant à rendre accessible, via des ONG, l’eau potable et l’énergie aux populations des zones rurales grâce à de l’imagerie satellite. Le concept est simple 👍 :On sélectionne un cours d’eau sur la carte et, grâce à des modèles mathématiques, nous fournissons des informations sur ce cours d’eau :Peut-on creuser un forage dans cette zone ?Ce cours d’eau est-il éligible pour y construire un mini barrage électrique ? Malgré tous nos efforts, mon équipe et moi n’avons pas eu la chance et la bonne formule pour obtenir le “saint graal”. Ce fut une expérience inoubliable, car au-delà d’une compétition, j’ai rencontré des personnes géniales, passionnées par la tech, et aussi beaucoup de mentors très inspirants.Pour cela, je tiens à remercier le Magic Man Ayuk Etta toute son équipe de MountainHub tous les mentors et les sponsors qui ont organisé le plus grand événement tech du Cameroun.On se vois au CITS25 🦾",
        images:[
            'nh2.jpeg',
            'nh3.jpeg',
            'nh4.jpeg',

        ]
    },
    {   
        id:2,
        title:"ZTF Excellence Awards 2024",
        img: "ztf.jpeg",
        link:"https://www.linkedin.com/posts/parfait-kom-a25925268_cits24-challenge-hackathon-activity-7249161619618902016-U1aV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEGh9X0BOEU8sF22OqiGDBxyE9fAbkCQVes",
        description: "Prix ZTF awards pour les Etudiants entrepreneurs",
        detail:"En collaboration avec deux camarades, nous avons développé une application mobile destinée à aider les élèves des lycées et collèges du Cameroun à se préparer aux examens. Présentée au prix de l'excellence ZTF à Yaoundé, cette application permet aux étudiants d'accéder facilement aux anciennes épreuves d'examen, qu'elles soient nationales ou provenant des grands collèges du pays. Grâce à des fonctionnalités telles que le filtrage par année ou matière, le téléchargement des épreuves et des ressources comme les corrigés, elle offre un outil pratique pour la révision. Développée avec [technologies utilisées, par exemple Flutter], l'application vise à améliorer la préparation aux examens en fournissant aux élèves un accès direct à des ressources essentielles pour réussir.",
        images:[]
    },
]
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
    event,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};