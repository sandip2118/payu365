export type CardProps = {
  title?: string;
  subTitle?: string;
  cardTopBtnName?: string;
  className?: string;
  children?: any;
  isBorder?: boolean;
  onClick?: () => void;
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

export type OutlinedButtonProps = {
  text?: string;
  color?: string;
  w?: string;
  br?: string;
  borderColor?: string;
  padding?: string;
  onClick?: () => void;
}

export type DropDownProps = {
  data: { label: string, value: string | any }[] | undefined;
  classNames?: string;
  placeholder?: string;
  width?: string;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectRangeLabel?: any
}

export type TabsProps = {
  data?: any | undefined;
  value?: any | undefined; 
  onChange?: any | undefined; 
};

export type NextBreadcrumbsProps = {
  activeSubTab?: string;
}

export type InputTypeProps = {
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  className?: string;
  labelName?: string;
  labelClassName?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type PasswordInputProps = {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValid?: boolean;
}

export type InputProps = {
  width?: string;
  value?: string;
  placeholder?: string;
  classes?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type TableCardProps = {
  children?: any;
}

export type SearchBarProps = {
  placeholder?: string;
  searchValue?: string;
  handleSearch?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export type BuySaleProps = {
  type?: string;
  className?: string;
  onClick?: () => void;
}

export type ContainedButtonProps = {
  text?: string;
  className?: string;
  padding?: string;
  onClick?: () => void;
}

export  type ModalProps = {
  activeModal?: boolean;
  onClose?: () => void;
  noFade?: boolean;
  className?: string; 
  children?: any;
  footerContent?: any; 
  centered?: boolean;
  scrollContent?: boolean;
  closeIcon?: boolean;
  title?: any;
  titleClassName?: string; 
}