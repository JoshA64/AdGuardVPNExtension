import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import classnames from 'classnames';

import { rootStore } from '../../stores';

import GlobalControl from './GlobalControl';
import Status from './Status';

import './settings.pcss';

const Settings = observer(() => {
    const { settingsStore, vpnStore } = useContext(rootStore);

    const {
        isConnected,
    } = settingsStore;

    const {
        premiumPromoEnabled,
        isPremiumToken,
    } = vpnStore;

    const settingsClass = classnames(
        'settings',
        { 'settings--active': isConnected },
        { 'settings--premium-promo': premiumPromoEnabled },
        { 'settings--trial': !isPremiumToken },
        { 'settings--feedback': !premiumPromoEnabled },
    );

    return (
        <div className={settingsClass}>
            <div className="settings__pic" />
            <div className="settings__main">
                <Status />
                <GlobalControl />
            </div>
        </div>
    );
});

export default Settings;
