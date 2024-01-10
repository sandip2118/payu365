import BasicInformationComponent from "./BasicInformation/BasicInformationComponent";
import ConnectedAccounts from "./ConnectedAccounts/ConnectedAccounts";
import DeactivateAcc from "./DeactivateAcc/DeactivateAcc";
import KycVerification from "./KYCVerification/KycVerification";
import Notifications from "./Notifications/Notifications";
import Preferences from "./Preferences/Preferences";
import RecentDevices from "./RecentDevices/RecentDevices";
import Referrals from "./Referrals/Referrals";
import Security from "./Security/Security";
import { settingsTabItem } from "./types";


export const settingsTabs: settingsTabItem[] = [
  {
    itemId: 1,
    title: "Basic Information",
    icon: "user",
    component: BasicInformationComponent,
  },
  {
    itemId: 2,
    title: "KYC Verification",
    icon: "kyc",
    component: KycVerification,
  },
  {
    itemId: 3,
    title: "Preferences",
    icon: "preferences",
    component: Preferences,
  },
  {
    itemId: 4,
    title: "Security",
    icon: "security",
    component: Security,
  },
  {
    itemId: 5,
    title: "Recent Devices",
    icon: "devices",
    component: RecentDevices,
  },
  {
    itemId: 6,
    title: "Notifications",
    icon: "notifications",
    component: Notifications,
  },
  {
    itemId: 7,
    title: "Connected Accounts",
    icon: "connected",
    component: ConnectedAccounts,
  },
  {
    itemId: 8,
    title: "Referrals",
    icon: "referrals",
    component: Referrals,
  },
  {
    itemId: 9,
    title: "Deactivate A/C",
    icon: "deactivate",
    component: DeactivateAcc,
  },
];