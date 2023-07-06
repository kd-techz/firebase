import { Box, Center, Container,  Divider,  Title, } from '@mantine/core'
import React, { useEffect, } from 'react'
import FooterSection from './FooterSection';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            offset: 200,
            easing: 'ease-in-out',
            delay: 400,
            once: true
        });
    }, []);
   
    return (
        <>
            <Box pt={50} id='contact' style={{
                background: "#191919"
            }}>
                <Box mt={50}>
                    <Container size="85%" data-aos="fade-up">
                        <Center>
                            <Title order={1}>Contact <span style={{ color: "#37B24D" }}>Me</span></Title>
                        </Center>
                        <Divider mt="lg"></Divider>
                    </Container>
                </Box>
                <Box mt="lg">
                    <FooterSection />
                </Box>
            </Box>
        </>
    )
}

