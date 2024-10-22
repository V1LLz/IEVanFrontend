import React, { Component, useState } from 'react'
//import logo from '../static/logo.svg'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import RightArrow from '../../static/chevron-right.svg'
import { useLocation, useNavigate } from 'react-router-dom';
import Bandera from '../../static/bandera ierv.png';
import Escudo from '../../static/escudo.webp'
import Card from '../Card';
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";



class CreatePost extends Component {
  state = {
    postType: 'Noticia'
  };

  // Método para actualizar el estado
  setPostType = (newType) => {
    this.setState({ postType: newType });
  }
  render() {
    return (
      <form className="p-5 w-9/12 mx-auto">
        <h2 className="text-4xl font-bold mb-4">Nuevo Post</h2>
        <div className="mb-4">
          <label className="block text-sm mb-1">Tipo de Post</label>
          <select value={this.postType} onChange={(e) => this.setPostType(e.target.value)} className="border p-2 rounded-md w-full">
            <option value="Noticia">Noticia</option>
            <option value="Articulo">Articulo</option>
            <option value="Libro">Libro</option>
          </select>
        </div>
        {this.state.postType === "Evento" &&
          <div className="mb-4">
            <label className="block text-sm mb-1">Fecha</label>
            <input type="date" className="border p-2 rounded-md w-full" required/>
          </div>
        }
        
        <div className="mb-4">
          <label className="block text-sm mb-1">Título</label>
          <input type="text" placeholder="Título del Post" className="border p-2 rounded-md w-full" required/>
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-1">Imagen o Gráfico</label>
          <div className="border-dashed border-2 p-10 w-full rounded-lg flex justify-center items-center">
            <input type="file" required/>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-1">Contenido</label>
          <textarea placeholder="Texto" className="border p-2 rounded-md w-full h-60" required></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg w-full w">
          Publicar
        </button>
      </form>
    );
  }
}




class Home extends Component {

  NewsSection = () =>{
    const navigate = useNavigate();
    var settings = {
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 3.2,
      slidesToScroll: 1,
    };

    return (
      <section className='w-9/12 mx-auto my-20'>
        <div className='flex cursor-pointer hover:bg-slate-100' onClick={() => navigate('/noticias')}>
          <h3 className='text-4xl font-bold m-3'>Noticias</h3>
          <img className='mt-2' src={RightArrow} alt="" />
        </div>
        
        <Slider {...settings}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Slider>
      </section>
    );
  }
  EventsSection = () =>{
    const navigate = useNavigate();
    var settings = {
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 2.2,
      slidesToScroll: 1
    };
    return (
      <section className='w-9/12 mx-auto my-20'>
        <div className='flex cursor-pointer hover:bg-slate-100' onClick={() => navigate('/eventos')}>
          <h3 className='text-4xl font-bold m-3'>Eventos</h3>
          <img className='mt-2' src={RightArrow} alt="" />
        </div>
        <Slider {...settings}>
          <Card title='Eventos1' height='h-[60svh]'/>
          <Card title='Eventos2' height='h-[60svh]'/>
          <Card title='Eventos3' height='h-[60svh]'/>
          <Card title='Eventos4' height='h-[60svh]'/>
          <Card title='Eventos5' height='h-[60svh]'/>
          <Card title='Eventos6' height='h-[60svh]'/>
          <Card title='Eventos7' height='h-[60svh]'/>
          <Card title='Eventos8' height='h-[60svh]'/>
        </Slider>
      </section>
    );
  }
  
