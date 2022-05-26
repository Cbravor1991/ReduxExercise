type undoAction = {
    type: 'UNDO'
}
export const undo = (): undoAction =>({
    type: 'UNDO'
});