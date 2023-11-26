let firebaseConfig = {
       apiKey: "AIzaSyC6kd7dL3UsJpwzSUcPCkws9EDZouGoV0I",
        authDomain: "blogging-website-bd407.firebaseapp.com",
        projectId: "blogging-website-bd407",
        storageBucket: "blogging-website-bd407.appspot.com",
        messagingSenderId: "876203546895",
        appId: "1:876203546895:web:9c75ff3f9f72d84481c67a"
      };
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();