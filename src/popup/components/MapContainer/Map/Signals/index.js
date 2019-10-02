import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import classnames from 'classnames';
import rootStore from '../../../../stores';
import './signals.pcss';

const index = observer((globalProxyEnabled) => {
    const { settingsStore } = useContext(rootStore);

    const mapSignalStatus = classnames({
        'signals--active': settingsStore.extensionEnabled && !settingsStore.ping,
    });

    const fill = globalProxyEnabled ? 'rgba(0, 76, 51, 0.2)' : 'rgba(50, 50, 50, 0.2)';

    return (
        <g className={`signals ${mapSignalStatus}`}>
            <circle
                className="signals__marker-1"
                cx={0}
                cy={0}
                r={0}
                fill={fill}
            />
            <circle
                className="signals__marker-2"
                cx={0}
                cy={0}
                r={0}
                fill={fill}
            />
            <circle
                className="signals__marker-3"
                cx={0}
                cy={0}
                r={0}
                fill={fill}
            />
            <circle
                className="signals__marker-4"
                cx={0}
                cy={0}
                r={0}
                fill={fill}
            />
        </g>
    );
});

export default index;
