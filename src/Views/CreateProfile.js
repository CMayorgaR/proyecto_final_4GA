import CreateProfileDelivery from '../Components/CreateProfileDelivery';
import Navbar from "../Components/Navbar";
function CreateProfile(){
    return(
        <>
            <Navbar title="Profile" />
            <CreateProfileDelivery />
        </>
    );
}

export default CreateProfile;