  BannerSection = () => {
    function NextArrow(props){  // Boton Siguiente
      const { className, style, onClick } = props;
      return(
        <div
          className={className}
          style={{ ...style, display: "block", right: 20, borderRadius: 0, opacity: 0.5}}
          onClick={onClick}
        />
      );
    }
    function PrevArrow(props){ // Boton Previo
      const { className, style, onClick } = props;
      return(
        <div
            className={className}
            style={{ ...style, display: "block", left: 20, borderRadius: 0, opacity: 0.5}}
            onClick={onClick}
          />
      )
    }

    const navigate = useNavigate();
    var settings = {
      centerPadding: 'true',
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />
    };
    return (
      <section>
        <Slider {...settings}>
          <Card type='homeBanner' imageUrl='https://scontent.fvvc1-1.fna.fbcdn.net/v/t39.30808-6/394281425_768163528655937_6337659242888956190_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEu1ROOj7Lokzx4Ux_A3byHz9gE97rJbyfP2AT3uslvJ5lUX9aMTEd-9xbwK0cE-J3ZEYD9i8LjAzh-NBpR5FEo&_nc_ohc=yK6xhT8YndMQ7kNvgFB46d_&_nc_zt=23&_nc_ht=scontent.fvvc1-1.fna&_nc_gid=AySk_e9tGz7mSW8UrAp3mOP&oh=00_AYCVXUiTGpG-mk9Ev3F5ksKBrXwVnyMzJCJBpfUAq2ILPA&oe=671CFE0E' title='Evento1'/>
          <Card type='homeBanner' imageUrl='https://scontent.fvvc1-1.fna.fbcdn.net/v/t39.30808-6/394753005_768163451989278_2461625211233370297_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeENd6v9DRkhDEyMRnCrLxOGAEkb2hc18jYASRvaFzXyNvUOX23xtoDjyIrwqC1kr10aEFQ_qdRtvBW59_hN8Kwv&_nc_ohc=ImQfYxJeUgwQ7kNvgH_xtg1&_nc_zt=23&_nc_ht=scontent.fvvc1-1.fna&_nc_gid=AJ1jeuUR56g0ahxffylyRiH&oh=00_AYAYLBWoEMsftMoL1QvJc75THEO2PfGfATLzvCo6pqMayg&oe=671D16B5' title='Evento2'/>
          <Card type='homeBanner' imageUrl='https://scontent.fvvc1-1.fna.fbcdn.net/v/t39.30808-6/394373786_768163558655934_3900135871068436584_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEh62c0jFeanxNj3dJJvHL2FKieWQ4nuukUqJ5ZDie66b2-Gu0XOIJ9l5OAPJg7LTicw2REzb45nT5l6nPu7aO4&_nc_ohc=_71fXK_aPDcQ7kNvgE2zoQZ&_nc_zt=23&_nc_ht=scontent.fvvc1-1.fna&_nc_gid=ALQUI215DkNmCRwbuLCh28q&oh=00_AYCRrlHa5xNDRsB18R-ccG_rK9wHXRl7R_VkFTwAB7y26A&oe=671D1AAB' title='Evento3'/></Slider>
      </section>
    );
  }
    render() {
        return (
            <div> 
              <this.BannerSection />
              <h2 className='my-10 text-center text-6xl font-bold'>CONOCE MÁS DE NOSOTROS</h2>

              <this.EventsSection />
              <this.NewsSection />
              
            </div>
        );
    }
    
}

class News extends Component {
  render() {
    return (
      <div className='h-full py-10 w-8/12 mx-auto'>
        <h2 className='text-left text-6xl font-bold mb-10'>Noticias</h2>
        <div className='flex gap-8'>
          <section className='flex flex-col gap-8  w-3/4'>
            <Card type='news' height='h-72' title="Colombia Patria Mía" />
            <Card type='news' height='h-72' title="FUNDIENDO ARMAS, CIMENTANDO PAZ" />
            <Card type='news' height='h-72' title="Publicidad Engañosa En Empresas De Armas" />
            <Card type='news' height='h-72' title="Noticia 4" />
            <Card type='news' height='h-72' title="Noticia 5" />
            <Card type='news' height='h-72' title="Noticia 6" />
            <Card type='news' height='h-72' title="Noticia 7" />
            <Card type='news' height='h-72' title="Noticia 8" />
            <Card type='news' height='h-72' title="Noticia 9" />
            <Card type='news' height='h-72' title="Noticia 10" />
          </section>
          <section className='w-1/4'>
          <iframe 
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpaginaierv&tabs=timeline&width=340&height=2000&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
            width="340" 
            height="2000" 
            style={{ border: 'none', overflow: 'hidden' }} 
            scrolling="no" 
            frameBorder="0" 
            allowFullScreen 
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
          </iframe>
          </section>
        </div>
      </div>
    );
  }
}




