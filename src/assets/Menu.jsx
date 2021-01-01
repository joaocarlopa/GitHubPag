import React from 'react';
import Container from '../views/assets/Container';
import Profile from '../views/assets/Profile';
import Fixed from '../views/assets/Fixed';
import { BrowserRouter as Router } from 'react-router-dom';
import './menu.css';

export default props => {
    return (
        <Router>
            <aside className='Menu'>
                <div className='top'>
                    <div className='topContent'>
                        <div><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="iconGitTop" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg></div>

                        <div className='topMain'>
                            <nav>
                                <ul>
                                    <li>Why GitHub? <svg style={{ 'color': 'rgb(255, 255, 255, 0.7)', 'margin-left': '-1px' }} xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-chevron-down" viewBox="0 -1 16 16">
                                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                    </li>
                                    <li>
                                        <a href='/'>Team</a>
                                    </li>
                                    <li>
                                        <a href='/'>Enterprise</a>
                                    </li>
                                    <li className='barTop'>Explore <svg style={{ 'color': 'rgb(255, 255, 255, 0.7)', 'margin-left': '-1px' }} xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-chevron-down" viewBox="0 -1 16 16">
                                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                    </li>

                                    <li>
                                        <a href='/'>Marketplace</a>
                                    </li>

                                    <li className='barTop'>Pricing <svg style={{ 'color': 'rgb(255, 255, 255, 0.7)', 'margin-left': '-1px' }} xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-chevron-down" viewBox="0 -1 16 16">
                                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                    </svg> </li>
                                </ul>

                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="iconX" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </nav>
                        </div>

                        <div className='search'>
                            <input type='text' placeholder='Search' id='inputSearch' /> <div className='iconS' style={{ 'width': '20px', 'height': '20px', 'border': '1px solid rgb(255, 255, 255, 0.3)', 'border-radius': '5px', 'textAlign': 'center', 'margin-top': '-5px' }}> <span style={{ 'position': 'relative', 'top': '2px', 'color': 'rgb(255, 255, 255, 0.7)'  }} >/</span> </div>
                        </div>



                        <div class='login'>
                            <a href='/' className='signIn'>Sign in</a>

                            <a href='/' className='signUp'>Sign up </a>
                        </div>


                    </div>
                </div>
                <Fixed />
                <div className='all'>
                    <Profile />
                    <Container />
                </div>

                <footer>
                    <hr className='hr' />
                    <div className='containerFooter'>
                        <div className='alignFooter cred'>© 2020 GitHub, Inc.</div>
                        <div className='alignFooter'><a href='./'>Terms</a></div>
                        <div className='alignFooter'><a href='./'>Privacy</a></div>
                        <div className='alignFooter'><a href='./'>Security</a></div>
                        <div className='alignFooter'><a href='./'>Status</a></div>
                        <div className='alignFooter'><a href='./'>Help</a></div>
                        <div className='alignFooter iconG'><a href='./'> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="iconGitFooter" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg></a></div>
                        <div className='alignFooter'><a href='./'>Contact GitHub</a></div>
                        <div className='alignFooter'><a href='./'>Pricing</a></div>
                        <div className='alignFooter'><a href='./'>API</a></div>
                        <div className='alignFooter'><a href='./'>Training</a></div>
                        <div className='alignFooter'><a href='./'>Blog</a></div>
                        <div className='alignFooter'><a href='./'>About</a></div>
                    </div>
                </footer>

            </aside>
        </Router>
    )
}