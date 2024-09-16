import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import "./Info.css";

export default function Info({ info }) {
  const HOT_URL =
    "https://images.unsplash.com/photo-1593698112819-077eb8db9790?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL =
    "https://plus.unsplash.com/premium_photo-1673726864881-49e0f3816082?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAINY_URL =
    "https://images.unsplash.com/photo-1433863448220-78aaa064ff47?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="card">
      <h2>
        Weather is <span>{info.text}</span>
      </h2>
      <Card sx={{ maxWidth: 345 }} className="card">
        <CardMedia
          component="img"
          alt="Weather Image"
          height="140"
          image={info.temp_c > 30 ? HOT_URL : COLD_URL}
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <p>
              <b>
                {info.name}, {info.region}
              </b>
            </p>
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            component={"span"}
          >
            <p>Temp: {info.feelslike_c} &deg;C</p>
            <p>Feels Like: {info.temp_c}&deg;C</p>
            <p>Country: {info.country}</p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
