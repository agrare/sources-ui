const asyncActions = [
    'LOAD_ENTITIES',
    'CREATE_SOURCE',
    'REMOVE_SOURCE',
    'LOAD_SOURCE_TYPES'
].reduce((acc, curr) => [
    ... acc,
    ...[curr, `${curr}_PENDING`, `${curr}_FULFILLED`, `${curr}_REJECTED`]
], []);

export const ACTION_TYPES = [
    ...asyncActions
]
.reduce((acc, curr) => {
    acc[curr] = curr;
    return acc;
},
{}
);

export const SELECT_ENTITY = 'SELECT_ENTITY';
export const EXPAND_ENTITY = 'EXPAND_ENTITY';
export const SORT_ENTITIES = 'SORT_ENTITIES';
export const PAGE_AND_SIZE = 'PAGE_AND_SIZE';
export const ADD_PROVIDER  = 'ADD_PROVIDER';
export const FILTER_PROVIDERS  = 'FILTER_PROVIDERS';
export const SET_FILTER_COLUMN = 'SET_FILTER_COLUMN';
export const CLOSE_ALERT  = 'CLOSE_ALERT';
export const ADD_ALERT  = 'ADD_ALERT';
export const SOURCE_EDIT_REQUEST = 'SOURCE_EDIT_REQUEST';
export const SOURCE_FOR_EDIT_LOADED = 'SOURCE_FOR_EDIT_LOADED';
