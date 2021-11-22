import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import {NavList} from '../data'
import {selectCars} from '../features/car/carSlice'

function Navbar() {
    const [navFade, setNavFade] = useState(false)
    const [mobNavShow, setMobNavShow] = useState(false)
    const cars = useSelector(selectCars);

    useEffect(() => {
        window.addEventListener('scroll',() => {
            if(window.scrollY > 100){
                setNavFade(true)
            }else{
                setNavFade(false)
            }
        });
        return window.removeEventListener('scroll',null)
    }, [])

    const scrollCall = (e) =>{
        console.log(e.target.firstChild.innerText);
    };

    const carsId = [
        {
            name:"Modal S",id:"Modal_S"
        },{
            name:"Modal Y",id:"Modal_Y"
        },{
            name:"Modal 3",id:"Modal_3"
        },{
            name:"Modal X",id:"Modal_X"
        }
    ]

    return (
        <Nav className={navFade && 'navFade'} >
            <a href="index.html">
                <svg width="100" height="24" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <title>background</title>
                        <rect fill="none" id="canvas_background" height="15" width="100" y="-1" x="-1"/>
                        <g display="none" overflow='visible' y="0" x="0" height="100%" width="100%" id="canvasGrid">
                            <rect fill="url(#gridpattern)" strokeWidth="0" y="2" x="2" height="36" width="164"/>
                        </g>
                    </g>
                    <g>
                        <g stroke="null" id="svg_5">
                            <path stroke="null" id="svg_4" fill="#000" d="m0.33333,2.84514a2.83227,5.1168 0 0 0 2.04391,3.65562l3.19141,0l0.16351,0.11606l0,14.54857l1.99134,0l0,-14.52749l0.18104,-0.11606l3.19434,0a2.86731,5.1801 0 0 0 2.0439,-3.65559l0,-0.03694l-12.80944,0l0,0.01583zm69.67086,-0.02109l-1.98551,0l0,18.38354l9.09245,0a2.82643,5.10625 0 0 0 1.73441,-3.61868l-8.84721,0l0.00586,-14.76486zm-15.27965,3.61868c1.057,-0.52752 1.94464,-2.01507 2.15779,-3.62922l-11.12468,0.03163l0,10.84024l9.10121,0l0,3.81385l-7.14199,0a3.97101,7.17407 0 0 0 -2.54319,3.69254l11.64734,0l0,-11.11452l-9.0983,0l0,-3.63451l7.00182,0zm33.92006,14.75432l1.97383,0l0,-7.39562l7.17702,0l0,7.39562l1.97089,0l0,-11.08815l-11.12175,-0.02111l0,11.10927zm-63.39023,-14.71212l7.59164,0a2.79431,5.04822 0 0 0 2.0585,-3.69254l-11.70864,0a2.80599,5.06932 0 0 0 2.0585,3.69254zm0,7.26373l7.59164,0a2.80015,5.05877 0 0 0 2.0585,-3.69251l-11.70864,0a2.81183,5.07987 0 0 0 2.0585,3.69251zm0,7.45893l7.59164,0a2.80015,5.05877 0 0 0 2.0585,-3.69254l-11.70864,0a2.80891,5.0746 0 0 0 2.0585,3.69254zm65.14507,-14.71212l7.59164,0a2.79723,5.0535 0 0 0 2.06142,-3.69254l-11.71156,0a2.80015,5.05877 0 0 0 2.0585,3.69254z" className="tds-icon-fill--primary"/>
                        </g>
                    </g>
                </svg>
            </a>
            <MainMenu>
                {carsId && carsId.map((car,index) => <a href={`#${car.id}`} key={index} onClick={(e) => scrollCall(e)}><span>{car.name}</span></a>)}
            </MainMenu>
            <RightMenu>
                <a href="index.html"><span>Shop</span></a>
                <a href="index.html"><span>My Account</span></a>
                <CustomMenu onClick={() => {
                    setMobNavShow(true);
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" ><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
                </CustomMenu>
            </RightMenu>
            <BurgerNav show={mobNavShow}>
                <img src="./Imgs/close.svg" alt="Tesla" onClick={() => {
                    setMobNavShow(false);
                }} />
                {carsId && carsId.map((car,index) => <li key={index}><a href={`#${car.id}`} onClick={(e) => scrollCall(e)}>{car.name}</a></li>)}
                {NavList.map(data => <li key={data}><a href="index.html">{data}</a></li> )}
            </BurgerNav>
        </Nav>
    )
}

export default Navbar

const Nav = styled.nav`
    position: relative;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    position:fixed;
    top:0;left:0;
    z-index:99;
    padding:15px;
    overflow:visible;
    `
    
const MainMenu = styled.div`
    display:flex;
    justify-content:center;
    flex:1;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    
    a{
        text-decoration:none;
        font-size:16px;
        text-transform:uppercase;
        margin:0 5px;
        padding:10px 20px;
        &:hover{
            background-color:rgba(0,0,0,0.05);
            border-radius:12px;
        }
        
        span{
            color:#000;
            pointer-events:none;
        }
    }

    @media (max-width:768px){
        display:none;
    }
`

const RightMenu = styled.div`
    position:relative;
    flex:none;
    display:flex;
    display:inline-flex;
    justify-content:space-between;
    align-items:center;
    a{
        text-decoration:none;
        font-size:16px;
        text-transform:uppercase;
        margin:0 5px;
        padding:10px 20px;
        &:hover{
            background-color:rgba(0,0,0,0.05);
            border-radius:12px;
        }
        
    }
    @media (max-width:768px){
        display:flex;
        justify-content:center;
    }
`

const CustomMenu = styled.span`
    display:inline-flex;
    justify-content:space-between;
    align-items:center;
    cursor:pointer;
    margin:0 5px;
    
`

const BurgerNav =styled.div`
    position:fixed;
    top:0;
    right:0;
    height:100vh;
    background:#fff;
    width:300px;
    z-index:100;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    padding:10px;
    transition:all 0.25s;
    transform:${props =>  props.show ? 'translateX(0)' : 'translateX(100%)'};
    img{
        width:35px;
        margin-left:auto;
        cursor:pointer;
    }

    li{
        list-style-type:none;
        padding:10px 25px;
        margin:5px 0;
        // border-bottom:1px solid rgba(0,0,0,0.2);
        &:hover{
            background-color:rgba(0,0,0,0.05);
            border-radius:12px;
        }
        a{
            text-decoration:none;
            font-weight:600;
            font-size:18px;
        }
    }
`