import { supabase } from "../supabase/supabaseClient";

export const getOffer = (id) => new Promise((resolve, reject) => {
	try {
		supabase
			.from('offers')
			.select()
			.eq('id', id)
			.then(({ data, error }) => {
				if (error) {
					reject(error);
				}
				resolve(data);
			})
			.catch(error => reject(error))
	} catch (e) {
		reject(e)
	}
})

export const getOffers = () => new Promise((resolve, reject) => {
	try {
		supabase
			.from('offers')
			.select()
			.eq('is_published', true)
			.then(({ data, error }) => {
				if (error) {
					reject(error);
				}
				resolve(data);
			})
			.catch(error => reject(error))
	} catch (e) {
		reject(e)
	}
})

export const getOfferWithBlocks = (id) => new Promise((resolve, reject) => {
	try {
		supabase.rpc('get_offer_with_blocks', {_id:id})
			.then(({ data, error }) => {
				if (error) {
					reject(error);
				}
				resolve(data);
			})
			.catch(error => reject(error))
	} catch (e) {
		reject(e)
	}
})