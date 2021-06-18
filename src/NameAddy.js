import React from 'react'
import './NameAddy.css';

export default function NameAddy(props){
    return(
    <div>
        <table>
            <tr>
                <th>
                    Name
                </th>
                <th>
                    Address
                </th>
                <th>
                    Senority
                </th>
                </tr>
                <tr>

                    <td>{props.Name}</td>
                    <td>{props.Address}</td>
                    <td>{props.Senority}</td>
                </tr>
            
        </table>
    </div>
    )
}
