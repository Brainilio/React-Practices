import { initStore } from "./store"

const configureStore = () => {
	const actions = {
		TOGGLE_FAV: (curState) => {
			const prodIndex = curState.products.findIndex((p) => p.id === productId)
			const newFavStatus = !curState.products[prodIndex].isFavorite
			const updateProducts = [...curState.products]
			updateProducts[prodIndex] = {
				...curState.products[prodIndex],
				isFavorite: newFavStatus,
			}

			return {
				products: curState.products,
			}
		},
	}
	initStore()
}
