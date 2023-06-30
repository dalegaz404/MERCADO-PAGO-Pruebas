import arrayObjetos from "../Helpers/arrayObjetos"
import axios from "axios"

export const GET_DETAIL = 'GET_DETAIL'

export function getAllProducts(){
    const linkFelipe = `https://e-commerce-back-production-de3f.up.railway.app/producto`
    const linkBackLocal= 'http://localhost:3001/productos/productos'
    return async (dispatch)=>{
        const data = (await axios.get(linkFelipe)).data
        //.content;           //para el local
        .productos;       //para el deploy
        return dispatch({
            type: 'GET_ALL_PRODUCTS',
            payload: data
        });
    }
}

export function getDetail(id){
    return async function(dispatch){
        const json = await axios(`http://localhost:3000/productos/${id}`);
        return dispatch({
            type: GET_DETAIL,
            payload: json.data
        });
    }
}

export function aplicarFiltros(categoriasYcolores){
    return {
        type: 'APLICAR_FILTROS',
        payload: categoriasYcolores
    }
}

export function addFavorites(producto){
    return {
        type: 'ADD_FAVORITES',
        payload: producto
    }
}

export function removeFavorites(producto){
    return {
        type: 'REMOVE_FAVORITES',
        payload: producto
    }
}