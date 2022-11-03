import { supabase } from "../supabase/supabaseClient.js";


export const getMainSettings = async () => {
    const { data, error } = await supabase
        .from('mainSettings')
        .select('name, value')
    if(error) {
        throw error
    }
    return data.reduce((result, field) => {
        return {...result, [field.name]: field.value}
    }, {});
}

export const getPages = async () => {
    const { data, error } = await supabase
        .from('pages')
        .select('name, value')
    if(error) {
        throw error
    }
    return data.reduce((result, field) => {
        return {...result, [field.name]: field.value}
    }, {});
}










