export interface TabItem {
  itemId: number;
  title: string;
  icon: string;
  extraIcon: string;
  path:string;
}

export const tabs: TabItem[] = [

 {
  itemId:1,
  title:"Dashboard",
  icon:"dashboard",
  extraIcon:"",
  path:"/dashboard",
 },
 {
  itemId:2,
  title:"Portfolio",
  icon:"portfolio",
  extraIcon:"",
  path:"/portfolio",
 },
 {
  itemId:3,
  title:"Market",
  icon:"market",
  extraIcon:"",
  path:"/market",
 },
 {
  itemId:4,
  title:"Transcations",
  icon:"transactions",
  extraIcon:"",
  path:"/transactions"
 },
 {
  itemId:5,
  title:"Deposit",
  icon:"deposit",
  extraIcon:"",
  path:"/deposit"
 },
 {
  itemId:6,
  title:"Transfer",
  icon:"transfer",
  extraIcon:"caret",
  path:"/transfer",
 },
 {
  itemId:7,
  title:"Address Book",
  icon:"addressbook",
  extraIcon:"",
  path:"/addressBook",
 },
 {
  itemId:8,
  title:"Withdraw",
  icon:"withdraw",
  extraIcon:"",
  path:"/withdraw"
 },
 {
  itemId:9,
  title:"Settings",
  icon:"settings",
  extraIcon:"",
  path:"/settings"
 }
]