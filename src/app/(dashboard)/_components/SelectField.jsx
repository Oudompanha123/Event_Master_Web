export const SelectField = ({ parentFunc }) => {
    return (
        <button onClick={() => parentFunc("select")} className={`flex flex-col px-4 py-2 focus:border-[#551FFF] rounded-2xl border duration-300 cursor-pointer bg-white`}>
            <h2>Select</h2>
            <p className="text-sm text-neutral-400 font-light">List of values</p>
        </button>
    )
}
