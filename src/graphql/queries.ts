import {gql} from "@apollo/client";

// Here we put queries. Remove next line


const QUERY = gql`
query obtenerProductos{
    products {
      items {
        name
        description
        assets {
          source
        }
      }
    }
  }
`
export {
    QUERY
};
