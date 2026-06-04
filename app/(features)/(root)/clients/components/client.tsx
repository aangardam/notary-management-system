// app/(features)/menu/page.tsx
'use client'


import { columns } from './columns';
import { useTableData } from '@/shared/hooks/use-table-data';
import { DataTable } from '@/shared/components/ui/data-table';
import { useState } from 'react';
import { useUserStore } from '@/shared/store/user.store';
import { IClient } from '../interfaces/client';
import DialogAdd from '@/shared/components/ui/dialog-add';
import FormClient from './form';

export default function Client() {
  const { user } = useUserStore();
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
  } = useTableData<IClient>({
    table: 'clients',
    searchFields: ['full_name', 'identity_number', 'phone', 'email', 'address'],
    // filters: { user_id: user },
    // relations: 'budgeting(name)',
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
            title="Client"
        >
            <FormClient onClose={() => setOpen(false)} />
        </DialogAdd>
    </div>
  );
}
