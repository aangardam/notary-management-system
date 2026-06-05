import { Form } from "@/shared/components/ui/form"
import FormWrapper from "@/shared/components/form/form-wrapper";
import FormInput from "@/shared/components/form/form-input";
import { Button } from "@/shared/components/ui/button";
import { BsDownload, BsXLg } from "react-icons/bs";
import { IDocument } from "../interfaces/document";
import useDocumentType from "../hooks/use-action";
import useDropdown from "@/shared/hooks/use-dropdown";
import FormSelect from "@/shared/components/form/form-select";

interface PropTypes {
    data?: IDocument;
    onClose?: () => void;
}

const FormDocument = (props: PropTypes) => {
    const { data, onClose } = props;
    const {
        handleSubmit,
        form,
        isLoading
    } = useDocumentType(data, onClose);

    const {
        dropdownClient,
        isPendingClient,
        dropdownDocumentType,
        isPendingDocumentType
    } = useDropdown();

    const dropdownStatus = [
        { value: "Draft", label: "Draft" },
        { value: "Review", label: "Review" },
        { value: "Completed", label: "Completed" },
    ];

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                <FormWrapper >
                    <FormInput 
                        name="document_number" 
                        label="Document Number"
                        placeholder="Input Document Number"
                        control={form.control}
                    />
                    <FormInput 
                        name="title" 
                        label="Title"
                        placeholder="Input Title" 
                        control={form.control}
                    />

                    <FormSelect 
                        name="client_id" 
                        label="Client ID"
                        placeholder="Input Client ID" 
                        control={form.control}
                        listData={dropdownClient || []}
                        loading={isPendingClient}
                    />

                    <FormSelect 
                        name="document_type_id" 
                        label="Document Type ID"
                        placeholder="Input Document Type ID"
                        control={form.control}
                        listData={dropdownDocumentType || []}
                        loading={isPendingDocumentType}
                    />
                       

                    <FormSelect 
                        name="status" 
                        label="Status"
                        placeholder="Input Status" 
                        control={form.control}
                        listData={dropdownStatus}
                    />
                    
                    <FormInput 
                        name="notes"
                        label="Notes"
                        placeholder="Input Notes" 
                        control={form.control}
                        type="textArea"
                        isRequired={false}
                    />

                </FormWrapper>
                <div className="flex justify-end gap-5">
                    <Button 
                        variant="redGradient"
                        onClick={onClose}
                        type="button"
                        className="px-5 w-32.5 cursor-pointer"
                    >
                        <BsXLg className="mr-2" />
                        Cancel
                    </Button>
                    <Button 
                        variant="primaryGradient"
                        type="submit"
                        className="px-5 w-32.5 cursor-pointer"
                        isLoading={isLoading}
                    >
                        <BsDownload className="mr-2" />
                        {isLoading ? "Loading..." : "Save"}
                    </Button>
                </div>
            </form>
        </Form>
    )
}

export default FormDocument