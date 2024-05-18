import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
apiKey: "AIzaSyC-RFO2Rnmx_ONHKTTnUhB16Pd1lA6Hy2Q",
authDomain: "kids-python-ec856.firebaseapp.com",
projectId: "kids-python-ec856",
storageBucket: "kids-python-ec856.appspot.com",
messagingSenderId: "586699671418",
appId: "1:586699671418:web:fc697107407af8138c38c3",
measurementId: "G-LZMHKB670K",
databaseURL: "https://kids-python-ec856-default-rtdb.firebaseio.com/"
};



const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
