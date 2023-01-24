import * as CONSTANT from 'src/constants/common';

export const fetchListSymbol = (payload) => {
	return {
		type: CONSTANT.FETCH_LIST_SYMBOL,
		payload: payload,
	};
};

export const fetchOrderHistory = (payload) => {
	return {
		type: CONSTANT.FETCH_HISTORY_ORDER,
		payload: payload,
	};
};

export const fetchSymbolPrice = (payload) => {
	return {
		type: CONSTANT.FETCH_SYMBOL_PRICE,
		payload: payload,
	};
};

export const startFetchSymbolPrice = (payload) => {
	return {
		type: CONSTANT.START_FETCH_SYMBOL_PRICE,
		payload: payload,
	};
};

export const fetchAccount = (payload) => {
	return {
		type: CONSTANT.FETCH_ACCOUNT,
		payload: payload,
	};
};
export const fetchCurrentOrder = (payload) => {
	return {
		type: CONSTANT.FETCH_CURRENT_ORDER,
		payload: payload,
	};
};
export const fetchOrderDetail = (payload) => {
	return {
		type: CONSTANT.FETCH_ORDER_DETAIL,
		payload: payload,
	};
};
