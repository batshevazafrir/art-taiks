// impor    t React from 'react';
// import { createReducer } from './reducerUtils'

function convertActionName(actionName) {//addPupil
    debugger
     return actionName.replace(/([A-Z])/g, "_$1").toUpperCase();//ADD_PUPIL
 }
 
 //let x=actions.addPupil(name="sasi",id="12345654")
 const actions = new Proxy(
     {},
     {
         get: function (target, prop) {//prop='addPupil'
            debugger;
             if (target[prop] === undefined)
                 return function (args) {//arge={name="sasi",id="12345654"}
                     return { type: convertActionName(prop), payload: args }//{type:"ADD_PUYPIL", payload:name="sasi",id="12345654"}
                 }
             else
                 return target[prop];
         },
 
     }
 )
 export default actions;
 