import { ReactElement } from "react";
import { IconType } from "react-icons";

export type AppEntryType = {
  closeModal?: () => void;
  children?: React.ReactNode;
  width?: number;
};

export type RouterType = {
  // width: number;
};

export type DimensionType = {
  width: number;
  height: number;
};
export type CountryInfo = {
  name: string;
  flag: any;
  iso: string;
};

export type UserType = {
  fullName: string;
  email: string;
  password: string;
  countryInfo: CountryInfo;
};
export type EmailType = {
  emailFromUser: string;
};

export type ImageType = [];

export type AppInputType = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  fFamily?: string;
  fWeight?: number;
  color?: string;
  w?: string;
  h?: number;
  mTop?: number;
  mBottom?: number;
  mAll?: number;
  mRight?: number;
  bRadius?: number;
  pAll?: number;
  pLeft?: number;
  pRight?: number;
  bColor?: string;
  bWidth?: number;
  pHolder: string;
};

export type AppButtonType = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  bgColor: string;
  mTop?: number;
  mBottom?: number;
  mLeft?: number;
  mRight?: number;
  fWeight?: number;
  bRadius?: number;
  bRadiusColor?: string;
  icon?: React.ReactNode;
  width?: string;
  height?: string;
  onClickButton?: () => void;
  disabled?: boolean;
  // color: string;
};

export type AppEntrySliceType = {
  showModal: boolean;
  showToast: boolean;
  appTitle: string;
  appBody: any;
};

export type CardContent = {
  title: string;
  description: string;
  imageUrl: string;
  linkText: string;
};

export type CountryData = {
  name: string;
  flag: string;
  iso2: string;
  dial_code: string;
};

export type UserState = {
  isLoggedIn: boolean;
  firstName: string;
  lastName: string;
  email: string;
  country: CountryData | null;
  mobile: string;
  userType: string;
  agreedToTerms: boolean;
  password: string;
  middleName: string;
  profilePicture: string;
  nameInitials: string;
};

export type SectionProps = {
  title: string;
  children: React.ReactNode;
  viewAll?: boolean;
};

export type NotificationItemProps = {
  text: string;
  description: string;
};

export type TaskItemProps = {
  text: string;
  description?: string;
  icon?: ReactElement;
};

export type MentorItemProps = {
  name: string;
  followers: string;
};

export type SettingItem = {
  icon: IconType;
  title: string;
  description?: string;
  type?: "toggle" | "action";
  action?: () => void;
};

export type SettingsGroup = {
  title: string;
  items: SettingItem[];
};

export type SettingsSectionProps = {
  groups: SettingsGroup[];
};

export type NotificationItem = {
  title: string;
  description?: string;
  status: "read" | "unread";
  action?: () => void;
};

export type NotificationsGroup = {
  title: string;
  items: NotificationItem[];
};

export type NotificationsSectionProps = {
  groups: NotificationsGroup[];
};
