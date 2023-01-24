
import { takeLeading, fork, put, call, select, take } from 'redux-saga/effects';

function* connectSocket(listSymbol) {
	
	// /* connect socket to Binance */
	// const channel = yield call(socketBinance.fetchPriceSymbol, listSymbol.payload); // Using websocket to get price data
	// const secondChannel = yield call(socketBinance.fetchPriceSymbolSecond, listSymbol.payload); // Using websocket to get price data
	// while (true) {
	// 	const action = yield take(channel);
	// 	yield put(action);
	// 	const secondAction = yield take(secondChannel);
	// 	yield put(secondAction);
	// }
}

export default function* rootSaga() {
	// yield takeLeading(CONSTANT.START_FETCH_SYMBOL_PRICE, connectSocket);
}
