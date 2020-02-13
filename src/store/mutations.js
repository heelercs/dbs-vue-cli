const copyModuleOptionOneToOptionTwo = ((state) => {
    const stateToCopy = JSON.parse(JSON.stringify(state['optionOne']))
    Object.assign(state['optionTwo'], stateToCopy)
    alert('Copied to Option 2!')
})

const mutate = ((state, payload) => {
    state[payload.property] = payload.with
})

const mutateUserInfo = ((state, payload) => {
    state.userInfo[payload.property] = payload.with
})

const mutations = {
    copyModuleOptionOneToOptionTwo,
    mutate,
    mutateUserInfo,
}

export default mutations