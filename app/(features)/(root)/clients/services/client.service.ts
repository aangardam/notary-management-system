
import { createClient } from "@/shared/lib/supabase/client";
import { IBodyRequest } from "../interfaces/client";

const supabase = createClient();

export const getClients = async () => {
    const { data, error } = await supabase
        .from('clients')
        .select('*')
    if (error) {
        throw error;
    }
    return data;
};

export const getClientById = async (id: string) => {
    const { data, error } = await supabase
        .from('clients')
        .select('*')
        .eq('id', id)
    if (error) {
        throw error;
    }
    return data;
};

export const create = async (data: IBodyRequest) => {
    const { data: client, error } = await supabase
        .from('clients')
        .insert(data)
    if (error) {
        throw error;
    }
    return client;
};

export const update = async (id: string, data: IBodyRequest) => {
    const { data: client, error } = await supabase
        .from('clients')
        .update(data)
        .eq('id', id)
    if (error) {
        throw error;
    }
    return client;
};

export const deleteClient = async (id: string) => {
    const { data, error } = await supabase
        .from('clients')
        .delete()
        .eq('id', id)
    if (error) {
        throw error;
    }
    return data;
};