import { ReactNode } from "react";

export type CardWrapperProps = {
  children:ReactNode;
}
export  type DepositeaderProps ={
  title:string;
  description:string;
}
export type DepositButtonProps={
  buttonText:string;
  width:string;
  onClick?:()=>void;
}
export type AmountInputProps ={
  width:string;
}
export type CardProps ={
  upi?:boolean;
  email?:string;
  name:string;
  logo:string;
  accNo?:string;
  cvv?:boolean;
  cvvNo?:string;
  cvvBg?:boolean;
  expiry?:string;
  border?:boolean;
  background?:boolean;
}

export type ReviewComponentProps = {
  description:string;
  icon?:boolean;
  iconString?:string;
  placeholder?:string;
}

export type CardDetailsInputProps ={
  label:string;
  icon?:boolean;
  placeholder?:string;
  iconString?:string;
  saveCard?:boolean;

}
export type CardDetailsProps ={
  cardNumber :number;
  expiryDate:string;
  cvv:number;
  cardHolderName:string;
  saveCard?:boolean;

}