function feebackReducer(state = { status: false, feedbacks: [] }, actions) {
    switch (actions.type) {
        case "GET_ALL_FEEDBACK":
            return {status:true,feedbacks:actions.payload}
        default:
            return {status:false,feedbacks:[]};

    }
}

export default feebackReducer;