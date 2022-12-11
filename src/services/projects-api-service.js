import { supabase } from "../supabase/supabaseClient.js";

export const getProject = (alias) => new Promise((resolve, reject) => {
	try {
		supabase
			.from('projects')
			.select()
			.single()
			.eq('alias', alias)
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

export const getProjectBlocks = (alias) => new Promise((resolve, reject) => {
	try {
		supabase.rpc('get_project_with_blocks', {_alias: alias})
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