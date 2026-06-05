/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getDropdownClient, getDropdownDocumentType } from "../service/dropdown.service";

const useDropdown = (type?: string) => {
    //dropdown client
    const { data: dropdownClient, isPending: isPendingClient } = useQuery({
        queryKey: ['dropdown-client'],
        queryFn: () => getDropdownClient(),
        select: ( data ) => data.map((item:any) => ({ value: `${item.id}`, label: item.full_name })),
    });

    //dropdown document type
    const { data: dropdownDocumentType, isPending: isPendingDocumentType } = useQuery({
        queryKey: ['dropdown-document-type'],
        queryFn: () => getDropdownDocumentType(),
        select: ( data ) => data.map((item:any) => ({ value: `${item.id}`, label: item.name })),
    });
    
    return {
        dropdownClient,
        isPendingClient,
        dropdownDocumentType,
        isPendingDocumentType
    };
};

export default useDropdown;