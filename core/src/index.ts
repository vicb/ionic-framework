import 'ionicons';

export { createAnimation } from './utils/animation/animation';
export { iosTransitionAnimation } from './utils/transition/ios.transition';
export { mdTransitionAnimation } from './utils/transition/md.transition';
export { getTimeGivenProgression } from './utils/animation/cubic-bezier';
export { createGesture } from './utils/gesture';
export { isPlatform, Platforms, getPlatforms } from './utils/platform';
export { IonicSafeString } from './utils/sanitization';
export { IonicConfig, getMode, setupConfig } from './utils/config';
export { LIFECYCLE_WILL_ENTER, LIFECYCLE_DID_ENTER, LIFECYCLE_WILL_LEAVE, LIFECYCLE_DID_LEAVE, LIFECYCLE_WILL_UNLOAD } from './components/nav/constants';
export { menuController } from './utils/menu-controller';
export { alertController, actionSheetController, modalController, loadingController, pickerController, popoverController, toastController } from './utils/overlays';

// Components interfaces
import { Components as IoniconsComponents, JSX as IoniconsJSX } from 'ionicons';
export type * from './components';
export type * from './index';
export type * from './components/alert/alert-interface';
export type * from './components/action-sheet/action-sheet-interface';
export type * from './components/content/content-interface';
export type * from './components/checkbox/checkbox-interface';
export type * from './components/datetime/datetime-interface';
export type * from './components/input/input-interface';
export type * from './components/loading/loading-interface';
export type * from './components/menu/menu-interface';
export type * from './components/modal/modal-interface';
export type * from './components/nav/nav-interface';
export type * from './components/picker/picker-interface';
export type * from './components/popover/popover-interface';
export type * from './components/radio-group/radio-group-interface';
export type * from './components/range/range-interface';
export type * from './components/router/utils/interface';
export type * from './components/refresher/refresher-interface';
export type * from './components/reorder-group/reorder-group-interface';
export type * from './components/searchbar/searchbar-interface';
export type * from './components/segment/segment-interface';
export type * from './components/select/select-interface';
export type * from './components/select-popover/select-popover-interface';
export type * from './components/spinner/spinner-interface';
export type * from './components/tab-bar/tab-bar-interface';
export type * from './components/textarea/textarea-interface';
export type * from './components/toast/toast-interface';
export type * from './components/toggle/toggle-interface';
export type * from './components/virtual-scroll/virtual-scroll-interface';

// Types from utils
export type { Animation, AnimationBuilder, AnimationCallbackOptions, AnimationDirection, AnimationFill, AnimationKeyFrames, AnimationLifecycle } from './utils/animation/animation-interface';
export type * from './utils/overlays-interface';
export type * from './global/config';
export type { Gesture, GestureConfig, GestureDetail } from './utils/gesture';

// From: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
export type AutocompleteTypes = (
| 'on' | 'off' | 'name' | 'honorific-prefix' | 'given-name' | 'additional-name' | 'family-name' | 'honorific-suffix'
| 'nickname' | 'email' | 'username' | 'new-password' | 'current-password' | 'one-time-code' | 'organization-title' | 'organization'
| 'street-address' | 'address-line1' | 'address-line2' | 'address-line3' | 'address-level4' | 'address-level3' | 'address-level2'
| 'address-level1' | 'country' | 'country-name' | 'postal-code' | 'cc-name' | 'cc-given-name' | 'cc-additional-name' | 'cc-family-name'
| 'cc-family-name' | 'cc-number' | 'cc-exp' | 'cc-exp-month' | 'cc-exp-year' | 'cc-csc' | 'cc-type' | 'transaction-currency' | 'transaction-amount'
| 'language' | 'bday' | 'bday-day' | 'bday-month' | 'bday-year' | 'sex' | 'tel' | 'tel-country-code' | 'tel-national' | 'tel-area-code' | 'tel-local'
| 'tel-extension' | 'impp' | 'url' | 'photo');


export type TextFieldTypes = 'date' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url' | 'time' | 'week' | 'month' | 'datetime-local';
export type Side = 'start' | 'end';
export type PredefinedColors = 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'danger' | 'light' | 'medium' | 'dark';
export type Color = PredefinedColors | string;
export type Mode = "ios" | "md";
export type ComponentTags = string;
export type ComponentRef = Function | HTMLElement | string | null;
export type ComponentProps<T = null> = {[key: string]: any};
export type CssClassMap = { [className: string]: boolean };
export type BackButtonEvent = CustomEvent<BackButtonEventDetail>;

export interface FrameworkDelegate {
  attachViewToDom(container: any, component: any, propsOrDataObj?: any, cssClasses?: string[]): Promise<HTMLElement>;
  removeViewFromDom(container: any, component: any): Promise<void>;
}

export interface BackButtonEventDetail {
  register(priority: number, handler: (processNextHandler: () => void) => Promise<any> | void): void;
}

export interface KeyboardEventDetail {
  keyboardHeight: number;
}

export interface StyleEventDetail {
  [styleName: string]: boolean;
}

export { NavComponentWithProps } from "./components/nav/nav-interface";

declare module "./components" {
  export namespace Components {
    export interface IonIcon extends IoniconsComponents.IonIcon{}
  }
}

declare module "./components" {
  export namespace JSX {
    export interface IonIcon extends IoniconsJSX.IonIcon {}
  }
}
