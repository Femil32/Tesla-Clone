import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import {SectionsData} from '../data.js'

function Home() {
    return (
        <Container>
            {SectionsData.map(data => <Section data={data} key={data.title}/>)}
        </Container>
    )
}

export default Home


const Container = styled.div`
    height:100vh;
`