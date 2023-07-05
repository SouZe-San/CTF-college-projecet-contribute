import { ReactNode } from "react"

function Rules() {

    const topicNames = [
        "PWN",
        "Cryptography",
        "Promt injection",
        "Reverse engineering",
        "Web security",
        "Hardware exploration",
    ]
    return (
        <div>
            { topicNames.map((ele : string , index : number) : [ReactNode] => {
                <h1 key={index}>
                    {ele}
                </h1>
            })}
        </div>
    )
}
export default Rules