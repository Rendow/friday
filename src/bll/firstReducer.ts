const LOADING_TYPE = 'LOADING_TYPE'

const initState = {

}
export type initStateType = {

}
export const firstReducer = (state:initStateType = initState, action: DispatchType): initStateType => {
    switch (action.type) {
        case LOADING_TYPE: {
            return state
        }
        default: return state
    }
}

export type DispatchType = loadingACType

type loadingACType = ReturnType<typeof loadingAC>

export const loadingAC = () => {
    return {type: LOADING_TYPE} as const
}