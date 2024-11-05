import React, { Component } from 'react'
//import logo from '../static/logo.svg'
import "slick-carousel/slick/slick.css";
import Bandera from '../../../static/bandera-ierv.webp';
import Escudo from '../../../static/escudo.webp'
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";

export default class Institute extends Component {
    content = {
        vision: 'Formar bachilleres técnicos en áreas relacionadas con la conservación, protección y manejo ambiental, desde un modelo pedagógico vanguardista, que les permita ser capaces de transformar su entorno a través de procesos de investigación, desarrollo de proyectos, competencias ciudadanas y laborales, basados en los valores y principios institucionales, con un alto sentido de liderazgo que conlleve a un cambio social, y al mejoramiento de su calidad de vida.',
        visionImgUrl: 'https://scontent.fvvc1-1.fna.fbcdn.net/v/t39.30808-6/462142411_999114335560854_6312703776833572999_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=3RGXdNkKRVEQ7kNvgELPjUe&_nc_zt=23&_nc_ht=scontent.fvvc1-1.fna&_nc_gid=Ae7PBzLH8gnM-5OvlQDIhXC&oh=00_AYA9_qdiQrmHdeea2OWyXLeNxFdmYsqtEo9S6af7P3DYWA&oe=671A7577',
        mision: 'Para el 2022 la Institución Educativa Rural Vanguardia, será reconocida a nivel municipal y departamental por sus resultados académicos y su participación en proyectos de desarrollo rural y ambiental, fundamentado en el juicio crítico y autoconstrucción permanente, así como en los valores éticos y morales.',
        misionImgUrl: 'https://scontent.fvvc1-1.fna.fbcdn.net/v/t39.30808-6/461995280_999114098894211_1466672941337710893_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=rg-lNWTGZmoQ7kNvgFpyXV6&_nc_zt=23&_nc_ht=scontent.fvvc1-1.fna&_nc_gid=AzWZB0lveALwtKHEKgBxoi7&oh=00_AYAqiV1_jea9_5jlHr3hUOjX7I2bbOekwn45GhVhNVU3zQ&oe=671A5889',
        banderUrl: { Bandera },
        banderaDescripcion: 'El color azul de nuestro cielo, significa lealtad, justicia, buena reputación y la nobleza.  El color blanco significa la paz, pureza, el triunfo, la alegría, la inocencia y la inmortalidad.  El color verde de nuestro inmenso llano, representa la naturaleza, es esperanza, conciencia ecológica, honor, civismo y vigor.',
        escudoUrl: { Escudo },
        escudoDescripcion: `Círculo:                           Eticidad y racionalidad.

      Color Azul:                     Expresa armonía, amistad, fidelidad, serenidad, sosiego y  optimismo.
      
      Figuras humanas:         Trabajo en equipo.
      
      Sol:                                 La luminaria que rige todo el sistema, produce calor, crea vida, confiere orden y brilla con luz propia.`,
        himno: `I

Vamos caminando a la vanguardia
con orgullo y con tenacidad
unidos en la fe y la tolerancia
con respeto, disciplina y lealtad.

II

Compromiso de nosotros nuestra patria
con amor y solidaridad,
de Colombia construiremos el mañana
viva la ciencia, la cultura y la paz.

Coro:

Con Dios del cielo caminaremos,
con paso firme,
hacia la excelencia personal (bis)

III

Verde campo al pie de la montaña
donde las arpas bordonean la libertad
nos formamos con calidad humana
para forjar la nueva sociedad.

IV

Son mis maestros sembradores de esperanza
en tierra fértil, nuestra vida así será
cosecharemos en futuro su enseñanza
con autonomía y responsabilidad.

Coro

V

En el deporte fomentamos la constancia
en la oración la vivencia espiritual
con la lectura enriquecemos nuestras almas
desde las aulas nace la fraternidad.

VI

El regresar será siempre una añoranza
a esta casa nuestro segundo hogar
y crecer con la familia colombiana
en la unidad, el liderazgo y la hermandad.

Coro

 

Autor: Jairo Humberto Rojas Bonilla, 2005

         Ex alumno 1981`
    }
    render() {
        return (
            <div className='w-9/12 mx-auto divide-y '>
                <ScrollToHashElement />
                <div>
                    <h2 className="text-center text-6xl font-bold my-10">Nuestra Institución</h2>
                    <p className="text-center mb-10">
                        La IERV es una institución educativa rural de carácter público. La sede principal se encuentra ubicada en el Km1 Via que conduce al municipio de Restrepo, Vereda Vanguardia - Villavicencio - Meta - Colombia.
                    </p>
                </div>
                <section id='mision-vision' className='flex justify-between gap-10 py-20 px-0 lg:px-10 flex-col  lg:flex-row'>
                    <div className='lg:w-1/2 text-left place-content-center'>
                        <h3 className='font-bold text-4xl mb-5'>Misión</h3>
                        <p>{this.content.mision}</p>
                    </div>
                    <img className='lg:w-1/2 my-auto max-h-96 object-cover' src={this.content.misionImgUrl} alt="" />
                </section>

                <section id='vision' className='flex justify-between gap-10 py-20 lg:px-10 flex-col-reverse  lg:flex-row'>
                    <img className=' max-h-96 object-cover lg:w-1/2 my-auto' src={this.content.visionImgUrl} alt="" />
                    <div className='lg:w-1/2  lg:text-right place-content-center'>
                        <h3 className='font-bold text-4xl mb-5'>Visión</h3>
                        <p>{this.content.vision}</p>
                    </div>
                </section>

                <section id='simbolos-institucionales' className='mx-auto text-center py-20 px-10 mt-20 flex flex-col gap-20'>
                    <div>
                        <h2 className='font-bold text-6xl my-5'>Nuestros simbolos institucionales</h2>
                        <p className='text-xl'>Los símbolos de la Institución Educativa Rural Vanguardia fueron creados para afianzar la identidad de la comunidad estudiantil, y el reconocimiento de la sociedad llanera, fueron adoptados mediante resolución interna, con la aprobación del consejo directivo.</p>
                    </div>

                    <div>
                        <h3 className='font-bold text-3xl '>El lema</h3>
                        <p className='font-light text-4xl '> “CON PASO FIRME HACIA LA EXCELENCIA PERSONAL”</p>
                    </div>

                    <div className='flex flex-col xl:flex-row gap-10 xl:divide-x-2'>
                        <div className='xl:w-1/3 flex flex-col gap-5'>
                            <h3 className='font-bold text-3xl'>Himno</h3>
                            <pre className='font-serif'>{this.content.himno}</pre>
                        </div >
                        <div className='flex flex-col xl:w-2/3 gap-20 px-10'>
                            <div className='items-center gap-5 flex flex-col'>
                                <h3 className='font-bold text-3xl'>Bandera</h3>
                                <img src={Bandera} alt="Bandera de la institucion" className='h-64 w-fit' />
                                <p className='font-serif lg:px-10'>{this.content.banderaDescripcion}</p>
                            </div>
                            <div className='items-center gap-5 flex flex-col lg:px-10'>
                                <h3 className='font-bold text-3xl'>Escudo</h3>
                                <img src={Escudo} alt="Escudo de la institucion" className='h-64 w-fit' />
                                <p className='font-serif'>{this.content.escudoDescripcion}</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='px-10' id='principios-valores'>
                    <h2 className='font-bold text-6xl my-5 text-center py-20'>Principios y Valores</h2>
                    <div>
                        <h3 className='font-bold text-4xl my-5'>PRINCIPIOS</h3>
                        <p className='text-xl'>
                            Los principios que determinan la acción en la Institución educativa Rural Vanguardia, están enmarcados en los principios de la Convivencia Escolar, según la Ley 1620 de 2013, así:
                        </p><br/>
                        <p className='text-xl'>
                            <span className='font-bold'>ASERTIVIDAD:</span>
                            Los símbolos de la Institución Educativa Rural Vanguardia fueron creados para afianzar la identidad de la comunidad estudiantil, y el reconocimiento de la sociedad llanera, fueron adoptados mediante resolución interna, con la aprobación del consejo directivo.
                        </p><br/>
                        <p className='text-xl'>
                            <span className='font-bold'>CALIDAD:</span>
                            Entendemos por calidad no solo el cumplimiento del deber y de las normas sino la eficacia de lo que se hace al interior de la institución y se proyecta en el mediano y en el largo plazo.  Implica además un compromiso en el mejoramiento continuo del quehacer educativo y de la misma institución.
                        </p><br/>
                        <p className='text-xl'>
                            <span className='font-bold'>COMPROMISO:</span>
                            Entendido como el esfuerzo consciente, personal y comunitario tanto en el desarrollo de los programas como en el logro de las metas propuestas.
                        </p><br/>
                        <p className='text-xl'>
                            <span className='font-bold'>CREATIVIDAD:</span>
                            Posibilidad de innovación en la búsqueda de estrategias pedagógicas, didácticas, evaluativas y participativas de manera que el quehacer interno se proyecte en el espacio local y regional.
                        </p><br/>
                        <p className='text-xl'>
                            <span className='font-bold'>PARTICIPACIÓN:</span>
                            Todos los estamentos de la comunidad educativa deben comprometerse con el desarrollo y el crecimiento institucional, el cual redunda en beneficios para los propios actores y la comunidad circundante.
                        </p><br/>
                        <p className='text-xl'>
                            <span className='font-bold'>PRO-ACTIVIDAD:</span>
                            Actitud en la que el individuo dentro de su contexto educativo y social asume el pleno control de su conducta vital de modo activo, lo que implica la toma de iniciativa en el desarrollo de acciones  creativas y audaces para generar mejoras en los diferentes proyectos dentro de un contexto real.
                        </p><br/>
                        <p className='text-xl'>
                            <span className='font-bold'>SINERGIA:</span>
                            Entendida como la importancia de trabajar en equipo, pues todos logramos mejores resultados dentro de los proyectos en una formación y socialización colectiva que cada uno por su cuenta.
                        </p><br/>
                        <p className='text-xl'>
                            <span className='font-bold'>EXCELENCIA:</span>
                            Partimos del principio de que la educación no se reduce a la mera instrucción.  El maestro ha de ser educador en sentido completo, favoreciendo el desarrollo de todos aspectos de la persona y contribuyendo a una educación integral y personalizada.
                        </p><br/>
                        <p className='text-xl'>
                            <span className='font-bold'>EQUIDAD:</span>
                            Entendida como una cualidad que consiste en dar a cada uno lo que se merece por sus méritos o condiciones.
                        </p><br/>
                        <p className='text-xl'>
                            PRINCIPIOS DEL SISTEMA NACIONAL DE CONVIVENCIA ESCOLAR Y FORMACIÓN PARA LOS DERECHOS HUMANOS, LA EDUCACIÓN PARA LA SEXUALIDAD Y LA PREVENCIÓN Y MITIGACIÓN DE LA VIOLENCIA ESCOLAR (Ley 1620 de 2013):
                        </p><br/>
                        <p className='text-xl'>
                            <span className='font-bold'>PARTICIPACIÓN:</span>
                            En virtud de este principio las entidades y establecimientos educativos deben garantizar su participación activa para la coordinación y armonización de acciones, en el ejercicio de sus respectivas funciones, que permitan el cumplimiento de los fines del Sistema. Al tenor de la Ley 115 de 1994 y de los artículos 31, 32, 43 Y 44 de la Ley 1098 de 2006, los establecimientos educativos deben garantizar el derecho a la participación de niños, niñas y adolescentes en el desarrollo de las estrategias y acciones que se adelanten dentro de los mismos en el marco del Sistema. En armonía con los artículos 113 y ?88 de la Constitución Política, los diferentes estamentos estatales deben actuar en el marco de la coordinación, concurrencia, complementariedad y subsidiariedad; respondiendo a sus funciones misionales.
                        </p><br/>
                        <p className='text-xl'>
                            <span className='font-bold'>CORRESPONSABILIDAD:</span>
                            La familia, los establecimientos educativos, la sociedad y el Estado son corresponsables de la formación ciudadana, la promoción de la convivencia escolar, la educación para el ejercicio de los derechos humanos, sexuales y reproductivos de los niños, niñas y adolescentes desde sus respectivos ámbitos de acción, en torno a los objetivos del Sistema y de conformidad con lo consagrado en el artículo 44 de la Constitución Política y el Código de Infancia y la Adolescencia.
                        </p><br/>
                        <p className='text-xl'>
                            <span className='font-bold'>AUTONOMÍA:</span>
                            Los individuos, entidades territoriales e instituciones educativas son autónomos en concordancia con la Constitución Política y dentro de los límites fijados por las leyes, normas y disposiciones
                        </p><br/>
                        <p className='text-xl'>
                            <span className='font-bold'>DIVERSIDAD:</span>
                            El Sistema se fundamenta en el reconocimiento, respeto y valoración de la dignidad propia y ajena, sin discriminación por razones de género, orientación o identidad sexual, etnia o condición física, social o cultural. Los niños, niñas y adolescentes tienen derecho a recibir una educación y formación que se fundamente en una concepción integral de la persona y la dignidad humana, en ambientes pacíficos, democráticos e incluyentes.
                        </p><br/>
                        <p className='text-xl'>
                            <span className='font-bold'>INTEGRALIDAD:</span>
                            La filosofía del sistema será integral, y estará orientada hacia la promoción de la educación para la autorregulación del individuo, de la educación para la sanción social y de la educación en el respeto a la I Constitución y las leyes.
                        </p><br/>
                    </div>
                    <div>
                        <h3 className='font-bold text-4xl my-5'>Valores</h3>
                        <p className='text-xl'>Son valores fundamentales en el quehacer institucional:</p><br/>
                        <ol className='text-xl' type='1'>
                            <li >
                                1. Amor: Sentimiento que lleva al ser humano a desearle al otro todo lo bueno. “El amor es paciente, bondadoso. El amor no es envidioso, ni jactancioso, ni orgulloso. No se comporta con rudeza, no es egoísta, no se enoja fácilmente, no guarda rencor” (1 Corintios 13: 4-5).
                            </li><br/>
                            <li>
                                2. Autonomía: Ser capaz de hacer ciertas cosas por uno mismo, sin depender de nadie, a partir de ideas propias. “La gente suele decir que tal o cual persona no se ha encontrado todavía a sí mismo. Pero la autonomía no es algo que uno encuentra, es algo que uno crea” (Thomas Szasz).
                            </li><br/>
                            <li>
                                3. Respeto: Consideración con que se trata a alguien que es digno, sin causarle ofensa o perjuicio. “El respeto por nosotros mismos guía nuestra moral, el respeto por otros quía nuestras maneras” (Laurence Sterne).
                            </li><br/>
                            <li>
                                4. Responsabilidad: Ser conscientes de que lo que hacemos o lo que dejamos de hacer puede tener sobre los demás o sobre uno mismo ciertas consecuencias. “La libertad significa responsabilidad. Es por eso que la mayoría de los hombres la ignoran” (George Bernard Shaw).
                            </li><br/>
                            <li>
                                5. Conciencia Ambiental: Es actuar consecuentemente con el medio ambiente, es decir, intentar no perjudicarlo, reciclando, reutilizando y regulando todo aquello que pueda deteriorar nuestro entorno y a nosotros mismos. “El hombre es responsable de su propio destino; la tierra es nuestro destino, y nuestro destino se está destruyendo” (Anónimo).
                            </li><br/>
                            <li>
                                6. Emprendimiento: Muy relacionada con la autonomía, es la capacidad de actuar responsablemente sabiendo lo que se hace (proyecto) y prever las consecuencias. “Emprender una forma de ser, una forma de hacer, una forma de vivir… una forma de enseñar” (Maria Batet)
                            </li><br/>
                            <li>
                                7. Creatividad: Dar soluciones distintas a situaciones comunes o buscar respuestas a nuevas situaciones, significa buscar nuevos caminos, cambiar la mirada, la perspectiva. “La creatividad se aprende igual que se aprende a leer” (Ken Robinson)
                            </li><br/>
                            <li>
                                8. Tolerancia: Es la base para la vida en sociedad. Es tener respeto por las personas con las que convivimos aunque puedan tener diferente cultura, religión, opiniones políticas, ideología… “todos estamos llenos de debilidades y errores; perdonémonos recíprocamente nuestras tonterías: esa es la primera ley de la naturaleza” (Voltaire).
                            </li><br/>
                            <li>
                                9. Cooperación: Colaborar con los demás, compartir ideas, opiniones, nos hace mejores, da mejores resultados. La cooperación tiene más sentido cuando siendo autónomos elegimos compartir. “Yo hago lo que usted no puede, y usted hace lo que yo no puedo. Juntos podemos hacer grandes cosas” (Madre Teresa de Calcuta).
                            </li><br/>
                            <li>
                                10. Transparencia: Ser honesto con uno mismo y con los demás. Es un valor fundamental para trabajar en equipo. “Lo que las leyes no prohíben, puede prohibirlo la honestidad” (Lucio Anneo Séneca).
                            </li><br/>
                            <li>
                                11. Entusiasmo: Es lo que nos impulsa a actuar, a llevar a cabo cualquier proyecto. “No dejes apagar el entusiasmo, virtud tan valiosa como necesaria; trabaja, aspira, tiende siempre hacia la altura” (Rubén Darío).
                            </li><br/>
                        </ol>
                    </div>
                </section>
            </div>
        )
    }
}