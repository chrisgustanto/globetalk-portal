import { NotificationManager } from 'react-notifications';

export const INITIAL_LOADING = 'initial_loading';
export const FIRE_AUTH = 'fire_auth';
export const FIRE_REGI_ERROR = 'fire_regi-error';



export const firebaseRegister = (email, password, role) => (dispatch, getState, firebase) => {
  console.log(firebase);
  firebase.auth.createUserWithEmailAndPassword(email, password)
    .then((user) => {
      console.log(user);
      user.sendEmailVerification()
        .catch((error) => {
          console.log(error);
        });
      firebase.db.ref('users/'+user.uid).set({
        username: user.email,
        role: role
      });
      NotificationManager.success('User Created! Please Verify Your Email','',5000, dispatch({
        type: FIRE_AUTH,
        payload: user
      }));
    })
    .catch((error) => {
      console.log(error);
      NotificationManager.error(error.message, '', 4000);
    });
};

export const updateAuthChange = (user) => dispatch => dispatch({type:FIRE_AUTH, payload: user});
export const removeLoader = () => dispatch => dispatch({type:INITIAL_LOADING, payload: false});
