import React from 'react'
import Comp from './Comp'

function Dashboard() {
    const blue = "#11277d"
    const skyblue = "skyblue"
    const orange = "#e81607"
    const pink = "#e874ba"
    const purple = "#8d58a6"
    return (
        <div className='flex flex-wrap flex-row'>
            <div>
                <Comp
                    text="Research"
                    color={blue}
                    textColor="white"
                />

                <Comp
                    text="Planning"
                    color={skyblue}
                />
                <Comp
                    text="Design"
                    color={orange}
                />
                <Comp
                    text="Manifacturing"
                    color={pink}
                />
                <Comp
                    text="Sales/Marketing"
                    color={purple}
                />
            </div>

            <div>
                <Comp
                    text="External"
                    color={blue}
                    textColor= "white"
                />
                <Comp
                    text="Internal"
                    color={blue}
                    textColor="white"
                />
                <Comp
                    text="PRD"
                    color={skyblue}
                />
                <Comp
                    text="Specs"
                    color={skyblue}
                />
                <Comp
                    text="Hardware"
                    color={orange}
                />
                <Comp
                    text="Software"
                    color={orange}
                />
                <Comp
                    text="Material"
                    color={pink}
                />
                <Comp
                    text="Production"
                    color={pink}
                />
                <Comp
                    text="Online"
                    color={purple}
                />
                <Comp
                    text="Dealership"
                    color={purple}
                />
            </div>

            <div>
                <Comp
                    text="B2C"
                    color={blue}
                    textColor = "white"
                />
                <Comp
                    text="B2C"
                    color={blue}
                    textColor = "white"
                />
            </div>

            <div>
                <Comp
                    text= "Online"
                    color={blue}
                    textColor = "White"
                />
                <Comp
                    text= "Interview"
                    color={blue}
                    textColor = "White"
                />
                <Comp
                    text= "Public Data"
                    color={blue}
                    textColor = "White"
                />
                <Comp
                    text= "Health"
                    color={blue}
                    textColor = "White"
                />
            </div>
        </div>
    )
}

export default Dashboard