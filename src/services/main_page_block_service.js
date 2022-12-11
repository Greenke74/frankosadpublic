import { supabase } from "../supabase/supabaseClient";

export const getMainPageBlock = (id) => new Promise((resolve, reject) => {
    try {
        supabase.rpc('get_main_page_block', {_id: id})
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

export const getMainPageBlocks = () => new Promise((resolve, reject) => {
    try {
        supabase.rpc('get_published_main_page_blocks')
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