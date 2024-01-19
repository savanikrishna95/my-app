export const IncNumber = () => {
   
    return {
    type : "INCREMENT"
    }
}

export const DecNumber = () => {
    return {
    type : "DECREMENT"
    }
}

export const changetext = (input) => {
    return {
        type : "text",
        text : input
        }
}