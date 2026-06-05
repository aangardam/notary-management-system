import { Form } from "@/shared/components/ui/form"
import FormWrapper from "@/shared/components/form/form-wrapper";
import FormInput from "@/shared/components/form/form-input";
import { Button } from "@/shared/components/ui/button";
import { BsDownload, BsXLg } from "react-icons/bs";
import { IDocumentType } from "../interfaces/document-type";
import useDocumentType from "../hooks/use-action";

interface PropTypes {
    data?: IDocumentType;
    onClose?: () => void;
}

const FormDocumentType = (props: PropTypes) => {
    const { data, onClose } = props;
    const {
        handleSubmit,
        form,
        isLoading
    } = useDocumentType(data, onClose);

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                <FormWrapper >
                    <FormInput 
                        name="code" 
                        label="Code"
                        placeholder="Input Code" 
                        control={form.control}
                    />
                    <FormInput 
                        name="name" 
                        label="Name"
                        placeholder="Input Name" 
                        control={form.control}
                    />
                    
                    <FormInput 
                        name="description"
                        label="Description"
                        placeholder="Input Description" 
                        control={form.control}
                        type="textArea"
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

export default FormDocumentType