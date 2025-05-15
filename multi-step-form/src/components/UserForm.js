import React , { useState } from 'react'
import  FormUserDetail  from './FormUserDetail'
import FormPaswordDetail  from './FormPaswordDetail'
import  Conform  from './Conform'
import Success  from './success'

const UserForm = ({step, setStep}) => {
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const   nextSTEP = ()=>{
        if (password !== confirmPassword) {
          alert('Passwords do not match');
        } else {
            setStep(step+1)
        }
      
    }

    const   prevSTEP = ()=>{
        if (step === 2) {
            setPassword('');
            setConfirmPassword('');
            setStep(step-1)
        } else {
            setStep(step-1)
        }
        
      }

 switch(step){
  case 1:
    return (
        <FormUserDetail 
         firstName={firstName}
         lastName={lastName}
         email={email}
         nextSTEP={nextSTEP}
         setStep={setStep}
         setFirstName={setFirstName}
         setLastName={setLastName}
         setEmail={setEmail} 
        />
    )
    break;

  case 2:
    return (
        <FormPaswordDetail 
        setStep={setStep} 
        setPassword={setPassword} 
        setConfirmPassword={setConfirmPassword}
        prevSTEP={prevSTEP}
        nextSTEP={nextSTEP}
        />
    )
    break;
  case 3:
    return (
            <Conform
             prevSTEP={prevSTEP}
             nextSTEP={nextSTEP}
             firstName={firstName}
             lastName={lastName} 
             email={email}
             password={password}
             confirmPassword={confirmPassword}
             />
        )
        break;
  case 4:
    return (
                <Success />
            )
        break;

 }
}

export default UserForm