class Articles extends Component {
    render() {
      return (
        <div>
          <h1>Articulo</h1>
        </div>
      )
    }
  }

class Institute extends Component {
    content = {
      vision: 'Formar bachilleres técnicos en áreas relacionadas con la conservación, protección y manejo ambiental, desde un modelo pedagógico vanguardista, que les permita ser capaces de transformar su entorno a través de procesos de investigación, desarrollo de proyectos, competencias ciudadanas y laborales, basados en los valores y principios institucionales, con un alto sentido de liderazgo que conlleve a un cambio social, y al mejoramiento de su calidad de vida.',
      visionImgUrl : 'https://scontent.fvvc1-1.fna.fbcdn.net/v/t39.30808-6/462142411_999114335560854_6312703776833572999_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=3RGXdNkKRVEQ7kNvgELPjUe&_nc_zt=23&_nc_ht=scontent.fvvc1-1.fna&_nc_gid=Ae7PBzLH8gnM-5OvlQDIhXC&oh=00_AYA9_qdiQrmHdeea2OWyXLeNxFdmYsqtEo9S6af7P3DYWA&oe=671A7577',
      mision: 'Para el 2022 la Institución Educativa Rural Vanguardia, será reconocida a nivel municipal y departamental por sus resultados académicos y su participación en proyectos de desarrollo rural y ambiental, fundamentado en el juicio crítico y autoconstrucción permanente, así como en los valores éticos y morales.',
      misionImgUrl: 'https://scontent.fvvc1-1.fna.fbcdn.net/v/t39.30808-6/461995280_999114098894211_1466672941337710893_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=rg-lNWTGZmoQ7kNvgFpyXV6&_nc_zt=23&_nc_ht=scontent.fvvc1-1.fna&_nc_gid=AzWZB0lveALwtKHEKgBxoi7&oh=00_AYAqiV1_jea9_5jlHr3hUOjX7I2bbOekwn45GhVhNVU3zQ&oe=671A5889',
      banderUrl: {Bandera},
      banderaDescripcion: 'El color azul de nuestro cielo, significa lealtad, justicia, buena reputación y la nobleza.  El color blanco significa la paz, pureza, el triunfo, la alegría, la inocencia y la inmortalidad.  El color verde de nuestro inmenso llano, representa la naturaleza, es esperanza, conciencia ecológica, honor, civismo y vigor.',
      escudoUrl: {Escudo},
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
          <ScrollToHashElement/>
          <section id='sedes' className='px-10 my-10'>
            <iframe 
              className='w-full h-[720px] mx-auto'
              src="https://www.google.com/maps/d/embed?mid=1pGJWRS3ruEtdrK0GorgkjKtUIn4&hl=en&ehbc=2E312F" ></iframe>
          </section>
          <section id='mision' className='flex justify-between gap-10 py-20 px-0 lg:px-10 flex-col  lg:flex-row'>
            <div className='lg:w-1/2 text-left place-content-center'>
              <h3 className='font-bold text-4xl mb-5'>Misión</h3>
              <p>{this.content.mision}</p>
            </div>
            <img className='lg:w-1/2 my-auto max-h-96 object-cover' src={this.content.misionImgUrl} alt="" />
          </section>

          <section id='vision' className='flex justify-between gap-10 py-20 lg:px-10 flex-col-reverse  lg:flex-row'>
            <img className=' max-h-96 object-cover lg:w-1/2 my-auto' src={this.content.visionImgUrl}  alt="" />
            <div className='lg:w-1/2  lg:text-right place-content-center'>
              <h3 className='font-bold text-4xl mb-5'>Visión</h3>
              <p>{this.content.vision}</p>
            </div>
          </section>

          <section className='mx-auto text-center py-20 px-10 mt-20 flex flex-col gap-20'>
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
                  <img src={Bandera} alt="Bandera de la institucion" className='h-64 w-fit'/>
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
        </div>
      )
    }
}

class Offices extends Component {
  render() {
    return (
      <div>
        <h1>Sedes</h1>
      </div>
    )
  }
}
export {Home, News, Articles, Institute, Offices, CreatePost};