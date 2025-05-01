// import {initializeApp, getApps, cert} from 'firebase-admin/app';
// import { init } from 'next/dist/compiled/webpack/webpack';
// import { getFirestore as adminGetFirestore } from 'firebase-admin/firestore';
// import { getAuth as adminGetAuth } from 'firebase-admin/auth';
// const InitFirebaseAdmin = () => {
//     const apps= getApps();

//     if(!apps.length){
//         initializeApp({
//             credential: cert({
//                 projectId: process.env.FIREBASE_PROJECT_ID,
//                 clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
//                 privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
//             }),
//         });
//     }

// return{
//     auth: getAuth(),
//     db: getFirestore()
//     }
// }
// function getFirestore() {
//     return adminGetFirestore();
// }

// export const { auth, db } = InitFirebaseAdmin();

// function getAuth() {
//     return adminGetAuth();
// }
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore as adminGetFirestore } from 'firebase-admin/firestore';
import { getAuth as adminGetAuth } from 'firebase-admin/auth';

const InitFirebaseAdmin = () => {
    const apps = getApps();

    if (!apps.length) {
        // Initialize the Firebase Admin SDK only if there are no existing apps
        initializeApp({
            credential: cert({
                projectId: process.env.FIREBASE_PROJECT_ID,
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                privateKey: process.env.FIREBASE_PROJECT_KEY?.replace(/\\n/g, '\n'),
            }),
        });
    }
    console.log({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY,
    });
    return {
        auth: getAuth(),
        db: getFirestore()
    };
};

function getFirestore() {
    return adminGetFirestore();
}

function getAuth() {
    return adminGetAuth();
}

export const { auth, db } = InitFirebaseAdmin();

