import Member from "./Member";

const ListAllMember = ({member, display, update}) => {

    return (
        display ? (
            <table className="table-auto border rounded shadow">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Username</th>
                    </tr>
                </thead>
                {
                    member ? (
                        member.map((user) => {
                            return <Member key={user.id} user={user}  update={update}/>
                        })
                    ) : (<div></div>)
                }
            </table>
        ) : (<></>)
    )
}

export default ListAllMember;