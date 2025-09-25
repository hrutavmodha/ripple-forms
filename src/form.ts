import { track } from 'ripple';

export const createForm = () => {
    const state = track({
        values: {},
        errors: {},
    })
    const onChange = (name, value) => {
        if (state === null) {
            state['#v'].values = {
                name: name,
                value: value
            }
        }
    }
    return {
        ...state,
        onChange,
    }
}
