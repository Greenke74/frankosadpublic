import { supabase } from "../supabase/supabaseClient.js";

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

export const getProjectWithBlocksById = (id) => new Promise((resolve, reject) => {
	try {

		supabase.rpc('get_project_with_blocks_by_id', {_id: id})
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


export const getProjectPage = (value) => new Promise((resolve, reject) => {
  try {
    supabase
    .rpc(
      isNaN(value) && typeof(value) == 'string' ? 'get_project_page_by_alias' : 'get_project_page_by_id', 
      isNaN(value) && typeof(value) == 'string' ? {_alias: value} : {_id: value})
    .then(response => {
      if (response.error  ) {
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
  try {
      supabase.rpc(params.typeFilter != null ? 'select_projects_with_filters' : 'select_projects', params)
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