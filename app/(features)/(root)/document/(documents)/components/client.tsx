// app/(features)/menu/page.tsx
'use client'


import { columns } from './columns';
import { useTableData } from '@/shared/hooks/use-table-data';
import { DataTable } from '@/shared/components/ui/data-table';
import { useState } from 'react';
import DialogAdd from '@/shared/components/ui/dialog-add';
import { IDocument } from '../interfaces/document';
import FormDocument from './form';

export default function Client() {
  const {
    data,
    isPending,
    onPaginationChange,
    onSortingChange,
    handleFilter,
    pagination,
    sorting,
    pageCount,
    totalData,
    totalFilteredData,
  } = useTableData<IDocument>({
    table: 'documents',
    searchFields: ['document_number', 'title', 'status', 'notes', 'client_id', 'document_type_id'],
    // filters: { user_id: user },
    relations: 'clients(full_name), document_types(name)',
  });
  

  const [open, setOpen] = useState(false)
  return (
    <div className="container mx-auto py-10">
      <DataTable
        columns={columns}
        data={data}
        isLoading={isPending}
        onPaginationChange={onPaginationChange}
        pageCount={pageCount}
        pagination={pagination}
        sorting={sorting}
        onSortingChange={onSortingChange}
        filter={handleFilter}
        totalData={totalData}
        totalFilteredData={totalFilteredData}
        nameAddButton="Add"
        onClickAdd={() => setOpen(true)}
      />

        <DialogAdd
            open={open}
            onOpenChange={setOpen}
            title="Document"
        >
            <FormDocument onClose={() => setOpen(false)} />
        </DialogAdd>
    </div>
  );
}
