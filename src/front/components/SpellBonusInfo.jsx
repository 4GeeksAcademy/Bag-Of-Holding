export const SpellBonusInfo = (props) => {
    if (props.info != "") {
        return (
            <div>
                <h5>{props.type}:</h5>
                <p className="spell-information-box m-2">
                    {props.info}
                </p>
            </div>
        )
    }
    return ("")
}