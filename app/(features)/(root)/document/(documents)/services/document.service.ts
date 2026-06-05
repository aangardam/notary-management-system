
import { createClient } from "@/shared/lib/supabase/client";
import { IBodyRequest } from "../interfaces/document";

const supabase = createClient();

export const getDocuments = async () => {
    const { data, error } = await supabase
        .from('documents')
        .select('*')
    if (error) {
        throw error;
    }
    return data;
};

export const getDocumentById = async (id: string) => {
    const { data, error } = await supabase
        .from('documents')
        .select('*')
        .eq('id', id)
    if (error) {
        throw error;
    }
    return data;
};

export const create = async (data: IBodyRequest) => {
    const { data: document, error } = await supabase
        .from('documents')
        .insert(data)
    if (error) {
        throw error;
    }
    return document;
};

export const update = async (id: string, data: IBodyRequest) => {
    const { data: document, error } = await supabase
        .from('documents')
        .update(data)
        .eq('id', id)
    if (error) {
        throw error;
    }
    return document;
};

export const deleteDocument = async (id: string) => {
    const { data, error } = await supabase
        .from('documents')
        .delete()
        .eq('id', id)
    if (error) {
        throw error;
    }
    return data;
};