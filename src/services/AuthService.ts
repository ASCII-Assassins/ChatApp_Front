import { useAppDispatch, useAppSelector } from "../App/hooks";
import { signin, signout, User } from "../features/auth/authSlice";
import axiosInstance from "../config/axios";

interface UserData {
  firstName?: string;
  lastName?: string;
  username?: string;
  phoneNumber?: string;
  email: string;
  password?: string;
}

class Auth {
  private readonly user: User;
  private readonly dispatch: any;

  constructor(user: User, dispatch: any) {
    this.user = user;
    this.dispatch = dispatch;
  }

  getUser() {
    return this.user;
  }

  async signup(userData: UserData) {
    try {
      await axiosInstance.post("/auth/register", userData);
      return { success: true };
    } catch (error: any) {
      return { success: false, error: error.response.data.message };
    }
  }

  async signin(userData: UserData) {
    try {
      const response = await axiosInstance.post("/auth/login", userData);
      const data = await response.data;
      this.dispatch(signin({ user: data.user, token: data.access_token }));
      return { success: true };
    } catch (error: any) {
      return { success: false, error: error.response.data.message };
    }
  }

  signout(): void {
    this.dispatch(signout());
  }

  isAuthenticated() {
    return Object.keys(this.user).length > 0;
  }
}

export default function AuthService() {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  return new Auth(user, dispatch);
}
