<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBY63ekYEehv-fE9pwtMZYXPoC25hSlqM4",
    authDomain: "threatdetection-e0429.firebaseapp.com",
    projectId: "threatdetection-e0429",
    storageBucket: "threatdetection-e0429.firebasestorage.app",
    messagingSenderId: "104282839467",
    appId: "1:104282839467:web:931d055de59b825f9bdaee",
    measurementId: "G-6FNT41KBS6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>