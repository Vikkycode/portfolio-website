import alvc from '../asses/alvc-bg.png'
import kcca from '../../public/images/kcca.png'
import hulu from '../asses/hulu-clone.png'
import note from '../../public/images/note.png'
import netflix from '../../public/images/Netflix 6 signin.png'
import js from '../asses/icons/javascript.svg'
import html from '../asses/icons/html.svg'
import css from '../asses/icons/css.svg'
import ts from '../asses/icons/typescript.svg'
import rjs from '../asses/icons/reactjs.svg'
import nextjs from '../asses/icons/nextjs.svg'
import git from '../asses/icons/git.svg'
import npm from '../asses/icons/npm.svg'
import tidi from '../asses/tidi.png'
// import zararc from '../asses/zararc.png'


export const navlinks = [
    {
        path:'/',
        name:'home',
    },
    {
        path:'#about',
        name:'about',
    },
    {
        path:'#skill',
        name:'skill',
    },
    {
        path:'#portfolio',
        name:'portfolio',
    },
    {
        path:'#experience',
        name:'experience',
    },
    {
        path:'#contact',
        name:'contact',
    },

]

export const aboutMeData = [
    {
        headline:'about me:',
        subheadline:`Hello there! I'm Victor Oricha, an accessible software frontend engineer with a passion for breaking barriers in the digital realm. Despite being deaf, my commitment to excellence resonates in every line of code`,
    },
    {
        headline:'background:',
        subheadline:`I am a passionate frontend developer with a unique perspective, navigating the coding landscape with a vision for inclusivity and accessibility.`
    },
    // {
    //     headline:'technical proficiency:',
    //     subheadline:`GitHub: Witness my coding prowess and commitment to excellence through meticulously crafted assignments and projects.`
    // },
    {
        headline:'Passion & Mission',
        subheadline:`Driven by a fervor for building accessible and inclusive user-friendly applications, I am on a mission to redefine user experiences for everyone. My dedication extends to ensuring accessibility for individuals with disabilities, championing the cause for deaf people, those with visual impairments, and beyond.`
    }
]

export const communicationSkills=[
    {
        id:'1',
        title:'ASL Sign Language Interpreter',
        subtitle:'For engaging interviews and video conferences, ensuring seamless communication.'
    },
    {
        id:'2',
        title:'Written Communication',
        subtitle:'Adept at conveying ideas and thoughts through the power of the written word'
    },
    {
        id:'3',
        title:'Visual Aids',
        subtitle:'Utilizing visual aids for impactful presentations, making every concept crystal clear.'
    },
    {
        id:'4',
        title:'Slack & Email',
        subtitle:'Quick and effective communication channels for feedback, queries, and frontend development/UI/UX design discussions'
    },
    {
        id:'5',
        title:'Zoom Meetings',
        subtitle:'Collaborative sessions are a breeze with Zoom, fostering teamwork and innovation'
    },
]

export const skills=[
    {
        icon:html,
        name:'HTML',
    },
    {
        icon:css,
        name:'CSS',
    },
    {
        icon:js,
        name:'JavaScript',
    },
    {
        icon:rjs,
        name:'ReactJs',
    },
    {
        icon:nextjs,
        name:'NextJs',
    },
    {
        icon:git,
        name:'git',
    },
    {
        icon:ts,
        name:'TailwindCSS',
    },
    {
        icon:npm,
        name:'npm',
    },
]
export const projects = [
    
    {
        id:1,
        image:tidi,
        title:'Tech Inclusion for the Deaf Initiative ',
        description:'Developed a Deaf-led website Initiative using Nextjs, TailwindCSS, Animated AOS,etc',
        githhubLink:'https://github.com/Vikkycode/TIDI',
        demoLink:'https://techinclusiondeaf.org'
    },
    {
        id:2,
        image:kcca,
        title:'Kids Club Code Africa ',
        description:'Improving user experience of the existing web app using Nextjs,TailwindCSS, Animated AOS',
        githhubLink:'https://github.com/bluealgorithm/newkcca',
        demoLink:'https://new.kidcodeclubafrica.org'
    },
    {
        id:3,
        image:alvc,
        title:'AgileLean Landing pages',
        description:'building a landing page web app using Reactjs, TailwindCSS',
        githhubLink:'https://github.com/Vikkycode/AgileLean',
        demoLink:'https://alvc-fe.vercel.app'
    },
    // {
    //     id:4,
    //     image:netflix,
    //     title:'Netflix Clone',
    //     description:'Building a netflix clone full stack web app using Reactjs,CSS, FireBase with TMDB API',
    //     githhubLink:'https://github.com/Vikkycode/Netflix-clone',
    //     demoLink:'http://netflix-clone8.netlify.app'
    // },
    {
        id:4,
        image:note,
        title:'CRUD Note app',
        description:'developing CRUD note web app using Reactjs, tailwindCSS and adding Search filter and dark mode',
        githhubLink:'https://github.com/Vikkycode/Notepad',
        demoLink:'https://notepad-vikkycode.vercel.app'
    },
    // {
    //     id:6,
    //     image:hulu,
    //     title:'Hulu Clone',
    //     description:'building a hulu clone web app using Reactjs,CSS and TMDB API',
    //     githhubLink:'https://github.com/Vikkycode/Hulu-clone',
    //     demoLink:'https://hulu-clone-beta-two.vercel.app'
    // },
]

export const experiences =[
    {
        id:1,
        role:'Python Developer and Facilitator for Deaf in Tech',
        company:'Data Lead AFrica',
        year:'November 2024 - Present',
        description:'I am a passionate inclusive and accessible tech instructor who adapts complex tech concepts into simple terms for deaf community for the better understanding and mentor them on their capstone project.',
        skills:[
            {
                title:'Panda'
            },
            {
                title:'Numpy'
            },
            {
                title:'Streamlit'
            },
            {
                title:'matploblibi/seaborn'
            },
            {
                title:'flask'
            },
            {
                title:'Django'
            },
        ],
        location:'Abuja,Nigeria',
        link:'https://deafintech.org'
    },
    {
        id:2,
        role:'Frontend Developer Intern',
        company:'Blue Algorithm Limited Technology',
        year:'May 2023 - April 2024',
        description:'While my internship as a NYSC Corp, I learned Nextjs and TailwindCSS from my senior frontend engineer, i was assigned an assignment to build law portfolio web app in order to improve my skill development',
        skills:[
            {
                title:'Nextjs'
            },
            {
                title:'Tailwindcss'
            },
            {
                title:'TypeScript'
            }
        ],
        location:'Jos,Nigeria',
        link:'https://www.bluealgorithmtechnologies.com'
    },
    {
        id:3,
        role:'Frontend Development Facilitator',
        company:'Deaf Technology Foundation',
        year:'March 2023 - April 2024',
        description:'As a Deaf facilitator, I am responsible for facilitating Deaf community on Frontend development course. As a role model, I motivate, advise and encourage deaf children to pursue their interests in Computer Science and help them asking making a right decision before picking up tech skill that pique their interests.',
        skills:[
            {
                title:'HTML'
            },
            {
                title:'CSS'
            },
            {
                title:'JavaScript'
            }
        ],
        location:'Jos,Nigeria',
        link:'https://deaftechfoundation.org'
    },
]