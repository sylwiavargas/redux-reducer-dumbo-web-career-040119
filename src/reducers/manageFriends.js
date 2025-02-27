export function manageFriends(state = {
    friends: [
      {
        name: 'Avi',
        hometown: 'NYC',
        id: 100
      }
    ],
  }, action){
    switch(action.type){
        case 'ADD_FRIEND':
            return {friends: [...state.friends, action.friend]}
        case 'REMOVE_FRIEND' :
                let newFriends = state.friends.filter(friend => {
                    return friend.id !== action.id
                })
                return {friends: newFriends}
        default:
            return state
    }
}
