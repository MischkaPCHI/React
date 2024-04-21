import "./styles.css"
import ClassWorkProfileCards from "../../components/ClassWorkProfileCards/ClassWorkProfileCards"
import Button from "../../components/Button/Button";
import AnimalCard from "../../components/AnimalCard/AnimalCard";
import { lionData, zebraData, profileData } from "./data";

const normalizeName = (name) => {
    let newName = name.toUpperCase();
    return newName;
}

const Lesson03 = () => {
    return (
        <div className="profile-container">
            {
                profileData.map((link, i) => <ClassWorkProfileCards key={i} url={link.avatarUrl} name={link.name} 
                job={link.job} hobby={link.hobby} />)
            }

            <AnimalCard animalData={lionData} animalName={normalizeName(lionData.name)} > 
                <p>Ляяяяя</p>
                <p>Заберите меня от сюда!!!</p>
            </AnimalCard>
            <AnimalCard animalData={zebraData} animalName={normalizeName(zebraData.name)} />

            <Button buttonName="Send"  />
            <Button buttonName="Confirm" />
        </div>
    )
}

export default Lesson03;
