// import { supabase } from "@/shared/lib/supabase-client";

import { createClient } from "@/shared/lib/supabase/client";

const supabase = createClient();
//dropdown Client
export const getDropdownClient = async () => {
    const { data, error } = await supabase
        .from('clients')
        .select('*')
    if (error) {
        throw error;
    }
    return data;
};

//dropdown document type
export const getDropdownDocumentType = async () => {
    const { data, error } = await supabase
        .from('document_types')
        .select('*')
    if (error) {
        throw error;
    }
    return data;
};