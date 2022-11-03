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
