import React from "react"

export default ItemBlock = ({item}) => {
    return(
        <div>
            <div>
                {/* <img />  */}
                 {/*an icon for each item will be imported (possibly from the API) for the images*/}
            </div>
            <div>
                <h3>{item.name}</h3>
            </div>
            <div>
                {item.stats &&(
                    <ul>
                        {Object.entries(item.stats).map(([key, value]) => (
                            <li key={key}>
                                <span>{key}: </span>
                                {Array.isArray(value) ? value.join(", ") : value}
                            </li>
                        ))}  
                    </ul>
                )}
            </div>
        </div>
    )
}