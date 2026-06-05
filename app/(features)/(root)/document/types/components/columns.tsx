'use client'

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/shared/components/ui/button"
import { ArrowUp } from "lucide-react"
import { CellAction } from "@/shared/components/ui/cell-action"
import FormClient from "./form"
import { IDocumentType } from "../interfaces/document-type"
import FormDocumentType from "./form"

export const columns: ColumnDef<IDocumentType>[] = [
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
        accessorKey: "code",
        header:({column}) => {
            return(
                <Button
                    variant={"ghost"}
                    size={"sm"}
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Code
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
        accessorKey: "name",
        header:({column}) => {
            return(
                <Button
                    variant={"ghost"}
                    size={"sm"}
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Name
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
        accessorKey: "description",
        header:({column}) => {
            return(
                <Button
                    variant={"ghost"}
                    size={"sm"}
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                Description
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
                title="Document Type"
                row={row.original}
                formComponent={FormDocumentType}
                actionUpdate={true}
                dialogSizeUpdate="lg"
                params={row.original.name}
                deleteActionType="document-type"
            />
        },


    }
]