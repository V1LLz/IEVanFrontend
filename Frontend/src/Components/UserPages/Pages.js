import React, { Component } from 'react'
import "slick-carousel/slick/slick.css";
import Card from '../Card';




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




export { News, CreatePost};