import * as React from "react";
//import Card from "@mui/material/Card";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { DefaultDeserializer } from "v8";
import "./Product.scss";
import axios from "axios";
import { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { StylesProvider } from "@material-ui/core/styles";

interface Props {
  title: string;
  description: string;
  image: string;
  price: string;
}
const Product = ({ title, description, image, price }: Props) => {
  return (
    <div className="product">
      <Card>
        <CardMedia component="img" height="200" image={image} />
        <CardContent>
          <StylesProvider injectFirst>
            <Typography className="" gutterBottom variant="h6" component="p">
              {title}
            </Typography>
          </StylesProvider>

          <Typography variant="subtitle1" color="textPrimary">
            {price}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            See more
          </Button>
          <Button size="small" color="primary">
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Product;