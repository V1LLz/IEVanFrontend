import Slider from "react-slick";
import Card from "../Card";
import { useNavigate } from "react-router-dom";
import { Component } from "react";
import RightArrow from '../../static/chevron-right.svg'
export default class Home extends Component {

    NewsSection = () => {
        const navigate = useNavigate();
        var settings = {
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 3.2,
            slidesToScroll: 1,
        };

        return (
            <section className='w-9/12 mx-auto '>
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
    EventsSection = () => {
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
                    <Card title='Eventos1' height='h-[60svh]' />
                    <Card title='Eventos2' height='h-[60svh]' />
                    <Card title='Eventos3' height='h-[60svh]' />
                    <Card title='Eventos4' height='h-[60svh]' />
                    <Card title='Eventos5' height='h-[60svh]' />
                    <Card title='Eventos6' height='h-[60svh]' />
                    <Card title='Eventos7' height='h-[60svh]' />
                    <Card title='Eventos8' height='h-[60svh]' />
                </Slider>
            </section>
        );
    }

    BannerSection = () => {
        function NextArrow(props) {  // Boton Siguiente
            const { className, style, onClick } = props;
            return (
                <div
                    className={className}
                    style={{ ...style, display: "block", right: 20, borderRadius: 0, opacity: 0.5 }}
                    onClick={onClick}
                />
            );
        }
        function PrevArrow(props) { // Boton Previo
            const { className, style, onClick } = props;
            return (
                <div
                    className={className}
                    style={{ ...style, display: "block", left: 20, borderRadius: 0, opacity: 0.5 }}
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
                    <Card type='homeBanner' imageUrl='https://scontent.fvvc1-1.fna.fbcdn.net/v/t39.30808-6/394281425_768163528655937_6337659242888956190_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEu1ROOj7Lokzx4Ux_A3byHz9gE97rJbyfP2AT3uslvJ5lUX9aMTEd-9xbwK0cE-J3ZEYD9i8LjAzh-NBpR5FEo&_nc_ohc=yK6xhT8YndMQ7kNvgFB46d_&_nc_zt=23&_nc_ht=scontent.fvvc1-1.fna&_nc_gid=AySk_e9tGz7mSW8UrAp3mOP&oh=00_AYCVXUiTGpG-mk9Ev3F5ksKBrXwVnyMzJCJBpfUAq2ILPA&oe=671CFE0E' title='Evento1' />
                    <Card type='homeBanner' imageUrl='https://scontent.fvvc1-1.fna.fbcdn.net/v/t39.30808-6/394753005_768163451989278_2461625211233370297_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeENd6v9DRkhDEyMRnCrLxOGAEkb2hc18jYASRvaFzXyNvUOX23xtoDjyIrwqC1kr10aEFQ_qdRtvBW59_hN8Kwv&_nc_ohc=ImQfYxJeUgwQ7kNvgH_xtg1&_nc_zt=23&_nc_ht=scontent.fvvc1-1.fna&_nc_gid=AJ1jeuUR56g0ahxffylyRiH&oh=00_AYAYLBWoEMsftMoL1QvJc75THEO2PfGfATLzvCo6pqMayg&oe=671D16B5' title='Evento2' />
                    <Card type='homeBanner' imageUrl='https://scontent.fvvc1-1.fna.fbcdn.net/v/t39.30808-6/394373786_768163558655934_3900135871068436584_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEh62c0jFeanxNj3dJJvHL2FKieWQ4nuukUqJ5ZDie66b2-Gu0XOIJ9l5OAPJg7LTicw2REzb45nT5l6nPu7aO4&_nc_ohc=_71fXK_aPDcQ7kNvgE2zoQZ&_nc_zt=23&_nc_ht=scontent.fvvc1-1.fna&_nc_gid=ALQUI215DkNmCRwbuLCh28q&oh=00_AYCRrlHa5xNDRsB18R-ccG_rK9wHXRl7R_VkFTwAB7y26A&oe=671D1AAB' title='Evento3' />
                </Slider>
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