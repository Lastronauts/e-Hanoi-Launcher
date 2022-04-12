import { EmailAuthProvider, GithubAuthProvider } from 'firebase/auth';
import FirebaseAuth from 'react-firebaseui/FirebaseAuth';
import { auth } from '../firebase/auth';

const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/',
  signInOptions: [
    EmailAuthProvider.PROVIDER_ID,
    GithubAuthProvider.PROVIDER_ID,
  ],
};

export default function Auth() {
  return (
    <div>
      <div>Please sign-in:</div>
      <FirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
    </div>
  );
}
