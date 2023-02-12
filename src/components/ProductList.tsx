import { useQuery } from "@apollo/client";
import { QUERY } from "../graphql/queries"
import { Container,Grid } from "@mui/material";
import MediaCard from "./Productos";
// import _ from 'lodash'







export function ProductList() {
  const {data,loading,error} = useQuery(QUERY)
 
  // console.log(data)
  console.log(loading)
  console.log(error)
  
  if (loading) return <>Cargando...</>;
  // const arrayProductos = _.get (data,'products.items')

  const arrayProductos = data.products.items
  console.log(arrayProductos)

  const arrayFotosProductos = arrayProductos.map((producto: { assets: any; }) =>  producto)
  console.log(arrayFotosProductos);
  return (
  <>
 <Container maxWidth={false}  >
    <Grid marginY={1} container justifyContent='center' alignItems='center' spacing={4} direction='row'  >
     {arrayFotosProductos.map((producto: any,i:number) => <MediaCard 
     key={i} 
     imagen={producto.assets[0].source} 
     titulo={producto.name} 
     descripcion={producto.description}
     />)}
     </Grid>
     </Container>

  </>
   
  );

 
}
