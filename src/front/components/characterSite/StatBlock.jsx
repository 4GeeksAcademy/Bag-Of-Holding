export const StatBlock = (props) => {
    const check = (Math.floor((props.value) - 10) / 2)
    const saving = props.proficient ? check + props.proficiency : check
    return (
        <div className="stat-block-box">
            <div className="stat-block-info m-1 p-1 mt-2">
                <h4>{props.name}</h4>
            </div>
            <div className="stat-block-info m-1 p-1">
                <h4>{props.value}

                </h4>
            </div>
            <div className="d-flex justify-content-center m-1">
                <div className="stat-block-info me-1 text-center">
                    <h5>CHK</h5>
                    <h4>{check}</h4>
                </div>
                <div className="stat-block-info ms-1 text-center">
                    <h5>SAV</h5>
                    <h4>{saving}</h4>
                </div>
            </div>

        </div>
    );
};