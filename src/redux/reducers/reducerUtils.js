function convertActionNameToLowerCase(actionName) {
    return actionName.toLowerCase().replace(/_(\w)/g, v => v[1].toUpperCase())
}
export default function execHandler(state, action, handlers) {//action.type='ADD_PUPIL'
    debugger;
    let key = convertActionNameToLowerCase(action.type)//->'addPupil'
    let handler = handlers[key]
    if (handler)
        handler(state, action)
}