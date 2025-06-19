import { supabase } from "../db/supabase.cnx.js"

export const CardRepository = {

    getAll: async () => {

        let { data: CreditCard, error } = await supabase
            .from('CreditCard')
            .select('*')


        if (error) {
            return error.code
        }


        return { data: CreditCard }
    },

    createOne: async (CreditCard) => {

        const { data, error } = await supabase
            .from('CreditCard')
            .insert([CreditCard])
            .select()

        if (error) {
            return error.code
        }
        console.log(data);

        return { data }

    },
    updateById: async (id, updatedData) => {
        return await supabase.from("CreditCard").update(updatedData).eq("id", id).select().single();

    },

    deleteCard: async (id) => {
        return await supabase.from("CreditCard").delete().eq("id", id);
    },

    cardByEmail: async (email) => {
    return await supabase.from("CreditCard").select("*").eq("email", email);
    }

}