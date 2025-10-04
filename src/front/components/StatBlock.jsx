import { Link } from "react-router-dom";

export const StatBlock = (props) => {
    return (
        <div className="stat-block-box">
            <div className="stat-block-info">
                <h4>{props.name}</h4>
            </div>
            <div className="stat-block-info">
                <h4>{props.value}</h4>
            </div>
            <div className="row">
                <div className="stat-block-info col-5">
                    <h4>{props.check}</h4>
                </div>
                <div className="stat-block-info col-5">
                    <h4>{props.saving}</h4>
                </div>
            </div>
        </div>
    );
};