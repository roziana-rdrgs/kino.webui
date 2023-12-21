import { AxiosResponse } from "axios";
import { ILoginForm, ILoginResponse } from "../../../../types";
import api from "../../../../services/axios";
import { IUpdateData } from "../../../../context/AuthProvider";

interface ILogin {
    loginForm: ILoginForm;
    updateData: ({ user, token }: IUpdateData) => void;
  }
  
  export const login = async ({
    loginForm,
    updateData,
  }: ILogin) => {

    try {
      const { data }: AxiosResponse<ILoginResponse> = await api.post(
        "",
        loginForm,
      );
  
      const { user, token } = data;
  
      if (user && token) {
        updateData({
          token, user
        });
        
      } else {
        throw new Error();
      }
    } catch (err: unknown) {
        console.log(err);
    }
  };