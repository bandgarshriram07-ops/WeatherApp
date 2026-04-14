import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import "./weatherBox.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SunnyIcon from "@mui/icons-material/Sunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

export default function WeatherBox({ info }) {
  const HOT_IMG =
    "https://media.istockphoto.com/id/1323823418/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E5%A4%AA%E9%99%BD%E3%81%8C%E8%BC%9D%E3%81%8F%E9%9D%92%E7%A9%BA%E3%81%AE%E4%BD%8E%E8%A7%92%E3%83%93%E3%83%A5%E3%83%BC%E6%B8%A9%E5%BA%A6%E8%A8%88.jpg?s=1024x1024&w=is&k=20&c=znZ302mLBmBo229NLZ7H5Bnu24VZ-EDMh5JxTtUTfYw=";
  const COLD_IMG =
    "https://images.unsplash.com/photo-1519863436079-8436f74be632?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_IMG =
    "https://media.istockphoto.com/id/1257951336/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E6%B0%B4%E6%BB%B4%E3%81%AB%E5%AF%BE%E3%81%99%E3%82%8B%E9%9B%A8%E3%81%AE%E4%B8%8B%E3%81%A7%E9%80%8F%E6%98%8E%E5%82%98%E3%81%AF%E8%83%8C%E6%99%AF%E3%82%92%E3%82%B9%E3%83%97%E3%83%A9%E3%83%83%E3%82%B7%E3%83%A5%E3%83%89%E3%83%AD%E3%83%83%E3%83%97%E9%9B%A8%E3%81%AE%E5%A4%A9%E6%B0%97%E3%81%AE%E6%A6%82%E5%BF%B5.jpg?s=1024x1024&w=is&k=20&c=NaM6iEYC8-A2ORyUcv8MmGKd5oYYCKldHQOstdq5Li4=";

  return (
    <div className="weatherBox">
      <Card sx={{ maxWidth: 500 }}>
        <CardActionArea className="boxInfo">
          <CardMedia
            component="img"
            height="140"
            image={
              info.humidity > 70
                ? RAIN_IMG
                : info.Temp > 30
                  ? HOT_IMG
                  : COLD_IMG
            }
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
              {info.humidity > 70 ? (
                <ThunderstormIcon />
              ) : info.Temp > 30 ? (
                <SunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component="span"
            >
              <p>
                <b>Temp : {info.Temp}&deg;C</b>
              </p>
              <div>
                <b>MaxTEMP : {info.MaxTemp}&deg;C</b>
              </div>
              <p>MinTEMP : {info.MinTemp}&deg;C</p>
              <p>Humidity : {info.humidity}</p>
              <p>
                <i>
                  The Weather Can Be Described as <b>{info.Weather}</b> And
                  Feels Like <b>{info.FeelsLike}</b>
                </i>
              </p>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
