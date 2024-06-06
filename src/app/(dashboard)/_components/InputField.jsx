export const InputField = ({ type, name }) => {
    return (
        <div className="flex flex-col space-y-1">
            <label className="font-medium text-sm text-primary-text block mb-1" htmlFor="">{name}</label>
            <input className="border w-[100%] focus:outline-none text-sm rounded-2xl p-3.5 block" type={type} />
        </div>
    )
}