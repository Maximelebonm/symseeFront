import './contactScreen.css';
import { DefaultButton } from '../../components/uiElements/defaultButton/defaultButton';


export const ContactScreen =()=> {


    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log("pass")
        // console.log(e.target.elements)
        const form = e.target
        const elements = e.target.elements

        const formData = new FormData(form);

        const email = formData.get("constactScreenEmail");
        const title = formData.get("constactScreenTitle");
        const message = formData.get("constactScreenMessage");

        console.log("Sending email...");
        console.log("Email sent to:", email);
        console.log("Title:", title);
        console.log("Message:", message);
        
        form.reset()
    }

    const condition = true
 // dans une class <img class='container section blabla'/>
    return (
        <div id='constactScreenFormContainer'>
        <p>
            afin de répondre de la manière la plus efficace possible veuillez bien renseigner le sujet du mail
        </p>
            <form  onSubmit={handleSubmit} id='contactScreenForm'>
            <div>
                <label htmlFor='constactScreenEmail'>Votre Email</label>
                <input type='email' name='constactScreenEmail' id='constactScreenEmail' required/>
            </div>
            <div>
                <label htmlFor='constactScreenTitle'> Sujet du mail</label>
                <input type="text" name='constactScreenTitle' id='constactScreenTitle' required/>
            </div>
            <div>
                <label htmlFor='constactScreenMessage'> message : </label>
                <textarea name="constactScreenMessage" id='constactScreenMessage' rows="10" cols="30" required style={{ resize: 'none' }}/>
            </div>

{/* 
                <button type="submit" value="Submit" id='contactScreenFormButton'>
                    Envoyer
                </button> */}
              
                <DefaultButton text='Envoyer' type="submit" value="Submit" id='contactScreenFormButton'/>

            </form>

        </div>
    )
}