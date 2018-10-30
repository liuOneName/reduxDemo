export const CHANGE_COLOR = 'CHANGE_COLOR';

export const changeColor = function(color){
    return {
        type: CHANGE_COLOR,
        payload: color,
    }
}