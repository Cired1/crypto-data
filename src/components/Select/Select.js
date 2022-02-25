
const Select = ({ data, handleChange, name, title }) => {
    return (
        <div className="d-flex align-items-center justify-content-center gap-2 flex-wrap mb-4">
            <label htmlFor={name}>
                {title}
            </label>
            <select
                name={name}
                className="form-select w-25"
                style={{ minWidth: "250px" }}
                onChange={handleChange}
            >
                {data.map((item) =>
                    <option
                        key={item.id}
                        value={item.id}
                    >
                        {item.name}
                    </option>
                )}
            </select>
        </div>
    )
}

export default Select
