import { db } from './conexionBD';
import { collection, getDocs } from 'firebase/firestore';

const testFirestore = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "testCollection"));
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        });
    } catch (error) {
        console.error("Error al conectar con Firestore: ", error);
    }
};

testFirestore();
