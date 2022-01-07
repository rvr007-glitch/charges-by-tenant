import React from 'react'

const TableList = (props) => {
    return (
        <table className="table table-striped Stable">
            <thead>
                <tr>
                    <th scope="col">{props.flat}</th>
                    <th scope="col">{props.loc}</th>
                    <th scope="col">{props.siteName}</th>
                    <th scope="col">{props.available}</th>
                    <th scope="col">View</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><button type="button" className="btn btn-outline-info">Info</button></td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><button type="button" className="btn btn-outline-info">Info</button></td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><button type="button" className="btn btn-outline-info">Info</button></td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><button type="button" className="btn btn-outline-info">Info</button></td>
                </tr>
                <tr>
                    <th scope="row">5</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><button type="button" className="btn btn-outline-info">Info</button></td>
                </tr>
                <tr>
                    <th scope="row">6</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><button type="button" className="btn btn-outline-info">Info</button></td>
                </tr>
                <tr>
                    <th scope="row">7</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><button type="button" className="btn btn-outline-info">Info</button></td>
                </tr>
            </tbody>
        </table>
    )
}

export default TableList
