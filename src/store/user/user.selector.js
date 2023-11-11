export const selectCurrentUser = (state) => state.user.currentUser; 

export const selectIsLoading = (state) => state.user.isLoading;

export const selectIsError = (state) => console.log(state.user.error, 'state');