import React from 'react';
import { Link } from 'react-router-dom';

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
        <div className="big-nav">
            <div className="main-nav">
                    <button onClick={this.handleLogout}>Log Out</button>
                    {/* <img className="ig-logo" src='/assets/ig-logo.png'/> */}
                    <div className='all-nav-logos'>
                    <Link to={`/feed`}>
                            <img className="nav-bar-logo" src='/assets/instapxlogo.png' />
                    </Link>

                    <img className="nav-bar-line" src='/assets/logo-line.png' />
                    
                    <Link to={`/feed`}>
                        <img className="nav-bar-word" src='/assets/instapx.png'/>
                    </Link>
                    </div>
                    <div className='search-bar'><input className='search-input'type="text" placeholder="Search"/></div>
                    <div className='user-icon'><Link to={`/users/${this.props.currentUserId}`}><img className="prof-icon" src='/assets/profile-icon.png' /></Link></div>
            </div>
        </div>
        );
    }

}

export default NavBar;