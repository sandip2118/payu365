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
    title: "BasicInformation",
    titleOnBar: "Basic Information",
    icon: "user",
    component: BasicInformationComponent,
  },
  {
    itemId: 2,
    title: "KYCVerification",
    titleOnBar: "KYC Verification",
    icon: "kyc",
    component: KycVerification,
  },
  {
    itemId: 3,
    title: "Preferences",
    titleOnBar: "Preferences",
    icon: "preferences",
    component: Preferences,
  },
  {
    itemId: 4,
    title: "Security",
    titleOnBar: "Security",
    icon: "security",
    component: Security,
  },
  {
    itemId: 5,
    title: "RecentDevices",
    titleOnBar: "Recent Devices",
    icon: "devices",
    component: RecentDevices,
  },
  {
    itemId: 6,
    title: "Notifications",
    titleOnBar: "Notifications",
    icon: "notifications",
    component: Notifications,
  },
  {
    itemId: 7,
    title: "ConnectedAccounts",
    titleOnBar: "Connected Accounts",
    icon: "connected",
    component: ConnectedAccounts,
  },
  {
    itemId: 8,
    title: "Referrals",
    titleOnBar: "Referrals",
    icon: "referrals",
    component: Referrals,
  },
  {
    itemId: 9,
    title: "DeactivateAcc",
    titleOnBar: "Deactivate A/C",
    icon: "deactivate",
    component: DeactivateAcc,
  },
];