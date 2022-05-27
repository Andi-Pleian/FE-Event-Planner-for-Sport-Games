import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Navbar from "../Navbar/Navbar";
import axios from 'axios';
import {useState} from 'react';
import {useEffect} from 'react';
import "./SeeEvents.style.css";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function MediaCard() {
    const [events, setEvents] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        const getEvents = async () => {
          try {
            const allEvents = await axios.get("/events");
            setEvents(allEvents.data);
          } catch (err) {
            console.log(err);
          }
        };
        getEvents();
      }, []);    

    return (
        <>
            <Navbar />
            <div className='container'>
                {events.map((e) => (
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image='https://www.fondationeczema.org/sites/default/files/2020-06/football-2600x730px.jpg  '
                                title="Football"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {e.eventName}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {e.eventType}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {e.eventLocation}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {e.eventDate}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {"Cost: " + e.eventCost}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {"Organizer: " + e.eventOrganizer}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                            <Button size="small" color="primary">
                                Participa
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </div>
        </>
    );
}
