import React, { Fragment } from 'react';

import translator from '../../../lib/translator';
import Title from '../ui/Title';
import Mode from './Mode';
import './settings.pcss';
import '../ui/radio.pcss';

const Settings = () => (
    <Fragment>
        <Title title={translator.translate('settings_exclusion_title')} />
        <div className="settings">
            <Mode />
        </div>
    </Fragment>
);

export default Settings;
