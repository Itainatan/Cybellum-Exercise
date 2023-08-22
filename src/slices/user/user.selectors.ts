import { RootState } from "app/store";

export const isUserLoggedIn = (state: RootState) => state.user.accessToken;

