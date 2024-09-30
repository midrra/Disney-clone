import styles from "styled-components";

const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoone src="/images/cta-log-one.png" alt="" />
          <SignUp>GET ALL THERE</SignUp>
          <Discription>
            Get Premier Access to Raya and the Last Drag , with a Disney +
            subscription . As of 03/26/21, and the Disney Bundle will increase
            by $1.
          </Discription>
          <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styles.section`
  overflow: hidden;
  display: flex;
  flex-direction:column;
  text-align:center;
  height:100vh;
`;

const Content = styles.div`
margin-bottom:100vw;
width:100%;
position:relative;
min-height:100vh;
box-sizing:border-box;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
padding:80px 40px;
height:100%;
`;

const BgImage = styles.div`
height:100%;
background-position:top;
background-size:cover;
background-repeat:no-repeat;
background-image:url("/images/loginBackground.jpg");
position:absolute;
top:0;
right:0;
left:0;
z-index:-1;
`;

const CTA = styles.div`
max-width:650px;
display:flex;
flex-direction:column;

`;

const CTALogoone = styles.img`
margin-bottom:12px;
max-width:600px;
min-width:1px;
display:block;
width:100%;
`;

const SignUp = styles.a`
  font-weight:bold;
  color:#f9f9f9;
  background-color:#0063e5;
  margin-bottom:12px;
  width:100%:
  letter-spacing:1.5px;
  font-size:18px;
  padding:16.5px 0;
  border:1px solid transparent;
  border-radius:4px;

  &:hover{
    background-color:#0483ee;

  }
`;

const Discription = styles.p`
color:hsla(0,0%,95.3%,1);
font-size:11px;
margin;0 0 24px;
line-height:1.5;
letter-spacing:1.5px;
Discription
`;

const CTALogoTwo = styles.img`
max-width:600px;
margin-bottom:20px;
transition:inline-block;
vertical-align:bottom;
width:100%;
`;

export default Login;
