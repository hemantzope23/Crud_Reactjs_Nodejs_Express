import React, { Component } from 'react';

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        };
    };

    render() {

        return this.state.isLoggedIn && <div>Welcome Hemant</div>

        // return (
        //     this.state.isLoggedIn ? (
        //         <div>Welcome Hemant</div>
        //     ) : (
        //             <div>Welcome Guest</div>
        //         )
        // )

        // let messege
        // if (this.state.isLoggedIn) {
        //     messege = <div>Welcome Hemant</div>

        // } else {
        //     messege = <div>Welcome Guest</div>

        // }
        // return<div>{messege}</div>

        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>
        //             Welcome Hemant
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             Welcome Guest
        //         </div>
        //     )
        // }
        // return (
        //     <div>
        //         <div> Welcome Hemant  </div>
        //         <div> Welcome Guest  </div>
        //     </div>
        // );
    }
}

export default UserGreeting;
