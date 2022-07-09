import React, {useState} from "react";
import CrushesContext, {Crush, Target, Highlight} from "./crush-context";

const CrushesContextProvider: React.FC = props => {

    const [targets, setTargets] = useState<Target[]>([

    ])

    const [highlights, setHighlights] = useState<Highlight[]> ([

    ])

    const [crushes, setCrushes] = useState<Crush[]>([
        {
            id: 'f1',
            name: 'Sara Andersen',
            photo: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light',
            description: 'Hi darling!',
            gender: '♀ Female'
        },
        {
            id: 'f2',
            name: 'Edita Vestering',
            photo: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurly&accessoriesType=Kurt&hairColor=BrownDark&facialHairType=Blank&clotheType=Overall&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light',
            description: 'Hallo liefling!',
            gender: '♀ Female'
        },
        {
            id: 'f3',
            name: 'Adina Barbosa',
            photo: 'https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Prescription01&facialHairType=Blank&clotheType=ShirtVNeck&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Brown',
            description: 'Pershendetje e dashur!',
            gender: '♀ Female'
        },
        {
            id: 'f4',
            name: 'Carolina Lima',
            photo: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurvy&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Gray01&eyeType=WinkWacky&eyebrowType=Default&mouthType=Default&skinColor=Light',
            description: 'Szia kedvesem!',
            gender: '♀ Female'
        },
        {
            id: 'f5',
            name: 'Sibylle Leibold',
            photo: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairBob&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Gray01&eyeType=Surprised&eyebrowType=Default&mouthType=Default&skinColor=DarkBrown',
            description: 'Hæ elskan!',
            gender: '♀ Female'
        },
        {
            id: 'f6',
            name: 'Elisa Lorenzo',
            photo: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Blank&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Happy&eyebrowType=Default&mouthType=Tongue&skinColor=DarkBrown',
            description: 'Ndewo enyi!',
            gender: '♀ Female'
        },
        {
            id: 'f7',
            name: 'Karoline Sviggum',
            photo: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairBigHair&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=CollarSweater&clotheColor=Gray01&eyeType=Squint&eyebrowType=Default&mouthType=Eating&skinColor=Tanned',
            description: 'Dia duit a stór!',
            gender: '♀ Female'
        },
        {
            id: 'f8',
            name: 'Nuria Leon',
            photo: 'https://avataaars.io/?avatarStyle=Circle&topType=Hijab&accessoriesType=Prescription02&hatColor=Blue03&clotheType=BlazerShirt&eyeType=Cry&eyebrowType=Default&mouthType=Twinkle&skinColor=DarkBrown',
            description: 'Ciao caro!',
            gender: '♀ Female'
        },
        {
            id: 'f9',
            name: 'Naomi Rodrigues',
            photo: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairFro&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Happy&eyebrowType=Default&mouthType=Default&skinColor=Brown',
            description: 'Muraho mukundwa!',
            gender: '♀ Female'
        },
        {
            id: 'f10',
            name: 'Ratna Green',
            photo: 'https://avataaars.io/?avatarStyle=Circle&topType=Hijab&accessoriesType=Blank&hatColor=Blue03&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light',
            description: 'Hi mahal!',
            gender: '♀ Female'
        }
    ]);

    //RANDOM HIGHLIGHT
    // const [tpg, setTpg] = useState(crushes);
    // let index = 0;
        // for(let i = highlights.length; i<10;) {
        //     index = Math.floor(Math.random() * tpg.length);
        //     const highlightBaru = tpg[index];
        //     setHighlights((currHighlight) => {
        //         return currHighlight.concat(highlightBaru);
        //     });
        //     i++;
        //     console.log(tpg);
        //     console.log(highlights);
        //     setTpg(tpg.filter((tampung) => tampung.id !== highlightBaru.id ));
        //     console.log(tpg);
        //     console.log(highlights);
        // }
        // for(i; i<10;){
        //     let result = Math.floor(Math.random() * crushes.length);
        //     const highlightList = crushes[result];
        //     if (highlights.find(f=>f.id === highlightList.id)){
        //         setHighlights((currHighlight) => {
        //             return currHighlight.concat(highlightList);
        //         })
        //         i++;
        //     }
            // else {
            //     setHighlights((currHighlight) => {
            //         return currHighlight.concat(highlightList);
            //     })
            //     i++;
            // }
            // console.log(highlights);

    const addTarget = (id: string) => {
        const newTarget = crushes.filter((list) => list.id == id);
        setTargets((currTargets) => {
            return currTargets.concat(newTarget);
        });
        const newList = crushes.filter((list) => list.id !== id);
        setCrushes(newList);
    };

    const deleteTarget = (id: string) => {
        const newTarget = targets.filter((target) => target.id !== id);
        setTargets(newTarget);
        }

    return(
        <CrushesContext.Provider value={{
            crushes,
            targets,
            highlights,
            addTarget,
            deleteTarget}}>
            {props.children}        
        </CrushesContext.Provider>
    );
};

export default CrushesContextProvider;