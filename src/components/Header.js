import styles from "styled-components";

const Header = (props) => {
  return (
    <Nav>
      <Logo>
        <img src="images/logo.jpg" alt="Disney+" />
      </Logo>
      <NavMenu>
        <a href="/home">
          <img href="/images/home-icon.png" alt="H" />
          <span>Home</span>
        </a>
        <a href="">
          <img href="/images/home-icon.png" alt="s" />
          <span>Search</span>
        </a>
        <a href="">
          <img href="/images/home-icon.png" alt="W" />
          <span>WATCHLIST</span>
        </a>
        <a href="">
          <img href="/images/home-icon.png" alt="O" />
          <span>ORIGINAL</span>
        </a>
        <a href="">
          <img href="/images/home-icon.png" alt="m" />
          <span>MOVIES</span>
        </a>
        <a href="">
          <img href="/images/home-icon.png" alt="s" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <Login>login</Login>
    </Nav>
  );
};

const Nav = styles.nav`
position:fixed;
top:0;
left:0;
right:0;
height:70px;
background-color:#090b13;
display:flex;
justify-content:space-between;
align-items:center;
padding:0 36px;
letter-spacing:16px;
z-index:3;
`;

const Logo = styles.a`
padding:0;
width:80px;
margin-top:4px;
max-height:76px;
font-size:0;
display:inline-block;

  img{
    display:block;
    width:100%;
  }
`;

const NavMenu = styles.div`
align-items:center;
display:flex;
flex-dirction:row nowrap;
height:100%;
justify-content:flex-end;
margin:0px;
padding:0px;
position:relative;
margin-right:auto;
margin-left:25px;

  a{
    display:flex;
    align-items:center;
    padding:0 12px;

    img{
        height:20px;
        min-width:20px;
        z-index:auto;
    }

    span{
        color:rgb(49,249,249);
        font-size:13px;
        letter-spacing:1.42px;
        line-height:1.08;
        padding:2px 0px;
        white-space:nowrap;
        position:relative;


    &:before{
        background-color:rgb(249,249,249);
        border-radius:0px 0px 4px 4px;
        bottom:-6px; 
        content:"";
        height:2px;
        opacity:0;
        position:absolute;
        right:0px;
        left:0px;
        transform-origin:left center;
        transform:scaleX(0);
        transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.4) 0s;
        visibility:hidden;
        width:auto;
    }
 } 

  &:hover{
    span:before{
        transform:scale(1);
        visibility:visible;
        opacity:1 !important;
    }
 }
}

// @media (max-width:768px){
//     display:none;
// }
`;

const Login = styles.a`
background-color:rgba(0,0,0,0.6);
padding:8px 16px;
text-transform:uppercase;
letter-spacing:1.5px;
border:1px solid #f9f9f9;
border-radius:4px;
transition:all 0.2s ease 0s;

&:hover{
    background-color:#f9f9f9;
    color:#000;
    border-color:transparent;
}
`;

export default Header;
