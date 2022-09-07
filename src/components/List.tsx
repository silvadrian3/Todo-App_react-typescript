import React from "react";
import { IState as IProps} from "../App"



const List: React.FC<IProps> = ({ people }) => {

    const renderList = (): JSX.Element[] => {
        return people.map((person, index) => {
            return (
                <li className="List" key={index}>
                    <div className="List-header">{person.name}</div>
                    <p>{person.age} years old</p>
                </li>
            )

        })
    }
    return (
        <ul>
            {renderList()}
        </ul>
    )
}


export default List