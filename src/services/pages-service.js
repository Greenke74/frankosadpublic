import { supabase } from "../supabase/supabaseClient"


export const getPageBlocks = (pageName) => new Promise((resolve, reject) => {
    try {
        supabase
        .from('pages')
        .select('id, name, page_block ( id, block_id)')
        .eq('name', pageName)
        .single()
        .then(response => {
            if(response.error){
                reject(response.error.message)
            }
            const {data} = response
            resolve({id: data.id, name: data.name, blocks: data.page_block.map(b=>b.block_id)})    
        })
        .catch(error => reject(error))
        

    } catch (e) {
        reject(e)
    }
})

export const getMainPageBlocks = () => new Promise((resolve, reject) => {
    try {
        supabase.rpc('get_main_page_blocks')
        .then(response => {
            if (response.error) {
                reject(response)
            }
            
            resolve(response)
        })
        .catch(error => reject(error))
            
    } catch (e) {
        reject(e)
    }
})
