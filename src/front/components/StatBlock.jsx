import { Link } from "react-router-dom";

export const StatBlock = (props) => {
    return (
        <div className="stat-block-box">
            <div className="stat-block-info m-1 p-1 mt-2">
                <h4>{props.name}</h4>
            </div>
            <div className="stat-block-info m-1 p-1">
                <h4>{props.value}</h4>
            </div>
            <div className="d-flex justify-content-center m-1 mb-2">
                <div className="stat-block-info col-5 me-1 p-1 text-center">
                    <h5>CHK</h5>
                    <h4>{props.check}</h4>
                </div>
                <div className="stat-block-info col-5 ms-1 p-1 text-center">
                    <h5>SAV</h5>
                    <h4>{props.saving}</h4>
                </div>
            </div>

        </div>
    );
};