import { Control } from "react-hook-form";
import { IFormLogin } from "../../pages/Login/type";

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    control: Control<IFormLogin, any>   
    name: "email" | "password";
    errorMessage?: string;
}