import { supabase } from "../supabase/supabaseClient.js";

const allProjects = 'Всі проєкти'
export const getProject = (id) => new Promise((resolve, reject) => {
	try {
		supabase
			.from('projects')
			.select()
			.eq('id', id)
			.single()
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


export const getProjectPage = (value) => new Promise((resolve, reject) => {
	try {
		supabase
			.rpc(
				isNaN(value) && typeof (value) == 'string' ? 'get_project_page_by_alias' : 'get_project_page_by_id',
				isNaN(value) && typeof (value) == 'string' ? { _alias: value } : { _id: value })
			.then(response => {
				if (response.error) {
					reject(response.error.message)
				}
				resolve(response)
			})
			.catch(error => reject(error))
	} catch (e) {
		reject(e)
	}
})

export const selectProjects = (params) => new Promise((resolve, reject) => {
	const start = params?.start ?? 0
	const count = params?.count ?? 12
	const typeFilter = params?.typeFilter ?? null

	try {
		supabase.rpc(
			typeFilter !== null && typeFilter !== allProjects ?
				'select_projects_with_filters' :
				'select_projects',
			{
				start,
				count,
				typeFilter: typeFilter !== null && typeFilter !== allProjects ? typeFilter : undefined
			}
		)
			.then(response => {
				if (response.error) {
					reject(response.error.message)
				}
				resolve({ data: response.data, offset: count + start, typeFilter })
			})
			.catch(error => reject(error))

	} catch (e) {
		reject(e)
	}
})

export const getProjectCount = ({ queryKey }) => new Promise((resolve, reject) => {
	const select = queryKey[1] === allProjects
		? supabase
			.from('projects')
			.select('*', { count: 'exact', head: true })
		: supabase
			.from('projects')
			.select('*', { count: 'exact', head: true })
			.eq('type', queryKey[1])

	try {
		select
			.then(response => {
				if (response.error) {
					reject(response.error.message)
				}
				resolve(response.count)
			})
			.catch(error => reject(error))

	} catch (e) {
		reject(e)
	}
})