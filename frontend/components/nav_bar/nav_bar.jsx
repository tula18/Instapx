import React from 'react';

class NavBar extends React.Component {
    constructor(props) {
        super(props)

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(e) {
        e.preventDefault();
        this.props.action().then(() => this.props.history.push('/login'));
    }

    render() {
        return( 
            <div className="main-nav">
                    <button onClick={this.handleLogout}>Log Out</button>
                    <div className=''>
                    <span><img className="ig-logo" src='/assets/ig-logo.png'/></span>
                    <div><h2 id='logo'>Instapx</h2></div>
                    <div className='search-bar'><input type="text" placeholder="Search.."/></div>
                    </div>
                    <span></span>
            </div>
        );
    }

}

export default NavBar;