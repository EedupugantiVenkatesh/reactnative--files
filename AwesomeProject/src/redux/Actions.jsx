export const addUserDetails = userDetails => {
  return {type: 'ADD_USER_DETAILS', payload: userDetails};
};

export const deleteUserDetails = index => {
  return {type: 'DELETE_USER_DETAILS', payload: index};
};

export const updateUserDetails = (userDetails, id) => {
  return {
    type: 'UPDATE_USER_DETAILS',
    payload: { userDetails, id },
  };
};


export const clearUserDetails = () => {
  return {type: 'CLEAR_USER_DETAILS'};
};
