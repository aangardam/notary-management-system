
import { createClient } from "@/shared/lib/supabase/client";
import { IBodyRequest } from "../interfaces/document-type";

const supabase = createClient();

export const getDocumentTypes = async () => {
    const { data, error } = await supabase
        .from('document_types')
        .select('*')
    if (error) {
        throw error;
    }
    return data;
};

export const getDocumentTypeById = async (id: string) => {
    const { data, error } = await supabase
        .from('document_types')
        .select('*')
        .eq('id', id)
    if (error) {
        throw error;
    }
    return data;
};

export const create = async (data: IBodyRequest) => {
    const { data: documentType, error } = await supabase
        .from('document_types')
        .insert(data)
    if (error) {
        throw error;
    }
    return documentType;
};

export const update = async (id: string, data: IBodyRequest) => {
    const { data: documentType, error } = await supabase
        .from('document_types')
        .update(data)
        .eq('id', id)
    if (error) {
        throw error;
    }
    return documentType;
};

export const deleteDocumentType = async (id: string) => {
    const { data, error } = await supabase
        .from('document_types')
        .delete()
        .eq('id', id)
    if (error) {
        throw error;
    }
    return data;
};