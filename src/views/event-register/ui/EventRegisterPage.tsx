'use client'

import { use, useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { getFormAction } from "@/entities/event/api/landingAction";
import { addAttendeeToEventAction } from "@/entities/event/api/eventFormAction";
import { Boolean, InputField } from "@/features/registration-form/fill";
import { RedirectBackComponent } from "@/shared/ui/RedirectButtonComponent"
import { Button } from "@/shared/ui/kit/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/kit/card";
import { Skeleton } from "@/shared/ui/kit/skeleton";

type FormFieldDef = { fieldType: string };

const Page = ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = use(params);
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [registerForm, setRegisterForm] = useState<FormFieldDef[]>();

    useEffect(() => {
        getFormAction(id).then((res) => setRegisterForm(res?.payload?.data?.form ?? []));
    }, [id]);

    const submit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data: Record<string, FormDataEntryValue> = {};
        let allFieldsFilled = true;
        new FormData(e.currentTarget).forEach((value, key) => {
            data[key.toLowerCase().replace(/\s+/g, '')] = value;
            if (!value) allFieldsFilled = false;
        });

        if (!allFieldsFilled) {
            toast.error("Please fill in every field.");
            return;
        }

        setLoading(true);
        try {
            const res = await addAttendeeToEventAction({ data, eventId: id });
            if (res?.status === "CREATED") {
                toast.success("Your submission has been recorded.");
                router.push('/');
                return;
            }
            toast.error(`Your submission was not recorded. ${res?.detail ?? ""}`.trim());
        } catch {
            toast.error("Cannot reach the server. Please try again.");
        }
        setLoading(false);
    };

    return (
        <div className="container">
            <RedirectBackComponent link={`/detail/${id}`} label="Back to event" />
            <Card className="rounded-3xl border-slate-100 shadow-xs">
                <CardHeader>
                    <CardTitle><h1 className="text-2xl font-bold">Register Form</h1></CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="space-y-8" onSubmit={submit} noValidate>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                            {registerForm === undefined
                                ? Array.from({ length: 4 }, (_, i) => (
                                    <div key={i} className="space-y-2">
                                        <Skeleton className="h-4 w-24" />
                                        <Skeleton className="h-12 w-full rounded-2xl" />
                                    </div>
                                ))
                                : registerForm.map((x) => {
                                    const [inputType, inputName] = x.fieldType.split(",");
                                    return inputType == 'boolean'
                                        ? <Boolean key={inputName} name={inputName} />
                                        : <InputField key={inputName} type={inputType} name={inputName} />
                                })}
                        </div>
                        <div className="flex justify-end">
                            <Button type="submit" disabled={loading || !registerForm?.length} className="h-12 w-full rounded-full px-10 font-bold sm:w-auto">
                                {loading && <Loader2 className="animate-spin" aria-hidden="true" />}
                                Submit
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default Page
