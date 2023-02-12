import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";


export default function MediaCard (props:any) {
const {imagen,titulo,descripcion} = props

  return (
    <Grid item xs={12} md={6} lg={4}  xl={3}>
    <Card>
      <CardMedia
        sx={{ height: 140}}
        image={imagen}
        title={titulo}
      />
      <CardContent  sx={{ height: 140,   overflow:'hidden', textOverflow:'ellipsis' }} >
        <Typography gutterBottom variant="h5" component="div">
          {titulo}
        </Typography>
        <Typography  variant="body2" color="text.secondary">
        {descripcion}
        </Typography>
      </CardContent>
      <CardActions>
        <Button  sx={{ width:'100%', marginTop:1 }}  variant="contained"  size="small">Buy</Button>
      
      </CardActions>
    </Card>
    </Grid>
  );
}