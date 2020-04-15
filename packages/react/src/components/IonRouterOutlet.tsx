
import { JSX as LocalJSX } from '@ionic/core';
import React from 'react';

import { NavContext } from '../contexts/NavContext';

import { IonicReactProps } from './IonicReactProps';
import { IonRouterOutletInner } from './inner-proxies';
import { createForwardRef } from './utils';

type Props = LocalJSX.IonRouterOutlet & {
  ionPageContainer?: boolean;
  ref?: React.RefObject<any>;
};

type InternalProps = Props & {
  forwardedRef?: React.RefObject<HTMLIonRouterOutletElement>;
};

const IonRouterOutletContainer = /*@__PURE__*/(() => class extends React.Component<InternalProps> {
  context!: React.ContextType<typeof NavContext>;

  render() {

    const StackManager = this.context.getStackManager();

    return (
      this.context.hasIonicRouter() && this.props.ionPageContainer ? (
        <StackManager routeInfo={this.context.routeInfo}>
          <IonRouterOutletInner {...this.props}>
            {this.props.children}
          </IonRouterOutletInner>
        </StackManager>
      ) : (
          <IonRouterOutletInner ref={this.props.forwardedRef} {...this.props}>
            {this.props.children}
          </IonRouterOutletInner>
        )
    );
  }

  static get contextType() {
    return NavContext;
  }
})();

export const IonRouterOutlet = createForwardRef<Props & IonicReactProps, HTMLIonRouterOutletElement>(IonRouterOutletContainer, 'IonRouterOutlet');
