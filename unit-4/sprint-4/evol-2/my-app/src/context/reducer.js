import { GetProductFailure, GetProductsRequest, GetProductsSuccess, LoginFailure, LoginRequest, LoginSuccess } from "./actionCreators";




function reducer(state, action) {
    switch (action.type) {
      case 'LOGIN_REQUEST':
        return LoginRequest(action.email,action.password);
      case 'LOGIN_SUCCESS':
        return LoginSuccess(action.res);
      case 'LOGIN_FAILURE':
        return LoginFailure(action.err);  
      case 'GET_PRODUCTS_REQUEST':
        return GetProductsRequest(action.page);  
      case 'GET_PRODUCTS_SUCCESS':
        return GetProductsSuccess(action.res);    
      case 'GET_PRODUCTS_FAILURE':
        return GetProductFailure(action.err);  
      default:
        return;
    }
  }

  export default reducer