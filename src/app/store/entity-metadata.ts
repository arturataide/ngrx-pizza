import { EntityMetadataMap } from '@ngrx/data';
import { nameFilter, sortByName } from './filters/index';

const entityMetadata: EntityMetadataMap = {
    Pizza: {
        /* optional settings */
        filterFn: nameFilter,
        sortComparer: sortByName,
    },
};

const pluralNames = {
    // Case matters. Match the case of the entity name.
    Pizza: 'Pizzas',
};

export const entityConfig = {
    entityMetadata,
    pluralNames
}
