import { supabase } from "../supabase/supabaseClient"

export const getPage = async (pageName) => new Promise((resolve, reject) => {
    try {
        supabase
            .from('pages')
            .select('id,name,block_ids')
            .match({ 'name': pageName })
            .single()
            .then(response => {
                if (response.error) {
                    reject(response.error);
                }
                resolve(response.data);
            })
            .catch(e => reject(e));
    } catch (e) {
        reject(e);        
    }

})

export const getPageBlocks = (pageName) => new Promise((resolve, reject) => {
    try {
        supabase
        .from('pages')
        .select('id, name, page_blocks ( block_id )')
        .eq('name', pageName)
        .single()
        .then(response => {
            if(response.error){
                reject(response.error.message)
            }
            const {data} = response
            resolve({id: data.id, name: data.name, blocks: data.page_blocks.map(b=>b.block_id)})    
        })
        .catch(error => reject(error))
        

    } catch (e) {
        reject(e)
    }
})
