import { Button } from "@mui/material";
import { useState } from "react";

interface Person {
  name: string
}

export default function Home() {

  const [person, setPerson] = useState<Person>({name:'Sergio'});
  
  return (
    <>
    <div>{person.name}</div>
    <Button color="error" onClick={() => setPerson({ ...person, name: 'Jane Smith' })}>Update Inline</Button>
    </>
  )
}
