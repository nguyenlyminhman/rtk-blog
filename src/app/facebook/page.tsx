'use client'

import { useRouter } from 'next/navigation'
import { use } from 'react';
import { Button } from 'react-bootstrap';

export default function Facebook () {
    const router = useRouter();

    const handleClick = () => {
        router.push('/');
    }
    return <>
    This is a facebook page
    <button onClick={handleClick} >Back to Home</button>
    <Button variant='success' onClick={handleClick} >Back to Home</Button>
    </>
}