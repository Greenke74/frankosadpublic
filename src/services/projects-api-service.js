import { supabase } from "../supabase/supabaseClient.js";

export const getProject = (id) => new Promise((resolve, reject) => {
	try {
		supabase
			.from('projects')
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

export const getProjects = () => new Promise((resolve, reject) => {
	try {
		supabase
			.from('projects')
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

export const getProjectWithBlocks = (id) => new Promise((resolve, reject) => {
	try {
		supabase.rpc('get_project_with_blocks', {_id:id})
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