export type CardProps = {
  title?: string;
  subTitle?: string;
  cardTopBtnName?: string;
  children?: any;
  isBorder?: boolean;
  onclick?: () => void;
}

export type PageProps = {
  title?: string;
  children?: any;
  className?: string;
  isBreadcrumbs?: boolean;
  balance?: string
}

export type countryValue = {
  code?: string
  country?: string
  countryCode?: string
  flag?: string
  name?: string
  className?: string
}

export type ButtonProps = {
  text?: string;
  color?: string;
  w?: string;
  br?: string;
  borderColor?: string;
  padding?: string;
  onClick?: () => void;
}

export type DropDownProps = {
  w?: string;
  selectLabel?: string;
  inputLabel?: string;
  inputLabelColor?: string;
  data: { id: number, label: string, value: string }[] | undefined;
}

export type TabsProps = {
  data: { id: number, label: string, value: string }[] | undefined;
};

export type NextBreadcrumbsProps = {
  activeSubTab?: string;
}

export type InputTypeProps = {
  type?: string;
  placeholder?: string;
  disabled?:boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type PasswordInputProps ={
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isValid?: boolean;
}