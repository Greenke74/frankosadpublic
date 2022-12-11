import { supabase } from "../supabase/supabaseClient";

export const getService = (id) => new Promise((resolve, reject) => {
	try {
		supabase
			.from('services')
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

export const getServices = () => new Promise((resolve, reject) => {
	try {
		supabase
			.from('services')
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

export const getServiceWithBlocks = (id) => new Promise((resolve, reject) => {
	try {
		supabase.rpc('get_service_with_blocks', {_id:id})
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