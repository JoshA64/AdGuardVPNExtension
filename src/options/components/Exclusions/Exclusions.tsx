import React, { useContext } from 'react';
import { observer } from 'mobx-react';

import { rootStore } from '../../stores';
import { Title } from '../ui/Title';
import { ModeSelectorModal } from './ModeSelectorModal';
import { Actions } from './Actions';
import { List } from './List';
import { AddExclusionModal } from './ExclusionsModal/AddExclusionsModal';
import { ConfirmAddModal } from './ExclusionsModal/ConfirmAddModal';
import { ChildrenList } from './ChildrenList';
import { ExclusionsSearch } from './Search/ExclusionsSearch';
import { translator } from '../../../common/translator';
import { ExclusionsModes } from '../../../common/exclusionsConstants';
import { reactTranslator } from '../../../common/reactTranslator';

import './exclusions.pcss';

export const Exclusions = observer(() => {
    const { exclusionsStore } = useContext(rootStore);

    if (exclusionsStore.selectedExclusion) {
        return (
            <ChildrenList />
        );
    }

    const openModeSelectorModal = () => {
        exclusionsStore.setModeSelectorModalOpen(true);
    };

    const mode = exclusionsStore.currentMode === ExclusionsModes.Regular
        ? reactTranslator.getMessage('settings_exclusion_general_title')
        : reactTranslator.getMessage('settings_exclusion_selective_title');

    const modeDescription = exclusionsStore.currentMode === ExclusionsModes.Regular
        ? reactTranslator.getMessage('settings_exclusion_general_description')
        : reactTranslator.getMessage('settings_exclusion_selective_description');

    const onAddExclusionClick = () => {
        exclusionsStore.openAddExclusionModal();
    };

    return (
        <div className="settings">
            <div className="exclusions__mode">
                <Title
                    title={translator.getMessage('settings_exclusion_title')}
                />
                <div className="exclusions__mode__info">
                    <span className="exclusions__mode__title">{mode}</span>
                    <span>: </span>
                    <span>{modeDescription}</span>
                </div>
                <div>
                    <button
                        type="button"
                        className="exclusions__mode__change-mode-btn simple-button"
                        onClick={openModeSelectorModal}
                    >
                        {translator.getMessage('settings_exclusion_change_mode')}
                    </button>
                </div>
                <Actions />
            </div>
            <div>
                <div className="exclusions__search">
                    <ExclusionsSearch />
                </div>
                <button
                    type="button"
                    className="exclusions__add-website simple-button"
                    onClick={onAddExclusionClick}
                >
                    <svg className="icon icon--button">
                        <use xlinkHref="#plus" />
                    </svg>
                    {reactTranslator.getMessage('settings_exclusion_add_website')}
                </button>
                <List />
                <AddExclusionModal />
                <ConfirmAddModal />
            </div>
            <ModeSelectorModal />
        </div>
    );
});
