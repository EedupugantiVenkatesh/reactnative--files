import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define the initial state
const initialState = {
  userDetailsList: [], // Initialize as an empty array
};

// Define the reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER_DETAILS':
      return {
        ...state,
        userDetailsList: [...state.userDetailsList, action.payload],
      };
      case 'UPDATE_USER_DETAILS':
        const { userDetails, id } = action.payload;
        // console.log("id and userdetails",id,userDetails);
        let copyList = [...state.userDetailsList];
        // console.log("copyList",copyList);
      let matchedIndex = copyList.findIndex((user)=>user.id === id) 
      if(matchedIndex>=0){
        copyList[matchedIndex] = userDetails
       

      }   
        return {
          ...state,
          userDetailsList: copyList

        };
    
        case 'DELETE_USER_DETAILS':
          return {
            ...state,
            userDetailsList: state.userDetailsList.filter(
              (userDetails) => userDetails.id !== action.payload
            ),
          };
        default:
          return state;
      }
};

// Configure Redux Persist
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

// Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, reducer);

// Create the Redux store
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export {store, persistor};


