import { Button } from "@mui/material";
import { useState } from "react";

interface Person {
  name: string
}

export default function Home() {

  const [person, setPerson] = useState<Person>({name:'Sergio'});

  // const handleClick: Person = () => {
  //   setPerson({
  //     ...person,
  //     name: 'Luis!'
  //   })
  // }

  return (
    <>
    <div>{person.name}</div>
    <Button color="error" onClick={() => setPerson({ ...person, name: 'Inline name' })}>Update Inline</Button>
    {/* <Button color="error" onClick={handleClick}>Update</Button> */}
    </>
  )
}
