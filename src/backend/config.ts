import firebase from 'firebase/compat/app'; //v9
import 'firebase/compat/firestore'; //v9

if(!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIRABESE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIRABESE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIRABESE_PROJECT_ID,
  })
}

export default firebase