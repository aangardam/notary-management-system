'use client'

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/shared/components/ui/button"
import { ArrowUp } from "lucide-react"
import { CellAction } from "@/shared/components/ui/cell-action"
import { capitalizeFirst } from "@/shared/lib/utils"
import { IClient } from "../interfaces/client"
import FormClient from "./form"

export const columns: ColumnDef<IClient>[] = [
    {
        id: "no",
        header: "No",
        cell: ({ row, table }) => {
            const pageIndex = table.getState().pagination.pageIndex;
            const pageSize = table.getState().pagination.pageSize;
            return <div>{pageIndex * pageSize + row.index + 1}</div>;
        },
    },
    {
        accessorKey: "identity_number",
        header:({column}) => {
            return(
                <Button
                    variant={"ghost"}
                    size={"sm"}
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Identity Number
                    <ArrowUp 
                        className={`ml-2 h-4 w-full ${
                        column.getIsSorted() === "asc" ? "" : "rotate-180"
                        } `}
                    />

                </Button>
            )
        }
    },
    {
        accessorKey: "full_name",
        header:({column}) => {
            return(
                <Button
                    variant={"ghost"}
                    size={"sm"}
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Full Name
                    <ArrowUp 
                        className={`ml-2 h-4 w-full ${
                        column.getIsSorted() === "asc" ? "" : "rotate-180"
                        } `}
                    />

                </Button>
            )
        }
    },
   
    {
        accessorKey: "phone",
        header:({column}) => {
            return(
                <Button
                    variant={"ghost"}
                    size={"sm"}
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                Phone
                <ArrowUp 
                    className={`ml-2 h-4 w-full ${
                    column.getIsSorted() === "asc" ? "" : "rotate-180"
                    } `}
                />

                </Button>
            )
        },
    },
    {
        accessorKey: "email",
        header:({column}) => {
            return(
                <Button
                    variant={"ghost"}
                    size={"sm"}
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                Email
                <ArrowUp 
                    className={`ml-2 h-4 w-full ${
                    column.getIsSorted() === "asc" ? "" : "rotate-180"
                    } `}
                />

                </Button>
            )
        },
    },
    {
        accessorKey: "address",
        header:({column}) => {
            return(
                <Button
                    variant={"ghost"}
                    size={"sm"}
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                Address
                <ArrowUp 
                    className={`ml-2 h-4 w-full ${
                    column.getIsSorted() === "asc" ? "" : "rotate-180"
                    } `}
                />

                </Button>
            )
        },
    },
    {
        id: "actions",
        header:"Action",
        cell:({row}) => {
        return <CellAction 
                title="Client"
                row={row.original}
                formComponent={FormClient}
                actionUpdate={true}
                dialogSizeUpdate="lg"
                params={row.original.full_name}
                deleteActionType="client"
            />
        },


    }
]