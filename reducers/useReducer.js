export const initialState = null;

export const reducer = (state, action) => {
    if (action.type === "COMPLETED") {
        return action.payload;
    }
    if (action.type === "UNCOMPLETED") {
        return null
    }
}