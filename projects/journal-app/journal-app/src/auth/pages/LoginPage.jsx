import { Grid2, Typography, TextField } from "@mui/material"

export const LoginPage = () => {

    console.log("prueba");
    return (
        <Grid2 
            container
            spacing={ 0 }
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh' , backgroundColor: 'primary.main', padding: 4}}
        >

            <Grid2
                className="box-shadow"
                sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }}
            >
                <Typography variant="h5" sx={{ mb: 1}}>Login</Typography>

                <form action="">
                    <Grid2 container>
                        <Grid2 size={{ xs: 16 }} sx={{ mt: 2}}>
                            <TextField 
                                label="Correo" 
                                type="email"
                                placeholder="example@google.com"
                                fullWidth
                            />
                        </Grid2>

                        <Grid2 size={{ xs: 16 }} sx={{ mt: 2}}>
                            <TextField 
                                label="Contraseña" 
                                type="password"
                                placeholder="Contraseña"
                                fullWidth
                            />
                        </Grid2>


                    </Grid2>


                    
                </form>

            </Grid2>

        </Grid2>

    )
}
