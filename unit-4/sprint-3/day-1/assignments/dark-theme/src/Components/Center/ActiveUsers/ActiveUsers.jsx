import SignleActiveUser from "./SignleActiveUser";
import UserHeader from "./UserHeader";

export default function ActiveUsers(props) {

    const UsersData = [
        { "id": 1, name: "Piyush", address: "Surat, Gujarat", ProLevel: 8, points: 4543, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqPsrt5SZfjg2gmLJzUkoN4JEzVI240XiTmQ&usqp=CAU" },
        { "id": 2, name: "Lokesh", address: "Jaipur, Rajstan", ProLevel: 12, points: 2334, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZHbCmMq5_0mWbxeN0v8wRvu6mMGeK6EeZFw&usqp=CAU" },
        { "id": 3, name: "Akshay", address: "Ahmedabad, Gujarat", ProLevel: 7, points: 3556, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-IL2OfhI-PsQ2C-92OOo7y2mXrSz8sleeLw&usqp=CAU" }
    ]

    return (
        <div style={props.style} id="ActiveUsers">
            <UserHeader />
            {
                UsersData.map((el) => (
                    <SignleActiveUser key={el.id} name={el.name} address={el.address} ProLevel={el.ProLevel} points={el.points} image={el.image} />
                ))
            }
        </div>
    )
};
