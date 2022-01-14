import React from 'react'
import { useHistory } from 'react-router';
import { useProfile } from '../Account/Context.Provider';

function AllUser() {
    const {profile} = useProfile();
    const History = useHistory();
    if(!profile){
        History.push('/login');
    }
    if(profile.role === 'doctor'){
        History.push('/alldiseases');
    }
    return (
        <div>
            
        </div>
    )
}

export default AllUser
