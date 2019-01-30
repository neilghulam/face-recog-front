import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {

        if(isSignedIn) {
            return(
                <nav style={{display: 'flex', justifyContent: 'space-between',}}>
                    <div className="">
                        <p className="f3 pa3 b" style={{zIndex: 1}} >Neil Ghulam</p>
                    </div>
                    <div style={{display: 'flex', justifyContent: '',}}>
                       <p onClick={() => onRouteChange('signout')} className="f3 link dim black underline pa3 pointer" style={{zIndex: 1}} >Sign Out</p>
                    </div>  
                </nav>
            )
            
        } else {
            return(
            
            <nav style={{display: 'flex', justifyContent: 'space-between',}}>
                <div className="">
                    <p className="f3 pa3 b" style={{zIndex: 1}} >Neil Ghulam</p>
                </div>
                <div style={{display: 'flex', justifyContent: '',}}>
                    <p onClick={() => onRouteChange('signIn')} className="f3 link dim black underline pa3 pointer" style={{zIndex: 1}} >Sign In</p>
                    <p onClick={() => onRouteChange('register')} className="f3 link dim black underline pa3 pointer" style={{zIndex: 1}} >Register</p>
             
                </div>
                </nav>
            )
            
        }
}

export default Navigation;

