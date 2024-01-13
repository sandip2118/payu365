import React, { ReactNode } from 'react'

export interface CardWrapperProps {
  children: ReactNode;
}

export interface Country {
  name: string;
  flag: string;
  countryCode: string;
}

export interface SwitchStates {
  [key: string]: boolean;
}

export interface DevicesProps {
  sessions: number;
  device: string;
  platform: string;
  onClick: () => void;
  isActive: boolean;
}

export interface specificDevices {
  device: string;
  location: string;
  platform: string;
  tag: boolean;
  activeSession: boolean;
  isActive: boolean;
}

export interface BasicInfoHeaderProps {
  title: string;
  description: string;
  buttonText: string;
  buttonColor: string;
}

export interface HeaderProps {
  title: string;
  description?: string;
  isBorder?: boolean;
}

export interface RefferalProps {
  title: string;
  description: string;
  referralData: string;
  iconString: string;
  onClick: () => void;
}

export interface SecuritySettingsProps {
  icon: true;
  iconPath: string;
  tag: boolean;
  title: string;
  description: string;
  extra: boolean;
  extraText: string;
  switch: boolean;
  switchIcon: boolean;
  switchText: string;
  buttonText: string;
  isBorder: boolean;
  route?: string;
  tabTitle?: string;
}

export interface ComponentSetting {
  key: string;
  title: string;
  description: string;
}

export interface SwitchComponentProps {
  settings: ComponentSetting[];
  switchStates: SwitchStates;
  onSwitchChange: (key: string) => (checked: boolean) => void;
}

export interface settingsTabItem {
  itemId: any;
  title: string;
  icon: string;
  component: React.FC;
}

export interface SettingsSideBarProps {
  activeTab: settingsTabItem;
  setActiveTab: React.Dispatch<React.SetStateAction<settingsTabItem>>;
}

export interface SettingsContentProps {
  activeTab: settingsTabItem;
  activeComponent?: string;
}

export interface EmailVerificationProps {
  title: string;
  description: string;
  lastDate?: string;
  buttonIcon?: string;
  buttonText: string;
  buttonColor: string;
  borderColor: string;
}
export interface SecurityBreadCrumbsProps {
  activeSubTab?: string;
  title: string;
}