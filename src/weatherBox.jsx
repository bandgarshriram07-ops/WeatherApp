import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import "./weatherBox.css"

export default function WeatherBox({info}) {
 
  return (
    <div className="weatherBox">
      <Card sx={{ maxWidth: 500 }}>
        <CardActionArea className="boxInfo">
          <CardMedia
            component="img"
            height="140"
            image="https://images.unsplash.com/photo-1590055531615-f16d36ffe8ec?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component="span"
            >
                <p><b>Temp : {info.Temp}&deg;C</b></p>
              <div><b>MaxTEMP : {info.MaxTemp}&deg;C</b></div>
              <p>MinTEMP : {info.MinTemp}&deg;C</p>
              <p>Humidity : {info.humidity}</p>
              <p><i>The Weather Can Be Described as <b>{info.Weather}</b> And Feels Like <b>{info.FeelsLike}</b></i></p>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
