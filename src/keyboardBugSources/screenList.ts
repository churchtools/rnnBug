import PersonDetails from './PersonDetails';
import EditPerson from './EditPerson';

export const screenList = {
    PersonDetails,
    EditPerson
};

export type ScreenList = typeof screenList;
export const SCREEN_NAME_PREFIX = 'churchtoolsmobile.';
export type ScreenName = keyof ScreenList;
export type ScreenNameWithPrefix = `${typeof SCREEN_NAME_PREFIX}${ScreenName}`
