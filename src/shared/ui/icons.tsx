import { forwardRef } from "react";
import type { Icon as IconComponent, IconProps } from "iconsax-react";
import {
  Add as AddIcon,
  AddSquare as AddSquareIcon,
  Additem as AdditemIcon,
  ArrowDown2 as ArrowDown2Icon,
  ArrowLeft2 as ArrowLeft2Icon,
  Box1 as Box1Icon,
  Buildings2 as Buildings2Icon,
  Calendar1 as Calendar1Icon,
  CalendarTick as CalendarTickIcon,
  Edit as EditIcon,
  Global as GlobalIcon,
  HambergerMenu as HambergerMenuIcon,
  I3Dcube as I3DcubeIcon,
  Layer as LayerIcon,
  Location as LocationIcon,
  Lock1 as Lock1Icon,
  LogoutCurve as LogoutCurveIcon,
  Minus as MinusIcon,
  Notification as NotificationIcon,
  People as PeopleIcon,
  Personalcard as PersonalcardIcon,
  Profile as ProfileIcon,
  Profile2User as Profile2UserIcon,
  ProfileTick as ProfileTickIcon,
  Setting2 as Setting2Icon,
  Trash as TrashIcon,
} from "iconsax-react";

/**
 * iconsax-react sets its defaults (size 24, currentColor, Linear) with
 * `defaultProps`, which React 19 ignores. Without them an icon renders with no
 * width (the SVG stretches to fill its parent) and no stroke colour.
 *
 * Import icons from here instead of "iconsax-react" so the defaults are passed
 * explicitly. To use a new icon, add it to the import above and export it
 * below with `withDefaults`.
 */
function withDefaults(Icon: IconComponent) {
  const Wrapped = forwardRef<SVGSVGElement, Omit<IconProps, "ref">>(function IconWithDefaults(
    { variant = "Linear", color = "currentColor", size = "24", ...rest },
    ref
  ) {
    return <Icon ref={ref} variant={variant} color={color} size={size} {...rest} />;
  });
  Wrapped.displayName = Icon.displayName;
  return Wrapped;
}

export const Add = withDefaults(AddIcon);
export const AddSquare = withDefaults(AddSquareIcon);
export const Additem = withDefaults(AdditemIcon);
export const ArrowDown2 = withDefaults(ArrowDown2Icon);
export const ArrowLeft2 = withDefaults(ArrowLeft2Icon);
export const Box1 = withDefaults(Box1Icon);
export const Buildings2 = withDefaults(Buildings2Icon);
export const Calendar1 = withDefaults(Calendar1Icon);
export const CalendarTick = withDefaults(CalendarTickIcon);
export const Edit = withDefaults(EditIcon);
export const Global = withDefaults(GlobalIcon);
export const HambergerMenu = withDefaults(HambergerMenuIcon);
export const I3Dcube = withDefaults(I3DcubeIcon);
export const Layer = withDefaults(LayerIcon);
export const Location = withDefaults(LocationIcon);
export const Lock1 = withDefaults(Lock1Icon);
export const LogoutCurve = withDefaults(LogoutCurveIcon);
export const Minus = withDefaults(MinusIcon);
export const Notification = withDefaults(NotificationIcon);
export const People = withDefaults(PeopleIcon);
export const Personalcard = withDefaults(PersonalcardIcon);
export const Profile = withDefaults(ProfileIcon);
export const Profile2User = withDefaults(Profile2UserIcon);
export const ProfileTick = withDefaults(ProfileTickIcon);
export const Setting2 = withDefaults(Setting2Icon);
export const Trash = withDefaults(TrashIcon);
