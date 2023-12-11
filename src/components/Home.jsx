import { useEffect, useState } from "react"
import DraggableElement from "./DraggableElement";

export default function Home() {

    const [mainIdea, setMainIdea] = useState("Main idea");
    const [ideaArray, setIdeaArray] = useState([])

    const ideaGenerator = (isNewBranch, idea) => {
        // create nested array to represent ideas. 
        //allow ideas to branch into new ideas at any time
        //return new idea array


        //the idea itself, isIdea, 
        const dummyIdea = [{
            "id":1,
            'idea': "The evening sky is kinda coot",
            'isNewBranch': false

        },{
            "id":2,
            'idea': "The sun is lookin intense right now",
            'isNewBranch': false

        },{
            "id":3,
            'idea': "The moon is lookin sleeper",
            'isNewBranch': true,
            'newBranch':{
                'idea': 'it is true the moon is sleeper',
                'isNewBranch': false
            }
        }]
        const finalIdeaArray = [];
        setIdeaArray(dummyIdea);
    }

    useEffect(()=> {
        ideaGenerator();
    },[])


    return (
        <div>
            <h2 className="main-story-idea">{mainIdea}</h2>
            <div className="ideas-container">
                {/*branching stuff */}
                {ideaArray.map((someIdea)=> {
                    return <DraggableElement ideaContent={someIdea.idea} key={someIdea.id} className="story-idea">{someIdea.idea}</DraggableElement>
                })}
                
                
            </div>
        </div>
    )
}