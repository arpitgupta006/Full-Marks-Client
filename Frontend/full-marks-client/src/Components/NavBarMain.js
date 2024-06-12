import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'; 
import './NavBarMain.css'

const navBarData = [ 
    { 
        label: "Home", 
        url: "/", 
    }, 
    { 
        label: "Books", 
        submenu: [ 
            { 
                label: "Tourism", 
                url: "/react", 
                submenu: [ 
                    { 
                        label: "Skill Education", 
                        url: "/react/hooks", 
                    }, 
                     
                ], 
            }, 
            { 
                label: "Art & Craft", 
                url: "/javascript", 
                submenu: [ 
                    { 
                        label: "Junior Artist", 
                        url: "/react/hooks", 
                    }, 

                    { 
                        label: "Go Colors Ver 1", 
                        url: "/react/hooks", 
                    }, 
                     
                ], 
              
            },
            
            { 
                label: "Value Education & Life skills", 
                url: "/javascript", 
                submenu: [ 
                    { 
                        label: "True Values Ver 1", 
                        url: "/react/hooks", 
                    }, 

                    { 
                        label: "True Version (Gulf Edition) Ver 1", 
                        url: "/react/hooks", 
                    }, 
                     
                ], 
              
            },

            { 
                label: "Urdu", 
                url: "/javascript", 
                submenu: [ 
                    { 
                        label: "My Urdu Ver 1", 
                        url: "/react/hooks", 
                    }, 
                ], 
              
            },

            { 
                label: "Punjabi", 
                url: "/javascript", 
                submenu: [ 
                    { 
                        label: "My Punjabi Ver 1", 
                        url: "/react/hooks", 
                    }, 
                ], 
              
            },

            { 
                label: "Moral Values", 
                url: "/javascript",  
              
            },

            { 
                label: "Hello Kids", 
                url: "/javascript", 
                submenu: [ 
                    { 
                        label: "Hello Kids", 
                        url: "/react/hooks", 
                    }, 
                ], 
              
            },

            { 
                label: "Financial Literacy", 
                url: "/javascript", 
                submenu: [ 
                    { 
                        label: "Skill Education", 
                        url: "/react/hooks", 
                    }, 
                ], 
              
            },

            { 
                label: "Financial Markets", 
                url: "/javascript", 
                submenu: [ 
                    { 
                        label: "Skill Education", 
                        url: "/react/hooks", 
                    }, 
                ], 
              
            },

            { 
                label: "Financial Markets And Management", 
                url: "/javascript", 
                submenu: [ 
                    { 
                        label: "Skill Education", 
                        url: "/react/hooks", 
                    }, 
                ], 
              
            },

            { 
                label: "Marketing and Sales", 
                url: "/javascript", 
                submenu: [ 
                    { 
                        label: "Skill Education", 
                        url: "/react/hooks", 
                    }, 
                ], 
              
            },

            { 
                label: "Marketing", 
                url: "/javascript", 
                submenu: [ 
                    { 
                        label: "Skill Education", 
                        url: "/react/hooks", 
                    }, 
                ], 
              
            },
        ], 
    }, 
    { 
        label: "Classes", 
        url: "/about", 

        submenu : [

            { 
                label: "2nd Class", 
                url: "/javascript",  
              
            },

            { 
                label: "3rd Class", 
                url: "/javascript",  
              
            },

            { 
                label: "4th Class", 
                url: "/javascript",  
              
            },

            { 
                label: "5th Class", 
                url: "/javascript",  
              
            },

            { 
                label: "6th Class", 
                url: "/javascript",  
              
            },

            { 
                label: "7th Class", 
                url: "/javascript",  
              
            },

            { 
                label: "8th Class", 
                url: "/javascript",  
              
            },

            { 
                label: "9th Class", 
                url: "/javascript",  
              
            },

            { 
                label: "10th Class", 
                url: "/javascript",  
              
            },

            { 
                label: "11th Class", 
                url: "/javascript",  
              
            },

            { 
                label: "12th Class", 
                url: "/javascript",  
              
            },

            { 
                label: "Pre-Primary Class", 
                url: "/javascript",  
              
            },

            { 
                label: "Praveshika Class", 
                url: "/javascript",  
              
            },

            { 
                label: "Beginner Class", 
                url: "/javascript",  
              
            },
        ]
        
    },
    
    { 
        label: "Login to Dashboard", 
        url: "/about", 
    },

    { 
        label: "Skill Education", 
        url: "/about", 
    },

    { 
        label: "Resources", 
        url: "/about", 
    },

    { 
        label: "Webinar", 
        url: "/about", 
    },

    { 
        label: "Contact", 
        url: "/about", 
    },
]; 

function NavBarMain() {

    const menuShow = (mItems) => { 
        return mItems.map( 
            (item, index) => { 
                if (item.submenu) { 
                    return ( 
                        <NavDropdown 
                            title={ 
                                item.label 
                            } 
                            key={index} 
                            className="dropdown-menu-dark  
                                       dropend dropdown"> 
                            {menuShow( 
                                item.submenu 
                            )} 
                        </NavDropdown> 
                    ); 
                } else { 
                    return ( 
                        <Nav.Link 
                            href={ 
                                item.url 
                            } 
                            key={index}> 
                            {item.label} 
                        </Nav.Link> 
                    ); 
                } 
            } 
        ); 
    }; 
    const navStyle = { 
        color: "black", 
        fontWeight: "bold", 
    }; 
   
  return (
    <div>
        
    <Navbar 
           bg="light"
            expand="lg"
            variant="light"> 
            <Navbar.Brand href="#home"> 
            <img
              src="/img/logo.svg"
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          
            </Navbar.Brand> 
            <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
            <Navbar.Collapse id="basic-navbar-nav"> 
                <Nav 
                    className="mr-auto"
                    style={navStyle}> 
                    {menuShow( 
                        navBarData 
                    )} 
                </Nav> 
            </Navbar.Collapse> 
        </Navbar> 
  
    </div>
  )
}

export default NavBarMain