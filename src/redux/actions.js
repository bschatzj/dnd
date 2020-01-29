export const SET_STATS = "SET_STATS";

export const setStats = stats => dispatch => {
    console.log(stats)
    dispatch({ type: SET_STATS , payload: stats})
}