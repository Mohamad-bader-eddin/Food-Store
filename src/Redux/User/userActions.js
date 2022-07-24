import db, { auth } from "../../Firebase/config";
import {
    USER_ADD_FAIL,
    USER_ADD_REQUEST,
    USER_ADD_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT_FAIL,
    USER_LOGOUT_REQUEST,
    USER_LOGOUT_SUCCESS,
} from "./userTypes";
import {
    addDoc,
    collection,
    serverTimestamp,
} from "firebase/firestore";
import { toast } from "react-toastify";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    setPersistence,
    browserLocalPersistence,
    updateProfile,
    browserSessionPersistence,
    onAuthStateChanged,

} from "firebase/auth";

const addUserRequest = () => {
    return {
        type: USER_ADD_REQUEST,
    };
};

const addUserSucces = () => {
    return {
        type: USER_ADD_SUCCESS,
    };
};

const addUserFail = (error) => {
    return {
        type: USER_ADD_FAIL,
        payload: error,
    };
};

const userLoginRequest = () => {
    return {
        type: USER_LOGIN_REQUEST,
    };
};

const userLoginSucces = (user) => {
    return {
        type: USER_LOGIN_SUCCESS,
        payload: user,
    };
};

const userLoginFail = (error) => {
    return {
        type: USER_LOGIN_FAIL,
        payload: error,
    };
};


const userLogoutRequest = () => {
    return {
        type: USER_LOGOUT_REQUEST
    }
}

const userLogoutSuccess = () => {
    return {
        type: USER_LOGOUT_SUCCESS
    }
}

const userLogoutFail = error => {
    return {
        type: USER_LOGOUT_FAIL,
        payload: error
    }
}

export const addUser = (user) => (dispatch) => {
    dispatch(addUserRequest());
    createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((cred) => {
            console.log("user created :", cred.user);
            updateProfile(cred.user, { displayName: user.fname })
            const newUser = {
                email: user.email,
                fname: user.fname,
                lname: user.lname,
                address: user.address,
                birthDate: user.birthDate,
                phone: user.phone,
                createAt: serverTimestamp(),
            };
            addDoc(collection(db, "users"), newUser);
            dispatch(addUserSucces());
            toast.success("You have been registered successfully", {
                position: "bottom-right",
                pauseOnHover: true,
                theme: "colored",
            });
        })
        .catch((error) => {
            const errMsg =
                error.response && error.response.data.message ?
                error.response.data.message :
                error.message;
            dispatch(addUserFail(errMsg));
            toast.error(errMsg, {
                position: "bottom-right",
                pauseOnHover: true,
                theme: "colored",
            });
        });
};

export const loginLocal = (user) => (dispatch) => {
    const email = user.email;
    const password = user.password;

    dispatch(userLoginRequest());
    setPersistence(auth, browserLocalPersistence)
        .then(async() => {
            return signInWithEmailAndPassword(auth, email, password)
                .then(cred => dispatch(userLoginSucces(cred.user)))
                .catch(error => {
                    const errMsg =
                        error.response && error.response.data.message ?
                        error.response.data.message :
                        error.message;
                    dispatch(userLoginFail(errMsg));
                    toast.error(errMsg, {
                        position: "bottom-right",
                        pauseOnHover: true,
                        theme: "colored",
                    });
                })
        })
};


export const loginSession = (user) => (dispatch) => {
    const email = user.email;
    const password = user.password;

    dispatch(userLoginRequest());
    setPersistence(auth, browserSessionPersistence)
        .then(async() => {
            return signInWithEmailAndPassword(auth, email, password)
                .then(cred => { dispatch(userLoginSucces(cred.user)) })
                .catch(error => {
                    const errMsg =
                        error.response && error.response.data.message ?
                        error.response.data.message :
                        error.message;
                    dispatch(userLoginFail(errMsg));
                    toast.error(errMsg, {
                        position: "bottom-right",
                        pauseOnHover: true,
                        theme: "colored",
                    });
                })
        })
};


export const logout = () => async dispatch => {
    dispatch(userLogoutRequest())
    signOut(auth)
        .then(() => {
            dispatch(userLogoutSuccess())
        })
        .catch(error => {
            const errMsg =
                error.response && error.response.data.message ?
                error.response.data.message :
                error.message;
            dispatch(userLogoutFail(errMsg));
            toast.error(errMsg, {
                position: "bottom-right",
                pauseOnHover: true,
                theme: "colored",
            });
        })
}

export const authState = () => async dispatch => {
    dispatch(userLoginRequest())
    onAuthStateChanged(auth, currentUser => {
            dispatch(userLoginSucces(currentUser))
        },
        (err) => {
            dispatch(userLoginFail(err))
        }
    )
}