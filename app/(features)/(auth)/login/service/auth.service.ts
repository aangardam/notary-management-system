import { createClient } from "@/shared/lib/supabase/client";



export const login = async (email: string, password: string) => {
    const supabase = createClient();
    
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
    });
    console.log('authData ', authData?.user?.id);
    if (authError) throw authError;

    const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('role')
        .eq('user_id', authData?.user?.id)
        .maybeSingle();

    if (profileError) throw profileError;

    console.log('profileData', profileData);
    console.log('profileError', profileError);

    return {
        ...authData,
        role: profileData?.role
    };
};

export const register = async (email: string, password: string) => {
    const { data, error } = await createClient().auth.signUp({
        email,
        password,
    });
    if (error) {
        throw error;
    }
    return data;
};