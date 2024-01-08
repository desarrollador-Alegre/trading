const initialState = {
  token: localStorage.getItem('token'),
  loginUser: {},
  loginError: null,
  allUser: [],
  isAuthenticated: false,
  allLead: [],
  dataPersonal: [],
  coins: []

  
  }
  
  
  export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'REGISTER':
        return {
          ...state
        };
  
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          token: action.payload,
        };
      case 'LOGOUT_USER':
        // Limpia el token en el estado
        return {
          ...state,
          token: null,
        };
  
      case 'LOGIN_ERROR':
        return {
          ...state,
          loginError: true,
        };

        case 'LOGOUT':
          return {
            ...state,
            isAuthenticated: false,
            token: null,
          };
  
    
        case 'ALL_USERS':
          return {
            ...state,
            allUser: action.payload
          };

          case 'DATA_PERSONAL':
            return {
              ...state,
              dataPersonal: action.payload

            };

            case 'ALL_COINS':
              return {
                ...state,
                coins: action.payload
  
              };

              case 'CHANGE_COINS': 
              return {
                ...state,
                coins: action.payload.success ? state.coins : state.coins, // Puedes actualizar esto según tus necesidades
              };

         



            
       
     
  
      default: return { ...state }
    }
  }
  
  
  
  
  
  
  