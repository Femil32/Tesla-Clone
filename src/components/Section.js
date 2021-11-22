import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({data}) {
    

    const scrollCall = (e) =>{
        var nextSection = e.target.parentElement.parentElement.parentElement.nextSibling;
        console.log(nextSection.offsetTop + 'px');
        window.scroll({
            top: nextSection.offsetTop,
            left: 0,
            behavior: 'smooth'
          });
    };

    return (
        <Wrap bgImg={data.background} id={data.id} className="setions">
            <Fade bottom>
                <Content>
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                </Content>
            </Fade>
            <ButtonsGroup>
                <Fade bottom>
                    <div>
                        <LeftButton>{data.leftBtn}</LeftButton>
                        {data.rightBtn && <RightButton>{data.rightBtn}</RightButton>}
                        
                    </div>
                    <DownArr src="./Imgs/down-arrow.svg" onClick={(e) => scrollCall(e)} />
                </Fade>
            </ButtonsGroup>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100%;
    height: 100vh;
    background-image: ${props => `url('./Imgs/${props.bgImg}')`};
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    filter:brightness(1.1);
    
    p{
        font-size:18px;
    }

`

const Content = styled.div`
    padding-top:15vh;
    text-align:center;

    h1{
        font-size:40px;
    }
    p{
        font-size:20px;
    }
    @media (max-width:768px){
        h1{
            font-size:36px;
        }
        p{
            font-size:18px;
        }
    }
`
const ButtonsGroup = styled.div`
    text-align:center;
    margin-bottom:30px;
    transition: all 0.25s;

    div{
        display: flex;
        @media (max-width:768px){
            flex-direction: column;
        }
    }
    
`
const LeftButton = styled.button`
    background-color: rgba(23, 26, 32,0.8);
    outline: none;
    border:none;
    height:40px;
    width:265px;
    border-radius:50px;
    color:#fff;
    cursor:pointer;
    text-transform:uppercase;
    font-size:14px;
    margin:8px;
    opacity:0.8;

    &:hover{
        opacity:1;
    }

    @media (max-width:768px){
        width: 300px;
    }
`

const RightButton = styled(LeftButton)`
    background-color: #fff;
    color: var(--main-color);
    font-weight:bold;
`
const DownArr = styled.img`
    margin:20px auto 0;
    width:35px;
    height:35px;
    cursor: pointer;
    animation: animeDown infinite 1.3s;
`
