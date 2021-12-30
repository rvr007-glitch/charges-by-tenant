import Details from "./components/Details"
import TableList from "./components/TableList"
import Taskbar from "./components/taskbar"

export default function Home() {
    return (
        <div className="Parent">
            <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
            <Taskbar />
            <div className="S_right">
                <Details email="Email1" detail1="Details" detail2="Details" detail3="Details" detail4="Details" />
                <hr />
                <TableList head="Your Sites" flat="Flat-402" loc="Near Road, XYZ Town, ABC" siteName="Sites Name" available="Alloted/not Alloted" />
            </div>
        </div>
    )
}
