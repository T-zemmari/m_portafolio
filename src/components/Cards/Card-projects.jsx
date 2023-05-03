import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TecMOVIL from '../../assets/images/tec-movil.png';
import ReactDent from '../../assets/images/react-dent.png';
import NetFilm from '../../assets/images/net-film.png';
import Aos from 'aos';
import "aos/dist/aos.css";
import './Card-projects.css';
import { Link } from 'react-router-dom';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function RecipeReviewCard() {
    return (

        <div className="contenedor-proyectos" id="portfolio" data-aos="fade-down">
            <Card sx={{ maxWidth: 345 }} className="card-version-movil-column">
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            T
                        </Avatar>
                    }
                    action={
                        <Link href="https://github.com/T-zemmari/TEcMOVIL-Frontend" underline="none">

                        </Link>
                    }
                    title="TEcMOVIL"
                    subheader="Mayo 24, 2021"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={TecMOVIL}
                    alt="Tecnmovil"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        <a href="https://github.com/T-zemmari/TEcMOVIL-Frontend" target='_blank' style={{ 'text-decoration': 'none' }}>
                            TEcMOVIL es una aplicación web de tipo e-commerce que ofrece una experiencia
                            de usuario optimizada para la navegación y compra de productos,
                            así como la solicitud de presupuestos para dispositivos averiados.
                            Esta solución está desarrollada utilizando tecnologías de vanguardia como React-Redux, Node.js, Express y MongoDB.
                        </a>                    </Typography>
                </CardContent>

            </Card>

            <Card sx={{ maxWidth: 345 }} className="card-version-movil-column">
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            T
                        </Avatar>
                    }
                    action={
                        <Link href="" underline="none">

                        </Link>
                    }
                    title="REACT DENT"
                    subheader="Marzo 18, 2021"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={ReactDent}
                    alt="React-dent"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        <a href="https://github.com/T-zemmari/reactdent-f" target='_blank' style={{ 'text-decoration': 'none' }}>
                            Nuestra aplicación web ofrece a los usuarios la posibilidad de registrarse y crear una cuenta personal para acceder a una variedad de opciones, incluyendo la selección y reserva de citas con dentistas de confianza. Hemos desarrollado esta solución utilizando las últimas tecnologías, incluyendo React, Redux, Node.js, Express y MySQL.
                        </a>
                    </Typography>
                </CardContent>

            </Card>

            <Card sx={{ maxWidth: 345 }} className="card-version-movil-column">
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            T
                        </Avatar>
                    }
                    action={
                        <Link href="#" underline="none">

                        </Link>
                    }
                    title="NET-FILM"
                    subheader="Abril 21, 2021"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={NetFilm}
                    alt="Netfilm"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">

                        <span className="p-proyects">
                            <a href="https://github.com/T-zemmari/Rentail-Movie" target='_blank' style={{ 'text-decoration': 'none' }}>
                                NET FILM es una simulación de una plataforma de streaming, que requiere que los usuarios se suscriban
                                y naveguen por diversas opciones para acceder a películas y series de televisión.
                                Hemos desarrollado esta solución utilizando tecnologías líderes en la industria, como React,
                                Redux, Node.js, MongoDB y Express. <br /> <br />
                            </a>
                        </span>
                    </Typography>
                </CardContent>

            </Card>

        </div>
    );
}
