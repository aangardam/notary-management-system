import { Form } from "@/shared/components/ui/form"
import useClient from "../hooks/use-client";
import FormWrapper from "@/shared/components/form/form-wrapper";
import FormInput from "@/shared/components/form/form-input";
import { Button } from "@/shared/components/ui/button";
import { IClient } from "../interfaces/client";
import { BsDownload, BsXLg } from "react-icons/bs";

interface PropTypes {
    data?: IClient;
    onClose?: () => void;
}

const FormClient = (props: PropTypes) => {
    const { data, onClose } = props;
    const {
        handleSubmit,
        form,
        isLoading
    } = useClient(data, onClose);

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                <FormWrapper >
                    <FormInput 
                        name="identity_number" 
                        label="Identity Number"
                        placeholder="Input Identity Number" 
                        control={form.control}
                    />
                    <FormInput 
                        name="full_name" 
                        label="Full Name"
                        placeholder="Input Name" 
                        control={form.control}
                    />
                    <FormInput 
                        name="email"
                        label="Email"
                        placeholder="Input Email" 
                        control={form.control}
                    />
                     <FormInput 
                        name="phone"
                        label="Phone"
                        placeholder="Input Phone" 
                        control={form.control}
                    />
                    <FormInput 
                        name="address"
                        label="Address"
                        placeholder="Input Address" 
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

export default FormClient