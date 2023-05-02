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
                        <Link href="#" underline="none">

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
                        TEcMOVIL Es Una Aplicacion Web Tipo E-commerce, el usuario puede navegar por las distintas vistas, elegir un producto, comprar, o pedir un presuspuesto para su dispositivo averiado,esta hecha con React-redux,Nodejs Express MongoDB. <br />
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
                        Nuestra aplicación es un sitio web donde un usuario puede registrarse y obtener una cuenta, con la que puede acceder a la opción de elegir un dentista y concertar una cita. Hemos utilizado REACT para desarrollar la aplicación.
                        Esta hecha con React redux Nodejs Express y MySQL.
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
                        <span className="p-proyects"> NET FILM , es una simulacion de una plataforma de streaming, en la que hay que suscribirse , navegar por las distintas vistas para poder ver tanto peliculas como  series, esta hecha con React Redux Nodejs MongoDB y Express. <br /> <br />
                        </span>
                    </Typography>
                </CardContent>

            </Card>

        </div>
    );
}
