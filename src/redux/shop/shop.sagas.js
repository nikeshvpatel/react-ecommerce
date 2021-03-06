import {takeLatest, call, put, all} from 'redux-saga/effects';
import ShopActionTypes from "./shop.type";
import {fetchCollectionsFailure, fetchCollectionsSuccess} from "./shop.actions";
import {convertCollectionSnapshotToMap, firestore} from "../../firebase/firebase.utils";


export function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (e) {
        yield put(fetchCollectionsFailure(e.message));
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSagas(){
    yield all([call(fetchCollectionsStart)])
}