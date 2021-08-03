import React from 'react'
import { TextField, ImageList } from '@material-ui/core'

function Pokedex(){
    return(
      <div>
            <TextField id="Pokémon" label="Pokémon" variant="outlined" autoFocus={true} style={{marginTop:"80px", display:"flex"}}/>
        </div>
    )
};

export default Pokedex
