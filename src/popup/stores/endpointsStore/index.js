import {
    action,
    computed,
    observable,
    runInAction,
} from 'mobx';
import bgProvider from '../../../lib/background-provider';
import { REQUEST_STATES } from '../consts';

class EndpointsStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @observable endpoints;

    @observable endpointsGetState;

    @observable selectedEndpoint;

    @observable searchValue = '';

    @action
    setSearchValue = (value) => {
        const trimmed = value.trim();
        if (trimmed !== this.searchValue) {
            this.searchValue = value;
        }
    };

    @action fetchEndpoints = async () => {
        try {
            this.endpointsGetState = REQUEST_STATES.PENDING;
            const endpointsData = await bgProvider.provider.getEndpoints();
            runInAction(() => {
                this.endpoints = endpointsData;
                this.endpointsGetState = REQUEST_STATES.DONE;
            });
        } catch (e) {
            console.log(e);
            this.endpointsGetState = REQUEST_STATES.ERROR;
        }
    };

    @action
    setSelectedEndpoint = async (id) => {
        const selectedEndpoint = this.endpoints[id];
        await bgProvider.proxy.setCurrentEndpoint(selectedEndpoint);
        runInAction(() => {
            this.selectedEndpoint = selectedEndpoint;
            this.rootStore.tooltipStore.setMapCoordinatesDefault();
        });
    };

    @action
    getSelectedEndpoint = async () => {
        const endpoint = await bgProvider.proxy.getCurrentEndpoint();
        runInAction(() => {
            this.selectedEndpoint = endpoint;
        });
    };

    @computed
    get filteredEndpoints() {
        if (!this.endpoints) {
            return [];
        }
        return Object.values(this.endpoints).filter((endpoint) => {
            if (!this.searchValue || this.searchValue.length === 0) {
                return true;
            }
            const regex = new RegExp(this.searchValue, 'ig');
            return endpoint.cityName && endpoint.cityName.match(regex);
        }).map((endpoint) => {
            if (this.selectedEndpoint && this.selectedEndpoint.id === endpoint.id) {
                return { ...endpoint, selected: true };
            }
            return endpoint;
        });
    }
}

export default EndpointsStore;
