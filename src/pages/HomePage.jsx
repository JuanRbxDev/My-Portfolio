import '../styles/HomePageStyle.css'

import { useDeveloperText } from "../hooks/developer";
import ObtenerHora from "../hooks/date"; // sin llaves porque es export default

import Iam from '../assets/img/img_login.png'
import img1 from '../assets/img/img1.jpeg'
import shape from '../assets/img/shape.png'


function HomePage() {

    const developerText = useDeveloperText(["Frontend", "Backend", "Android", "iOS"], 100, 1000);

    return (
        <>

            <section id='banner' className='secBanner'>


                <h1 className='dev'>Developer</h1>

                <section className='banner'>

                    <div className='cardIam'>
                        <div>
                            <h3 className='hello'>Hello, I am</h3>
                            <h1 className="myName">Juan</h1>
                            <h3 className='profetion'>{developerText}</h3>
                            <img className='flag' src="https://cdn.pixabay.com/animation/2022/09/06/03/13/03-13-28-576_512.gif" alt="" />
                        </div>

                    </div>

                    <div className="divlow">
                        <section>
                            <div>
                                <h3>Year</h3>
                                <p>2025</p>
                            </div>
                            <div>
                                <h3>Hour</h3>
                                <ObtenerHora /> {/* Aquí se renderiza la hora */}
                            </div>
                        </section>
                    </div>

                </section>

                <img className='imgJuanRbDev' src={Iam} alt='' />

            </section>





            <section id='aboutMe' className='secAboutMe'>

                <div className='rectanguleBlack1'></div>
                <div className='rectanguleBlack2'>
                    <h2>Sobre mí</h2>
                </div>

                <div className="cardAbout">

                    <div className='cardAboutImage'>
                        <img className='cardAboutImage02' src={img1} alt='' />
                    </div>
                    <div className='aboutMeText'>
                        <p>Soy un desarrollador apasionado por crear soluciones innovadoras. Me especializo en Frontend, Backend, y aplicaciones móviles. Mi objetivo es crear experiencias únicas e impactantes.</p>
                    </div>

                </div>

            </section>







            <section id="skills" className="secSkills">

                <div className="anguleBorder1">
                    <h2 className="skillsTitle">Skills</h2>
                </div>


                <section>

                    <div className='contentcube'>
                        <div className="anguleBorder2"></div>
                    </div>





                    <div className="skillsList">
                        <div className="skillItem">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript" />
                            <h3>JavaScript</h3>
                        </div>
                        <div className="skillItem">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" />
                            <h3>React</h3>
                        </div>
                        <div className="skillItem">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js" />
                            <h3>Node.js</h3>
                        </div>
                        <div className="skillItem">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" alt="CSS" />
                            <h3>CSS</h3>
                        </div>
                        <div className="skillItem">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/4/47/React_Native_Logo.png" alt="React Native" />
                            <h3>React Native</h3>
                        </div>
                        <div className="skillItem">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png" alt="C#" />
                            <h3>C#</h3>
                        </div>
                        <div className="skillItem">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg" alt="C" />
                            <h3>C</h3>
                        </div>
                        <div className="skillItem">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg" alt="Ruby" />
                            <h3>Ruby</h3>
                        </div>
                        <div className="skillItem">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png" alt="Flutter" />
                            <h3>Flutter</h3>
                        </div>
                        <div className="skillItem">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind CSS" />
                            <h3>Tailwind</h3>
                        </div>
                        <div className="skillItem">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg" alt="SASS" />
                            <h3>SASS</h3>
                        </div>
                        <div className="skillItem">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" alt="Bootstrap" />
                            <h3>Bootstrap</h3>
                        </div>
                        <div className="skillItem">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg" alt="TypeScript" />
                            <h3>TypeScript</h3>
                        </div>
                        <div className="skillItem">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Java-logo.svg" alt="Java" />
                            <h3>Java</h3>
                        </div>
                        <div className="skillItem">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg" alt="Docker" />
                            <h3>Docker</h3>
                        </div>
                        <div className="skillItem">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg" alt="Git" />
                            <h3>Git</h3>
                        </div>
                        <div className="skillItem">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" />
                            <h3>GitHub</h3>
                        </div>
                        <div className="skillItem">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/Firebase_Logo.svg" alt="Firebase" />
                            <h3>Firebase</h3>
                        </div>
                        <div className="skillItem">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" alt="PHP" />
                            <h3>PHP</h3>
                        </div>
                        <div className="skillItem">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" alt="PostgreSQL" />
                            <h3>PostgreSQL</h3>
                        </div>
                    </div>







                </section>







            </section>








            <section id="projects" class="secProjects">
                <div class="rectanguleBlack1"></div>
                <div class="rectanguleBlack2">
                    <h2>Mis Proyectos</h2>
                </div>

                
                <div class="projectsList">
                    <div class="projectCard">
                        <div class="cardProjectImage">
                            <img src="assets/img/proyecto1.jpg" alt="Proyecto 1" />
                        </div>
                        <div class="cardProjectInfo">
                            <h3>Proyecto Web</h3>
                            <p>Una breve descripción del proyecto web que he desarrollado, con sus características y objetivos principales.</p>
                            <button class="viewDetails">Ver más</button>
                        </div>
                    </div>
                    <div class="projectCard">
                        <div class="cardProjectImage">
                            <img src="assets/img/proyecto2.jpg" alt="Proyecto 2" />
                        </div>
                        <div class="cardProjectInfo">
                            <h3>Aplicación Móvil</h3>
                            <p>Breve descripción de la aplicación móvil, destacando sus principales características y tecnologías utilizadas.</p>
                            <button class="viewDetails">Ver más</button>
                        </div>
                    </div>

                </div>
            </section>










        </>
    )
}

export default HomePage;