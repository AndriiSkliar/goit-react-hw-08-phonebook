export const selectUserData = state => state.auth.userData;
export const selectAuthenticated = state => state.auth.authenticated;
export const selectAuthIsLoading = state => state.auth.isLoading;
export const selectAuthError = state => state.auth.error;
export const selectIsRefresh = state => state.auth.isRefresh;
export const selectToken = state => state.auth.token;
