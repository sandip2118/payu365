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
  mobileWidth?:string;
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
  id:number;
  email?:string;
  name?:string;
  cardNumber? :number;
  accountNumber?:string;
  expiryDate ?:string;
  cvv?:boolean;
  cvvNo?:number;
  cardHolderName?:string;
  saveCard?:boolean;
  cardType?:string;
  upi?:boolean;
}

export type DepositBreadCrumbsProps ={
  first?:string;
  second?:string;
  third?:string;
}